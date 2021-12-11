import React, { createContext, useReducer , useContext } from 'react';

// prepares the data layer
export const StateContext = createContext();

// wrap the datalayer
export const StateProvider = ({ initialState, reducer, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer , initialState)}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateValue = () => useContext(StateContext)