import React,{Component} from 'react';
import * as actionTypes from '../../store/actions/actionType';
import {connect } from 'react-redux'
// import {reducer } from '../../store/reducers/counter';
class Counter extends Component{
    render(){
        return (
            <div>
                <h2>Calculator  {this.props.count}</h2>
               
                <button onClick={this.props.add}>ADD</button>
                </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        count:state.counter,
        result:state.results
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        add:()=> dispatch({type:actionTypes.add,payload:{amount:5}})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);