import { COUNT_ADD, COUNT_SUB , COUNT_MULTIPLY, COUNT_DIVIDE } from "./action.type";

export const Increment =(a)=>({type: COUNT_ADD , value:a})
export const Decrement =(a)=>({type: COUNT_SUB , value:a})
export const Multi =(a)=>({type: COUNT_MULTIPLY , value:a})
export const Divide =(a)=>({type: COUNT_DIVIDE , value:a})