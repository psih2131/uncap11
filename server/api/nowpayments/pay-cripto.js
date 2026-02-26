


  export default defineEventHandler(async (event) => {
    const body = await readBody(event)
  
    const { orderId, gender, quantity, email, accountType, profileLocation, periodOfUse, otherDetails, amount, currency } = body

    let description = `Gender: ${gender},\n Quantity: ${quantity},\n Email: ${email},\n Account Type: ${accountType},\n Profile Location: ${profileLocation},\n Period Of Use: ${periodOfUse},\n Other Details: ${otherDetails}`

  
    const config = useRuntimeConfig()
    const baseUrl = config.nuxt_bace_api_url || process.env.NUXT_BASE_API_URL
    const currentUrl = config.nuxt_site_url || process.env.NUXT_SITE_URL
    const apiKey = config.nuxt_nopayments_api || process.env.NUXT_NOWPAYMENTS_API

    if (!baseUrl) {
      throw createError({ statusCode: 500, statusMessage: 'NUXT_BASE_API_URL is not set' })
    }
    if (!currentUrl) {
      throw createError({ statusCode: 500, statusMessage: 'NUXT_SITE_URL is not set' })
    }

    var myHeaders = new Headers();
    if (apiKey) {
      myHeaders.append("x-api-key", apiKey);
    } 

    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
    "price_amount": amount,
    "price_currency": "usd",
    // "order_id": "RGDBP-213142",

    "order_description": description,
    "ipn_callback_url": currentUrl + '/api/nowpayments/ipn',
    "success_url": currentUrl + '/payment?success=1',
    "cancel_url": currentUrl + '/payment?cancel=1'
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };


      

    const response = await $fetch(baseUrl, requestOptions)
  
    return response
  })

