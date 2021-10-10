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

export const addAd = async (data, userData) => {
    try {
        let newFormData = new FormData();
        for (let i = 0; i < data.images.length; i++) {
            newFormData.append("images", data.images[i][0]);
        }
        if (data.mainImage !== "")
            newFormData.append('images', renameFile(data.mainImage[0], `mainImage - ${data.mainImage[0].name}`));
        if (data.video !== "")
            newFormData.append('images', renameFile(data.video[0], `mainVideo - ${data.video[0].name}`));
        newFormData.append('assetType', data.assetType);
        newFormData.append('balcony', data.balcony);
        newFormData.append('city', data.city);
        newFormData.append('date', data.date);
        newFormData.append('email', data.email);
        newFormData.append('floorNumber', data.floorNumber);
        newFormData.append('houseCommitte', data.houseCommitte);
        newFormData.append('parking', data.parking);
        newFormData.append('paymentAmount', data.paymentAmount);
        newFormData.append('phone', data.phone);
        newFormData.append('price', data.price);
        newFormData.append('propertyTax', data.propertyTax);
        newFormData.append('properties', [...data.properties]);
        newFormData.append('roomsNumber', data.roomsNumber);
        newFormData.append('size', data.size);
        newFormData.append('street', data.street);
        newFormData.append('textarea', data.textarea);
        newFormData.append('totalFloorNumber', data.totalFloorNumber);
        newFormData.append('totalSize', data.totalSize);
        newFormData.append('username', data.username);
        newFormData.append('userEmail', userData.email)
        console.log(Array.from(newFormData))
        const res = await Axios.post(`${process.env.REACT_APP_SERVER_API}/new-ad`, newFormData, { headers: { "Content-Type": `multipart/form-data; boundary=----WebKitFormBoundaryePkpFF7tjBAqx29L`, token: userData.token } });
        console.log(res)
        if (res.data?.ad) {
            return res.data;
        }
    } catch (err) {
        throw new Error(err);
    }
}

function renameFile(originalFile, newName) {
    return new File([originalFile], newName, {
        type: originalFile.type,
        lastModified: originalFile.lastModified,
    });
}