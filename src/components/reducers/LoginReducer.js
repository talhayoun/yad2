export const initialUserData = {
    email: null,
    token: "",
    firstName: null,
    lastName: null
};

const LoginReducer = (userData, action) => {
    switch (action.type) {
        case "LOGIN":
            return { email: action.email, token: action.token, firstName: action.firstName, lastName: action.lastName };
        case "LOGOUT":
            return { email: null, token: "", firstName: null }
        default:
            return { ...userData };
    }
}

export default LoginReducer;