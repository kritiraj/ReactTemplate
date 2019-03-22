import * as actionTypes from '../actions/actionType';
import {updateObject} from '../../shared/utility'

const inititalState={
    counter:0,
    results:[]
};

const add=(state,action)=>{
    let updatedState={counter:state.counter+action.payload.amount};
    return updateObject(state,updatedState);
}

const sub=(state,action)=>{
    let updatedState={counter:state.counter-action.payload.amount};
    return updateObject(state,updatedState);
}

const increment=(state,action)=>{
    let updatedState={counter:state.counter+1};
    return updateObject(state,updatedState);
}

const decrement=(state,action)=>{
    let updatedState={counter:state.counter-1};
    return updateObject(state,updatedState);
}

const recordData=(state,action)=>{
    let updatedState={results:state.results.concat(state.counter)}
    return updateObject(state,updatedState);
}

const reducer=(state=inititalState,action)=>{
    switch(action.type){
        case actionTypes.add:return add(state,action);
        case actionTypes.sub:return sub(state,action);
        case actionTypes.increment: return increment(state,action);
        case actionTypes.decrement: return decrement(state,action);
        case actionTypes.recordData: return recordData(state,action);
        default: return state;
    }
}
export default reducer;