import * as ActionTypes from './ActionTypes';

import { baseUrl } from '../shared/baseUrl';


export const addComment = ( comment ) =>({
    //function returning action js obj
    type: ActionTypes.ADD_COMMENT,
    payload: comment
    
});

/////////////POST comment into db(add new into db)///////////
//thunk so sendding function so (dispatch)
export const postComment = ( dishId, rating, author, comment ) => (dispatch) => {
    const newComment = {
        dishId: dishId, 
        rating: rating, 
        author: author, 
        comment: comment, 
        date:0,
    }
    newComment.date = new Date().toISOString;
    //post req, via fetch, extra opjest in argument
    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
    })
    //handling reposnce after post similar to get req
    .then( response =>{
        if(response.ok){
            return response
        }
        else{
            //if fetch is not working(delay to get response from server)
            var err = Error('Error' + response.status + ':' + response.text);
            err.response = response;
            throw err;
        }
    }, 
    //error handler(no response at all then)
    err => {
        var errmsg = new Error(err.message);
        throw errmsg;
    })
    .then( response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(err => { console.log('Post comment'+ err.message);
                alert('Your comment could not b posted \nERROR'+err.message);                
})

}

//////////////dishes/////////////////////
//thunk converts actions(obj) to appropriate function
//returning arrow function having inner funciton
export const fetchDishes = () => (dispatch) =>{
    dispatch(dishesLoading());

    //actual fetching from db server(fetching dishes from db server)
    //after getting the successful responce (will add dishes into the redux store via dispatch(action)) 
    return fetch(baseUrl + 'dishes')
    //(Promise code structure)sequence of .then is a code structure(without ;) that will exe sequentially(passing response and operations on response)
    .then( response =>{
        if(response.ok){
            return response
        }
        else{
            //if fetch is not working(delay to get response from server)
            var err = Error('Error' + response.status + ':' + response.text);
            err.response = response;
            throw err;
        }
    }, 
    //error handler(no response at all then)
    err => {
        var errmsg = new Error(err.message);
        throw errmsg;
    })

    .then( response => response.json())
    .then( dishes => dispatch(addDishes(dishes)) )
    //if u are throwing error in .then blocks, catch will catch it and execute
    .catch(err => dispatch(dishesFailed(err.message)) )

}

export const dishesLoading = () =>({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmsg) =>({
    type: ActionTypes.DISHES_FAILED,
    payload: errmsg
});

export const addDishes = (dishes) =>({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});


//////////////comments/////////////////////
//thunk converts actions(obj) to appropriate function
//returning arrow function having inner function
export const fetchComments = () => (dispatch) =>{

    //actual fetching from db server(fetching comments from db server)
    //after getting the successful responce (will add comments into the redux store via dispatch(action)) 
    return fetch(baseUrl + 'comments')
    .then( response =>{
        if(response.ok){
            return response
        }
        else{
            //if fetch is not working(delay to get response from server)
            var err = Error('Error' + response.status + ':' + response.text);
            err.response = response;
            throw err;
        }
    }, 
    //error handler(no response at all then)
    err => {
        var errmsg = new Error(err.message);
        throw errmsg;
    })
    .then( response => response.json())
    .then( comments => dispatch(addComments(comments)) )
    .catch(err => dispatch(commentsFailed(err.message)) )
}

export const commentsFailed = (errmsg) =>({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmsg
});

export const addComments = (comments) =>({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

//////////////Promos/////////////////////
//thunk converts actions(obj) to appropriate function
//returning arrow function having inner funciton
export const fetchPromos = () => (dispatch) =>{
    dispatch(promosLoading());

    //actual fetching from db server(fetching Promos from db server)
    //after getting the successful responce (will add Promos into the redux store via dispatch(action)) 
    return fetch(baseUrl + 'promotions')
    .then( response =>{
        if(response.ok){
            return response
        }
        else{
            //if fetch is not working(delay to get response from server)
            var err = Error('Error' + response.status + ':' + response.text);
            err.response = response;
            throw err;
        }
    }, 
    //error handler(no response at all then)
    err => {
        var errmsg = new Error(err.message);
        throw errmsg;
    })
    
    .then( response => response.json())
    .then( promos => dispatch(addPromos(promos)) )
    .catch(err => dispatch(promosFailed(err.message)) )
}

export const promosLoading = () =>({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmsg) =>({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmsg
});

export const addPromos = (promos) =>({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});
