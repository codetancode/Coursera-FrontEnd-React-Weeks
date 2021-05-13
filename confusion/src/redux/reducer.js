import { DISHES } from '../shared/dishes.js';//.js having data as object json so {}
import { Switch, Route, Redirect} from 'react-router-dom';//functional components under react-router-dom so {} 
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

{/*----store----*/}

{/* expot a initial state that main components was receiving */}
export const initialState = {
    dishes:DISHES,
    comments:COMMENTS,
    promotions:PROMOTIONS,
    leaders:LEADERS  
};
{/* making reducer functions/pure function takes state, action return new state */}

export const Reducer = (state = initialState , action) => {
    return state;
};