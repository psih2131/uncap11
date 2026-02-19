/** Сюда NOWPayments шлёт статусы платежа. URL задаётся в ipn_callback_url при создании платежа. */
export default defineEventHandler(async (event) => {
  const body = await readBody(event).catch(() => ({}))
  console.log('[NOWPayments IPN]', body)
  return { received: true }
})
