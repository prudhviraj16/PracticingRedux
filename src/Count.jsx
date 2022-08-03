import React,{useState} from 'react'
import { incrementCounter } from './Redux/Count/action';
import {useSelector,useDispatch} from 'react-redux'

const Count = () => {
    const [inputNumber,setinputNumber] = useState(1) 
    const count = useSelector((state)=>state.countReducer.count)
    
    const dispatch = useDispatch()
  return (
    <div>
        <h1>{count}</h1>
        <input type="number" onChange={(e)=>setinputNumber(Number(e.target.value))} value={inputNumber}/>
        <button onClick={()=>dispatch(incrementCounter(inputNumber))}>Increase</button>
    </div>
  )
}

export default Count