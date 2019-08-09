import React from 'react';
import { initialState, reducer } from './reducer';

export const StoreContext = React.createContext({});

export function ContextProvider(props) {
    const [state, dispatch ] = React.useReducer(reducer, initialState);
    const context = { state, dispatch };

    return (
        <StoreContext.Provider value={context}>
            {props.children}
        </StoreContext.Provider>
    )
}