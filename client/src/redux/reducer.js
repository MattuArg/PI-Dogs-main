import { 
    GET_DOGS, GET_DOG_DETAILS, GET_DOG_NAME, GET_TEMPERAMENTS,
    FILTER_API_DB, FILTER_TEMPERAMENTS, ORDER_ALPHABETICALLY,
    ORDER_WEIGHT, REFRESH_DOGS, EMPTY_ARRAY, ERROR, ERROR_GET_DOGS,
    ERROR_GET_DOG_NAME, ERROR_GET_DETAILS } from "./actions"

const initialState = {
    dogs : [],
    aux_dogs: [],
    dogDetails: [],
    temperaments: [],
    errors: ""
}

let rootReducer = (state = initialState, action) => {

    let aux = []

    switch (action.type) {

/*GET_DOGS --------------------------------------------------------------------------------*/

        case GET_DOGS : return {
            ...state,
            dogs : action.payload,
            aux_dogs: action.payload,
            errors: ""
        }

/*GET_DOG_DETAILS -------------------------------------------------------------------------*/

        case GET_DOG_DETAILS: return {
            ...state,
            dogDetails: action.payload,
        }

/*GET_DOG_NAME ----------------------------------------------------------------------------*/

        case GET_DOG_NAME: 

        if(action.payload.length){
            aux = action.payload
        }

        return {
            ...state,
            dogs: aux
        }

/*GET_TEMPERAMENTS ------------------------------------------------------------------------*/

        case GET_TEMPERAMENTS: return {
            ...state,
            temperaments: action.payload
        }

/*FILTER_API_DB ---------------------------------------------------------------------------*/

        case FILTER_API_DB:
        if(action.payload == "Api") {
            aux = state.aux_dogs.filter(dog => dog.origin == "API")
        }

        if(action.payload == "Db") {
            aux = state.aux_dogs.filter(dog => dog.origin == "DB")   
            if(!aux.length) {
                alert("you don't have any Dog created")
                aux = state.dogs
            }
        }
        return {
            ...state,
            dogs: aux
        }

/*FILTER_TEMPERAMENTS ---------------------------------------------------------------------*/

        case FILTER_TEMPERAMENTS:

        aux = state.aux_dogs.filter((dog) =>
            dog.temperaments && dog.temperaments.includes(action.payload)
        );

        if(!aux.length) {
            alert(`Not found Dog with the Temperament ${action.payload}`);
            aux = state.aux_dogs
        }
        return {
            ...state,
            dogs : aux,
        }

/*ORDER_ALPHABETICALLY --------------------------------------------------------------------*/

        case ORDER_ALPHABETICALLY:

        if (action.payload == "Asc")
            aux = [...state.dogs].sort((a, b) => {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            })

        if (action.payload == "Desc") {
            aux = [...state.dogs].sort((a, b) => {
                return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
            })
        }
        return {
            ...state,
            dogs: aux
        }

/*ORDER_WEIGHT-----------------------------------------------------------------------------*/

        case ORDER_WEIGHT :
        
        if(action.payload == "Min") {
            aux = [...state.dogs].sort((a, b) => {
                return b.weight.split(" ")[0] - a.weight.split(" ")[0]
            })
        }

        if(action.payload == "Max") {
            aux = [...state.dogs].sort((a, b) => {
                return a.weight.split(" ")[0] - b.weight.split(" ")[0]
            })
        }        
        return {
            ...state, dogs: aux
        }

/*REFRESH_DOGS-----------------------------------------------------------------------------*/
    
        case REFRESH_DOGS:
        
        aux = state.aux_dogs
        return {
            ...state,
            dogs: aux,
            errors: ""
        }
        
/*EMPTY_ARRAY -----------------------------------------------------------------------------*/
      
        case EMPTY_ARRAY:
            
        if(action.payload == "For_DogName") {
            return {
                ...state,
                dogs: aux
            }
        }

        if (action.payload == "For_DogDetails") {
            return {
                ...state,
                dogDetails: aux,
                dogs: aux
            }
        }

/*ERROR -----------------------------------------------------------------------------------*/

        case ERROR_GET_DOGS: return {
            ...state,
            errors: { getDogs: action.payload }
        }

        case ERROR_GET_DOG_NAME: return {
            ...state,
            errors: { getDogName: action.payload }
        }

        case ERROR_GET_DETAILS: return {
            ...state,
            errors: { getDetails: action.payload }
        }

/*-----------------------------------------------------------------------------------------*/
        
        default: return {
            ...state
        }
    }
}

export default rootReducer
