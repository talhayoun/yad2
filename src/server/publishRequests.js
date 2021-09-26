import Axios from 'axios';

export const getCitySuggested = async (userInput) => {
    try {
        // const res = await Axios.get(`https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&q=${userInput}&fields="שם_ישוב"`)
        const res = await Axios.get(`https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&fields="שם_ישוב"&limit=10000`)
        if (!res.data.result.records > 0) {
            return []
        }
        console.log(res, "@@#@#")
        return res.data.result.records;
    } catch (err) {
        throw new Error(err);
    }
}

export const getStreetsSuggested = async (userInput) => {
    try {
        const res = await Axios.get(`https://data.gov.il/api/3/action/datastore_search?resource_id=9ad3862c-8391-4b2f-84a4-2d4c68625f4b&fields=שם_רחוב&fields=שם_ישוב&q=${userInput}&limit=10000`);
        if (!res.data.result.records > 0) {
            return []
        };
        return res.data.result.records;
    } catch (err) {
        throw new Error(err);
    }
}