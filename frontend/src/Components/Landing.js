import React, {useReducer} from 'react';
import { initialState, reducer } from '../reducer';


export function LandingPage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="landing-container">
            <img src={require('../images/ChatBook.png')} alt="Logo"/>
            <div onClick={() => dispatch({type: 'login'})}>Login</div>
            <div onClick={() => dispatch({type: 'signUp'})}>signUp</div>
        </div>
    )
}