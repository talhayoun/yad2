export const publishInitialState = {
    assetType: "",
    city: "",
    street: "",
    houseNumber: "",
    floorNumber: "",
    totalFloorNumber: "",
    roomsNumber: "",
    parking: "",
    balcony: "",
    proprties: "",
    textarea: "",
    paymentAmount: "",
    houseCommitte: "",
    propertyTax: "",
    size: "",
    totalSize: "",
    price: "",
    date: "",
    images: [],
    mainImage: [],
    video: [],
    username: "",
    phone: "",
    email: ""
}

const publishReducer = (data, action) => {
    switch (action.type) {
        case "STEPTWO":
            return { ...data, ...action };
        case "STEPTHREE":
            return { ...data, ...action };
        case "STEPFOUR":
            return { ...data, ...action };
        case "STEPFIVE":
            return { ...data, ...action };
        case 'STEPSIX':
            return { ...data, ...action };
        default:
            return { ...data };
    }
}

export default publishReducer;