import { createStore } from 'redux'
import reducer from './reducer';

const initialState = {
    elements: []
}

const store = createStore(reducer)

export { store, initialState }