import API from "./API.js";





export const register = (data) => API.post('/createClient', data)