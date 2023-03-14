const { default: axios }= require("axios")

export const GET_DOGS= "GET_DOGS",
GET_DOG_DETAILS= "GET_DOG_DETAILS",
GET_DOG_NAME= "GET_DOG_NAME",
ERROR= "ERROR",
GET_TEMPERAMENTS= "GET_TEMPERAMENTS"

export let getDogs = () => {
    return async dispatch => {

        try {
            let json = await axios.get('http://localhost:3001/dogs')
            
            return dispatch ({
                type: GET_DOGS,
                payload: json.data
            })
        } catch (error) {
            console.log(error);

            // return dispatch({
            //     type: ERROR,
            //     payload: error
            // })
        }
    }
}

export let getDogDetails = (id) => {
    return async dispatch => {

        try {
            let json = await axios.get(`http://localhost:3001/dogs/${id}`)

            return dispatch({
                type: GET_DOG_DETAILS,
                payload: json.data
            })

        } catch (error) {
            console.log(error);
        
            // return dispatch({
            //     type: ERROR,
            //     payload: error
            // })
        }
    }
}

export let getDogName = (name) => {
    return async dispatch => {
        
        try {
            let json = await axios.get(`http://localhost:3001/dogs?name=${name}`)
            
            return dispatch({
                type: GET_DOG_NAME,
                payload: json.data
            })

        } catch (error) {
            console.log(error);
            return dispatch({
                type: GET_DOG_NAME,
                payload: []
            })

            // return dispatch({
            //     type: ERROR,
            //     payload: error
            // })
        }
    }
}

export let postDog = (newDog) => {
    return async () => {

        
        try {
            let dogCreated = await axios.post("http://localhost:3001/dogs", newDog)
            
            return dogCreated
            
        } catch (error) {
            console.log(error);
            
            // return dispatch({
                //     type: ERROR,
                //     payload: error
                // })
        }
    }
}

export let getTemperaments = () => {
    return async dispatch => {

        try {
            let json = await axios.get("http://localhost:3001/temperaments")
            
            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: json.data
            })

        } catch (error) {
            console.log(error);
                 
            // return dispatch({
            //     type: ERROR,
            //     payload: error
            // })
        }
    }
}
