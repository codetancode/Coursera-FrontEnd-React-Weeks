import { createStore, combineReducers, applyMiddleware } from 'redux';
import  thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Dishes } from './dishes';
import { Leaders } from './leaders';
import { Comments } from './comments';
import { Promotions } from './promotions';

{/* for configuring store/reducer.js */}
export const ConfigureStore = () =>{
//returning store
    return createStore(
        //combining reducers drom different component reducers
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        applyMiddleware(thunk, logger)

    );

}