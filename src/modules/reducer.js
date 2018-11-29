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
        case "SETITEM":
            console.log([...state.formData, action.data] )
            return {
                ...state,
                formData: [...state.formData, action.data] 
            }
        case "UPDATELABEL":
            console.log("In update label",action.radioIndex,action.labelIndex)
            return {
                ...state,
                formData: [...state.formData.map((element,index) => {
                                                if (index === action.radioIndex) {
                                                    var labelArray = element.value
                                                    labelArray.map((l) => {
                                                        if(l.label===action.labelIndex) {
                                                            l.value = action.labelValue
                                                            console.log(l.value)
                                                        }
                                                        return l;
                                                    }
                                                    )
                                                }
                                                return element;
                                            }
                                            )
                            ]
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