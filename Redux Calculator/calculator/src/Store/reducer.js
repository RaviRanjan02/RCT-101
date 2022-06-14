import { COUNT_ADD, COUNT_DIVIDE, COUNT_MULTIPLY, COUNT_SUB } from "./action.type";




export const calreducer = (state , action)=>{
    switch(action.type){
        case COUNT_ADD:{
            return{...state ,count:state.count+ + Number(action.value)}
        }
        case COUNT_SUB:{
            return{...state,count:state.count- + Number(action.value)}
        }
        case COUNT_MULTIPLY:{
            return{...state ,count:state.count* + Number(action.value)}
        }
        case COUNT_DIVIDE:{
            return{...state, count:state.count/ + Number(action.value)}
        }
        default:{
            return state
        }
    }
}