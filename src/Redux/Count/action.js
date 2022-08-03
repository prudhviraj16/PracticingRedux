export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'


export const incrementCounter = (count) =>({
    type : INCREMENT_COUNTER,
    payload : count
})
 
export const decrementCounter = (count) =>({
    type : DECREMENT_COUNTER,
    payload : count
})