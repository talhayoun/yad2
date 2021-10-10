export const adsInitialState = {
    ads: []
};

const adsReducer = (data, action) => {
    switch (action.type) {
        case "ADD_AD":
            return { ...data, ads: data.ads.concat(action.ad) };
        case "FILTER_AD":
            console.log(action.ads)
            return { ads: action.ads }
        default:
            return { ...data };
    }
}

export default adsReducer;