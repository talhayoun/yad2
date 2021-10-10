export const StepTwoAction = (assetType, city, street, houseNumber, floorNumber, totalFloorNumber) => ({
    type: "STEPTWO",
    assetType,
    city,
    street,
    houseNumber,
    floorNumber,
    totalFloorNumber
});

export const StepThreeAction = (roomsNumber, parking, balcony, properties, textarea) => ({
    type: "STEPTHREE",
    roomsNumber,
    parking,
    balcony,
    properties,
    textarea
});

export const StepFourAction = (paymentAmount, houseCommitte, propertyTax, size, totalSize, price, date) => ({
    type: "STEPFOUR",
    paymentAmount,
    houseCommitte,
    propertyTax,
    size,
    totalSize,
    price,
    date
})

export const StepFiveAction = (images, mainImage, video) => ({
    type: "STEPFIVE",
    images,
    mainImage,
    video
})

export const StepSixAction = (username, phone, email) => ({
    type: 'STEPSIX',
    username,
    phone,
    email
})