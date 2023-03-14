import { 
    GET_DOGS, GET_DOG_DETAILS, GET_DOG_NAME, GET_TEMPERAMENTS,
    FILTER_API_DB, FILTER_TEMPERAMENTS, ORDER_ALPHABETICALLY,
    ORDER_WEIGHT, REFRESH_DOGS, EMPTY_ARRAY, ERROR } from "./actions"

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
        case GET_DOGS : return {
            ...state,
            dogs : action.payload,
            aux_dogs: action.payload
        }

        case GET_DOG_DETAILS: return {
            ...state,
            dogDetails: action.payload
        }

        case GET_DOG_NAME: 

        if(action.payload.length){
            aux = action.payload
        } else {
            alert(`The Name of the Dog does not exist`)
            aux = state.aux_dogs
        }
        return {
            ...state,
            dogs: aux
        }

        case GET_TEMPERAMENTS: return {
            ...state,
            temperaments: action.payload
        }

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

        case FILTER_TEMPERAMENTS:

        aux = state.dogs.filter((dog) =>
            dog.temperaments && dog.temperaments.includes(action.payload)
        );

        if(!aux.length) {
            
            alert(`Not found Dog with the Temperament ${action.payload}`);
            aux = state.aux_dogs
        }
        return {
            ...state,
            dogs : aux
        }

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

        case ORDER_WEIGHT :
        
        if(action.payload == "Min") {
            aux = [...state.dogs].sort((a, b) => {
                return b.weight.split(" ")[0] -a.weight.split(" ")[0]
            })
        }

        if(action.payload == "Max") {
            aux = [...state.dogs].sort((a, b) => {
                return b.weight.split(" ")[0] - a.weight.split(" ")[0]
            })
        }        
        return {
            ...state, dogs: aux
        }
    
        case REFRESH_DOGS:
        
        aux = state.aux_dogs
        return {
            ...state,
            dogs: aux
        }
        
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
                dogDetails: aux
            }
        }

        case ERROR: return {
            ...state,
            errors: action.payload
        }

        
        default: return {
            ...state
        }
    }
}

export default rootReducer
