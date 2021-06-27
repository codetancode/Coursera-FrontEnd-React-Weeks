import * as ActionTypes  from './ActionTypes';

export const Comments = (state = {
    errMsg: null,
    comments:[]
}, action) =>{
    switch(action.type){
        case ActionTypes.ADD_COMMENTS:
            return ( { ...state, isLoading:false, errmsg:null, comments: action.payload } )

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            //comment id will be automatically added by the server
            //#comment.id = state.comments.length;
            //not modifing the state with extra comment obj
            //concat() fun return new state with added elements into the array
            return {...state, comments: state.comments.concat(comment) };

        case ActionTypes.COMMENTS_FAILED:
            //server req is failed so render failed page
            return ( { ...state, isLoading:false, errmsg: action.payload, comments:[] } )
        
        default:
            return state;
        
    }
}