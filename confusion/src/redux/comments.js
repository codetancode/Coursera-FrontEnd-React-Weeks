import { stat } from '@nodelib/fs.stat';
import { COMMENTS } from '../shared/comments';
import * as ActionTypes  from './ActionTypes';

export const Comments = (state = COMMENTS, action) =>{
    switch(action.type){
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            //not modifing the state with extra comment obj
            //concat() fun return new state with added elements into the array
            return state.concat(comment);
        default:
            return state;
        
    }
}