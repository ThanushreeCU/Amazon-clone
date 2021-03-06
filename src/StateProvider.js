// setup data layer
// to track the basket
import React, { createContext, useContext, useReducer } from "react";

// This is the data layer
export const StateContext = createContext();

// Build a provider wrap our entire app inside provide & give access to the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// This is where we use it in a component
export const useStateValue = () => useContext(StateContext);