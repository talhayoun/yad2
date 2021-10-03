import Cookie from 'js-cookie';

export const setCookie = (email, token, firstName, lastName) => {
    Cookie.set('token', token);
    Cookie.set('email', email);
    Cookie.set('firstname', firstName)
    Cookie.set('lastname', lastName)
}

export const getCookie = () => {
    const token = Cookie.get('token');
    const email = Cookie.get('email');
    const firstName = Cookie.get('firstname');
    const lastName = Cookie.get('lastname');
    return { token, email, firstName, lastName };
}


export const deleteCookie = () => {
    Cookie.remove('token');
    Cookie.remove('email');
    Cookie.remove('firstname');
    Cookie.remove('lastname');

}