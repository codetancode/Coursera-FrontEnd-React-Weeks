import { createStore, combineReducers } from 'redux';

import { Dishes } from './dishes';
import { Leaders } from './leaders';
import { Comments } from './comments';
import { Promotions } from './promotions';

{/* for configuring store/reducer.js */}
export const ConfigureStore = () =>{
//returning store
    return createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );
};