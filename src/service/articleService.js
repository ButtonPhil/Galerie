import API from "./API.js";





export const getType = () => API.get('/searchCategorie', {

    headers: {

        Authorization: `${localStorage.getItem('token')}`

    }

});