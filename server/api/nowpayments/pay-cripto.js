


  export default defineEventHandler(async (event) => {
    const body = await readBody(event)
  
    const { orderId, gender, quantity, email, accountType, profileLocation, periodOfUse, otherDetails, amount, currency } = body

    let description = `Gender: ${gender},\n Quantity: ${quantity},\n Email: ${email},\n Account Type: ${accountType},\n Profile Location: ${profileLocation},\n Period Of Use: ${periodOfUse},\n Other Details: ${otherDetails}`

  
    const config = useRuntimeConfig()

    let currentUrl
    if (config.urlProdStatus ) {
      currentUrl = config.siteUrlProd
    } else {
      currentUrl = config.siteUrlDev
    }
    
    var myHeaders = new Headers();
    if(config.sandboxMode){
        myHeaders.append("x-api-key", config.nowpaymentsApiKeyDev);
    } else {
        myHeaders.append("x-api-key", config.nowpaymentsApiKey);
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


    let baseUrl 
    
    if(config.sandboxMode){
        baseUrl = 'https://api-sandbox.nowpayments.io/v1/invoice'
    } else {
        baseUrl = 'https://api.nowpayments.io/v1/invoice'
    }

    const response = await $fetch(baseUrl, requestOptions)
  
    return response
  })

