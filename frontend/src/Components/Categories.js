import React, {useReducer} from 'react';
import { reducer, initialState } from '../reducer';


export function Categories() {
    const [state, dispatch ] = useReducer(reducer, initialState);
    return (
        <div className='categories-container'>
            
        </div>    
    )
}