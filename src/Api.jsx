import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { fetchNews } from './Redux/ReduxThunk/action';

const Api = () => {
    const articles = useSelector((state)=>state.news)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchNews())
    },[])

    return (
        <>
            {articles.map((item,index)=>{
                return <div key={index}>{item.title}</div>

            }
            )}
        </>    
    )
}

export default Api

