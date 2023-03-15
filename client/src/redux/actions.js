const { default: axios }= require("axios")

export const GET_DOGS= "GET_DOGS",
GET_DOG_DETAILS= "GET_DOG_DETAILS",
GET_DOG_NAME= "GET_DOG_NAME",
GET_TEMPERAMENTS= "GET_TEMPERAMENTS",
FILTER_API_DB="FILTER_API_DB",
FILTER_TEMPERAMENTS="FILTER_TEMPERAMENTS",
ORDER_ALPHABETICALLY="ORDER_ALPHABETICALLY",
ORDER_WEIGHT="ORDER_WEIGHT",
REFRESH_DOGS="REFRESH_DOGS",
EMPTY_ARRAY="EMPTY_ARRAY",
ERROR= "ERROR",
ERROR_GET_DOGS="ERROR_GET_DOGS",
ERROR_GET_DOG_NAME="ERROR_GET_DOG_NAME",
ERROR_GET_DETAILS="ERROR_GET_DETAILS"

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

            return dispatch({
                type: ERROR_GET_DOGS,
                payload: error.message
            })
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
        
            return dispatch({
                type: ERROR_GET_DETAILS,
                payload: error.message
            })
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
            // return dispatch({
            //     type: GET_DOG_NAME,
            //     payload: []
            // })

            return dispatch({
                type: ERROR_GET_DOG_NAME,
                payload: error.message
            })
        }
    }
}

export let postDog = (newDog) => {
    return async dispatch => {

        
        try {
            let dogCreated = await axios.post("http://localhost:3001/dogs", newDog)
            
            return dogCreated
            
        } catch (error) {
            console.log(error);
            
            return dispatch({
                    type: ERROR,
                    payload: error.message
                })
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
                 
            return dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}

export let filter_Api_Db = (payload) => {
    return dispatch => {
        return dispatch({
            type: FILTER_API_DB,
            payload
        })
    }
}

export let filter_Temperaments = (payload) => {
    return dispatch => {
        return dispatch({
            type: FILTER_TEMPERAMENTS,
            payload
        })
    }
}

export let order_Alphabetically = (payload) => {
    return dispatch => {
        return dispatch({
            type: ORDER_ALPHABETICALLY,
            payload
        })
    }
}

export let order_Weight = (payload) => {
    return dispatch => {
        return dispatch({
            type: ORDER_WEIGHT,
            payload
        })
    }
}

export let refresh_Dogs = () => {
    return dispatch => {
        return dispatch({
            type: REFRESH_DOGS
        })
    }
}

export let empty_Array = (payload) => {
    return dispatch => {
        return dispatch({
            type: EMPTY_ARRAY,
            payload
        })
    }
}
