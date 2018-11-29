import { createStore } from 'redux'
import reducer from './reducer';

const initialState = {
    elements: [],
    formData: []
}

const store = createStore(reducer)

export { store, initialState }