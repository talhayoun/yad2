import Axios from 'axios';

export const signUpUser = async (email, password, phone, firstName, lastName) => {
    try {
        console.log(email, password)
        const res = await Axios.post(`${process.env.REACT_APP_SERVER_API}/sign-up`, { email, password, phone, firstName, lastName });
        console.log(res)
        if (!res.data?.message) {
            throw new Error(res.data.err);
        }
        return res.data;
    } catch (err) {
        throw new Error(err.message);
    }
}


export const signInUser = async (email, password) => {
    try {
        const res = await Axios.post(`${process.env.REACT_APP_SERVER_API}/sign-in`, { email, password });
        if (!res.data) {
            throw new Error(res.data.err);
        }
        return res.data;
    } catch (err) {
        throw new Error(err.message);
    }
}


export const checkUserExists = async (email) => {
    try {
        const res = await Axios.post(`${process.env.REACT_APP_SERVER_API}/user-exists`, { email })
        if (!res.data?.message) {
            throw new Error(res.data.err);
        }
        return res.data;
    } catch (err) {
        throw new Error(err.message);
    }
}

export const verifyCookie = async (email, token) => {
    try {
        const res = await Axios.post(`${process.env.REACT_APP_SERVER_API}/verify-token`, { email, token }, { headers: { token: token } });
        if (!res.data.message) {
            throw new Error(res.data.err);
        }
        return res.data;
    } catch (err) {
        throw new Error(err.message);
    }
}