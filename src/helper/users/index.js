export const getUsers = (numero) => `/users/?page=${numero}`;
export const getOneUser = (userID) => `/users/${userID}/`;
export const postLogin = () => `/sessions/`;
export const postCreateUser = () => `/users/`;
export const patchUpdateUser = (userID) => `/users/${userID}/`;
