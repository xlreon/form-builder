import { initialState } from './store';

function reducer(state = initialState, action) {
    
    switch(action.type) {
        case "ADDITEM":
            console.log("in reducers")
            return {
                elements: [action.item]
            }
        default :
            return state
    }

}

export default reducer