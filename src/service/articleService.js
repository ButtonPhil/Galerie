import API from "./API.js";





export const getType = () => API.get('/typeCategorie', {

    headers: {

        Authorization: `${localStorage.getItem('token')}`

    }

});




export default getType ;