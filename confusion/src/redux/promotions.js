import * as ActionTypes  from './ActionTypes';


export const Promotions = (state = {
    isLoading: true, 
    errmsg: null,
    promotions:[]
    }, action) =>{
    switch(action.type){
        case ActionTypes.ADD_PROMOS:
            return ( { ...state, isLoading:false, errmsg:null, promotions: action.payload } );

        case ActionTypes.PROMOS_LOADING:
            //appending the state, looking for server fetch(making server req for dishes)
            return ( { ...state, isLoading:true, errmsg:null, promotions:[] } );
        
        case ActionTypes.PROMOS_FAILED:
            //server req is failed so render failed page
            return ( { ...state, isLoading:false, errmsg: action.payload, promotions:[] } );

        default:
            return state;
        
    }
}