import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';


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

//////////////dishes/////////////////////
//thunk converts actions(obj) to appropriate function
//returning arrow function having inner funciton
export const fetchDishes = () => (dispatch) =>{
    dispatch(dishesLoading());

    //actual fetching from db server(fetching dishes from db server)
    //after getting the successful responce (will add dishes into the redux store via dispatch(action)) 
    return fetch(baseUrl + 'dishes')
    .then( response => response.json())
    .then( dishes => dispatch(addDishes(dishes)) );

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
    .then( response => response.json())
    .then( comments => dispatch(addComments(comments)) );
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
    .then( response => response.json())
    .then( promos => dispatch(addPromos(promos)) );

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
