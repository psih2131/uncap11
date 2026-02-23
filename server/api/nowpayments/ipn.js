import crypto from 'node:crypto'

/** Сюда NOWPayments шлёт статусы платежа. Проверка подписи x-nowpayments-sig по доке. */
export default defineEventHandler(async (event) => {
  const body = await readBody(event).catch((err) => {
    console.log('[NOWPayments IPN] readBody error:', err?.message || err)
    return null
  })

  if (!body || typeof body !== 'object') {
    console.log('[NOWPayments IPN] empty or invalid body')
    throw createError({ statusCode: 400, statusMessage: 'Bad Request' })
  }

  const config = useRuntimeConfig()

  let ipnSecret
  if (config.nuxt_inp_api_key) {
    ipnSecret = config.nuxt_inp_api_key
  } 
  // const isSandbox = config.sandboxMode === true || config.sandboxMode === 'true'
  // const ipnSecret = isSandbox ? config.ipnApiKeyDev : config.ipnApiKeyProd

  if (ipnSecret) {
    const receivedSig = (getHeader(event, 'x-nowpayments-sig') || '').trim()
    // Дока: sort by keys (в т.ч. вложенные объекты), затем JSON.stringify
    const sortKeys = (obj) => {
      if (obj === null || typeof obj !== 'object') return obj
      if (Array.isArray(obj)) return obj.map(sortKeys)
      const out = {}
      for (const k of Object.keys(obj).sort()) {
        out[k] = sortKeys(obj[k])
      }
      return out
    }
    const sortedBody = sortKeys(body)
    const stringToSign = JSON.stringify(sortedBody)
    const expectedSig = crypto
      .createHmac('sha512', ipnSecret)
      .update(stringToSign)
      .digest('hex')

    if (receivedSig !== expectedSig) {
      console.log('[NOWPayments IPN] signature mismatch')
      console.log('[NOWPayments IPN] received (first 32):', receivedSig.slice(0, 32))
      console.log('[NOWPayments IPN] expected (first 32):', expectedSig.slice(0, 32))
      console.log('[NOWPayments IPN] stringToSign (first 200):', stringToSign.slice(0, 200))
      throw createError({ statusCode: 401, statusMessage: 'Invalid signature' })
    }
  }

  const paymentId = body.payment_id ?? body.invoice_id
  const status = body.payment_status ?? '—'
  console.log('[NOWPayments IPN] payment_id:', paymentId, '| status:', status)

  let strapiUrl
  if (config.nuxt_api_back_url) {
    strapiUrl = config.nuxt_api_back_url
  } 


  if (strapiUrl) {
    const paymentIdStr = String(paymentId)
    const orderDesc = body.order_description ?? ''
    const emailMatch = orderDesc.match(/Email:\s*([^,\n]+)/i)
    const userEmail = (emailMatch?.[1] ?? '').trim()

    const payload = {
      payment_id: paymentIdStr,
      payment_status: body.payment_status ?? '',
      pay_address: body.pay_address ?? '',
      price_amount: body.price_amount != null ? String(body.price_amount) : '',
      price_currency: body.price_currency ?? '',
      pay_currency: body.pay_currency ?? '',
      pay_amount: body.pay_amount != null ? String(body.pay_amount) : '',
      order_description: orderDesc,
      user_email: userEmail,
      full_info: body,
    }

    try {
      const findRes = await $fetch(
        `${strapiUrl}/api/leads-pay-statuses?filters[payment_id][$eq]=${encodeURIComponent(paymentIdStr)}`
      ).catch(() => ({ data: [] }))

      const existing = Array.isArray(findRes?.data) ? findRes.data[0] : findRes?.data?.[0]
      const strapiId = existing?.id ?? existing?.documentId

      if (strapiId != null) {
        await $fetch(`${strapiUrl}/api/leads-pay-statuses/${strapiId}`, {
          method: 'PUT',
          body: { data: payload },
        })
        console.log('[NOWPayments IPN] Strapi updated:', strapiId)
      } else {
        await $fetch(`${strapiUrl}/api/leads-pay-statuses`, {
          method: 'POST',
          body: { data: payload },
        })
        console.log('[NOWPayments IPN] Strapi created', strapiUrl, payload)
      }
    } catch (e) {
      console.log('[NOWPayments IPN] Strapi error:', e?.message || e)
    }
  }

  return { received: true }
})
