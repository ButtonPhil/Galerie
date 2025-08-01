import API from "./API.js";






export const register = (data) => API.post('/createClient', data);
export const login = (data) => API.post('/login', data);

export const getProfile = () => API.get('/profile', {

    headers: {

        Authorization: `${localStorage.getItem('token')}`

    }

});







export default {register, login};
