import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
// import 
import {toggle} from './Redux/Toggle/action';
const Hide = () => {

    const dispatch = useDispatch()
    const hide = useSelector((state)=>state.toggleReducer.display)
    // console.log(hide)
  return (
    <>
        {hide&&<h1>Hello World</h1>}
        <button onClick={()=>{dispatch(toggle())}}>Click me</button>
    </>
  )
}

export default Hide