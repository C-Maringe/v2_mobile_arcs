import { createStore } from 'redux';
import rootReducer from './combinedReduers';

const initialState = {
    sidebarVisible: false,
};

const store = createStore(rootReducer, initialState);

export default store;