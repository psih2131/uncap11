import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    // const serverUrlDomainRequest = ref('https://red-angels-server.ru')

    // const domainUrlCurrent = ref('http://red-angels.ru')

    // const defaultUrlOgImage = ref('https://red-angels-server.ru/wp-content/uploads/2025/12/og-image.jpg')

    const counterValue = ref({
        'count': 1,
        'type': null,
    })

    const modalController = ref({
        'status': false,
        'name': null,
        
    })

    const homeSaleModalShown = ref(false)

    const signUpFormDraft = ref(null)
    const agencyBundleFormDraft = ref(null)

    // const changeOptionData = (newData) => {
    //     optionsData.value = newData
    //     console.log('new value store', optionsData.value)
    // }



    return {
        counterValue,
        modalController,
        homeSaleModalShown,
        signUpFormDraft,
        agencyBundleFormDraft
    }
})