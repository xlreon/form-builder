import { initialState } from './store';

function reducer(state = initialState, action) {
    
    switch(action.type) {
        case "ADDITEM":
            return {
                ...state,
                elements: [...state.elements, action.item],
            }
            case "SETITEM":
            return {
                ...state,
                formData: [...state.formData, action.data]
            }
        case "UPDATELABEL":
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
                elements: [...state.elements.filter((ele,ind) => ind !== action.index)],
                formData: [...state.formData.filter((ele,ind) => ind !== action.index)]
            }
        case "DOWN":
        console.log("DOWN")
        var firstIndex = action.index
        var secondIndex = (action.index !== state.elements.length-1 ? action.index+1:action.index)
        return {
            ...state,
            elements: [...state.elements.map(function(element, index) {
                if (index === firstIndex) return state.elements[secondIndex];
                else if (index === secondIndex) return state.elements[firstIndex];
                else return element;
                })],
            formData: [...state.formData.map(function(element, index) {
                    if (index === firstIndex) return state.formData[secondIndex];
                    else if (index === secondIndex) return state.formData[firstIndex];
                    else return element;
                    })]
                }
        case "UP":
            console.log("UP")
            firstIndex = (action.index !== 0 ? action.index-1:0)
            secondIndex = action.index
            return {
                ...state,
                elements: [...state.elements.map(function(element, index) {
                    if (index === firstIndex) return state.elements[secondIndex];
                    else if (index === secondIndex) return state.elements[firstIndex];
                    else return element;
                    })],
                formData: [...state.formData.map(function(element, index) {
                        if (index === firstIndex) return state.formData[secondIndex];
                        else if (index === secondIndex) return state.formData[firstIndex];
                        else return element;
                        })]

            }
        default :
            return state
    }

}

export default reducer