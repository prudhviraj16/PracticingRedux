import axios from 'axios'

export const FETCH_NEWS_REQUESTED = 'FETCH_NEWS_REQUESTED'
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'
export const FETCH_NEWS_FAILED = 'FETCH_NEWS_FAILED'

export const fetchnewsRequested = () => ({
    type : FETCH_NEWS_REQUESTED
})

export const fetchnewsSuccess = (news) => ({
    type : FETCH_NEWS_SUCCESS,
    payload : news
})

export const fetchnewsFailed = (errorMessage) => ({
    type : FETCH_NEWS_FAILED, 
    payload : errorMessage 
})



export const fetchNews = () => {
    return async (dispatch) => {
        try{
            dispatch(fetchnewsRequested())
            let res = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-07-03&sortBy=publishedAt&apiKey=133a7291547c47d7babc98d2f82b54a2')
            dispatch(fetchnewsSuccess(res.data.articles))
        }
        catch(err){
            dispatch(fetchnewsFailed(err.message))
        }
    }
}
/*

    Redux-Thunk - For Dispatching asynchronous Redux state

    - Return an async function with two paramaeters

        1. Dispatch - for dispatching other actions
        2. getState - to access the current state
        
    
*/