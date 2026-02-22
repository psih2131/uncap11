/** Сюда NOWPayments шлёт статусы платежа. URL задаётся в ipn_callback_url при создании платежа. */
export default defineEventHandler(async (event) => {
  const headers = getRequestHeaders(event)
  console.log('[NOWPayments IPN] request hit, method:', event.method)
  console.log('[NOWPayments IPN] headers:', JSON.stringify(headers, null, 2))
  const body = await readBody(event).catch((err) => {
    console.log('[NOWPayments IPN] readBody error:', err?.message || err)
    return {}
  })
  console.log('[NOWPayments IPN] body:', JSON.stringify(body, null, 2))
  return { received: true }
})
