import { initialState } from './store';

function reducer(state = initialState, action) {
    
    switch(action.type) {
        case "ADDITEM":
            return {
                ...state,
                elements: [...state.elements, action.item]
            }
        default :
            return state
    }

}

export default reducer