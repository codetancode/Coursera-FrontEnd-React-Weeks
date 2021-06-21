import * as ActionTypes from './ActionTypes';


//js takes default param of func at last,,
export const Dishes = (state = {
    isLoading: true, 
    errmsg: null,
    dishes:[]
    }, action) =>{
    switch(action.type){
        case ActionTypes.ADD_DISHES:
            return ( { ...state, isLoading:false, errmsg:null, dishes: action.payload } )

        case ActionTypes.DISHES_LOADING:
            //appending the state, looking for server fetch(making server req for dishes)
            return ( { ...state, isLoading:true, errmsg:null, dishes:[] } )
        
        case ActionTypes.DISHES_FAILED:
            //server req is failed so render failed page
            return ( { ...state, isLoading:false, errmsg:null, dishes:[] } )

        
        default:
            return state;
        
    }
}