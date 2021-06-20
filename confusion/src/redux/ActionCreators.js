import * as ActionTypes from './ActionTypes';

export const addComment = ( dishId, rating, author, comment ) =>({
    //function returning action js obj
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});