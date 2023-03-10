import { GET_DOGS, GET_DOG_DETAILS, GET_DOG_NAME, ERROR } from "./actions"

const initialState = {
    dogs : [],
    // aux_dogs: [],
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
            // aux_dogs: action.payload
        }

        case GET_DOG_DETAILS: return {
            ...state,
            dogDetails: action.payload
        }

        case GET_DOG_NAME: 

        if(action.payload.length){
            aux = action.payload
        } else {
            alert("The Name of the Pokemon does not exist")
            aux = state.dogs
            // aux = state.aux_dogs
        }

        return {
            ...state,
            dogs: aux
        }

        // case ERROR: return {
        //     ...state,
        //     errors: action.payload
        // }
    
        default: return {
            ...state
        }
    }
}

export default rootReducer
