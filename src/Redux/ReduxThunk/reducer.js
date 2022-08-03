import {FETCH_NEWS_REQUESTED,FETCH_NEWS_SUCCESS,FETCH_NEWS_FAILED} from './action'

const initialState ={
    news : [],
    error : "Please try again later"
}

const newsReducer = (state=initialState,action) =>{
    switch(action.type){
        case FETCH_NEWS_REQUESTED:
            return{
                ...state,

            }
        case FETCH_NEWS_SUCCESS: 
            return {
                ...state,
                news : action.payload
            }
        case FETCH_NEWS_FAILED:
            return {
                ...state,
                error : "Please try again later"
            }

        default : 
            return state 
    }
}

export default newsReducer