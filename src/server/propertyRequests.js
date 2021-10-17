import Axios from 'axios';

export const getAllAds = async () => {
    try {
        const res = await Axios.get(`${process.env.REACT_APP_SERVER_API}/ads`);
        if (!res.data?.ads) {
            throw new Error("Failed to get ads")
        }
        return res.data
    } catch (err) {
        throw new Error(err.message);
    }
}

export const filterAdsExtra = async (properties, floorFrom, floorTo, sizeFrom, sizeTo, date, search) => {
    try {
        // let fixedProperties = properties == [] ? undefined : properties
        const res = await Axios.post(`${process.env.REACT_APP_SERVER_API}/ads/filter/extra`, { properties, floorFrom, floorTo, sizeFrom, sizeTo, date, search });
        if (res.data.filterAds?.length > 0) {
            return res.data.filterAds;
        }
        throw new Error({ err: "Failed to filter ads" });
    } catch (error) {
        throw new Error(error);
    }
}

export const filterAds = async (assetName, assetType, roomFrom, roomTo, priceFrom, priceTo, assetValue) => {
    try {
        console.log(priceFrom, priceTo)
        const res = await Axios.post(`${process.env.REACT_APP_SERVER_API}/ads/filter`, { assetName, assetType, roomFrom, roomTo, priceFrom, priceTo, assetValue })
        console.log(res)
        if (res.data.filterAd) {
            return res.data.filterAd;
        }
        throw new Error("Failed to filter")
    } catch (error) {
        throw new Error(error);
    }
}

export const getAdById = async (ID) => {
    try {
        const res = await Axios.post(`${process.env.REACT_APP_SERVER_API}/getAd`, { ID })
        if (res.data?.ad) {
            return res.data;
        }
        throw new Error("failed to get ad")
    } catch (err) {
        throw new Error(err);
    }
}