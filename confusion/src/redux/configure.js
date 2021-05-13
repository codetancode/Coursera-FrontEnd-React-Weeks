import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

{/* for configuring store/reducer.js */}
export const ConfigureStore = () =>{
    const store = createStore(
        Reducer,
        initialState
    );
    return store;
};