export const LoginAction = (email, token, firstName, lastName) => ({
    type: "LOGIN",
    email,
    token,
    firstName,
    lastName
})

export const LogoutAction = () => ({
    type: 'LOGOUT'
});