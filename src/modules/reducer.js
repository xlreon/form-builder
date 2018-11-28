import { initialState } from './store';

function deleteAtIndex(elements,index) {
    return elements.splice(index,1)
}

function reducer(state = initialState, action) {
    
    switch(action.type) {
        case "ADDITEM":
            return {
                ...state,
                elements: [...state.elements, action.item]
            }
        case "DELETE":
            return {
                ...state,
                elements: [...state.elements.splice(action.index,1)]
            }
        case "DOWN":
            return state
        case "UP":
            return state
        default :
            return state
    }

}

export default reducer