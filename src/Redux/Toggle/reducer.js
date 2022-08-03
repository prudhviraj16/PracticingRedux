import { toggle, TOGGLE } from "./action";

const initialState ={
    display : false
}
const toggleReducer = (state = initialState,action) =>{
    switch(action.type){
        case TOGGLE :
            return {
                ...state,
                display : !state.display
            }
    
        default :
            return state 
    }

}

export default toggleReducer