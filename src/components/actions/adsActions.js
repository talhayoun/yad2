export const addAd = (ad) => ({
    type: "ADD_AD",
    ad
})

export const adFilters = (ads) => ({
    type: "FILTER_AD",
    ads
})

export const adEmpty = () => ({
    type: "FILTER_EMPTY"
})