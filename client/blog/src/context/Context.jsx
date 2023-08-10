// Import necessary dependencies from React
import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer"; // Import your custom Reducer function

// Define the initial state for the context
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user')) || null, // Read user data from local storage or set to null and parse is converting json string to a javascript object or value
    isFetching: false, // Initial fetching state
    error: false, // Initial error state
};

// Create a context using the createContext function and initialize it with the initial state
export const Context = createContext(INITIAL_STATE);

// Create a ContextProvider component to wrap your app with the provided context
export const ContextProvider = ({children}) => {
    // Use the useReducer hook to manage state with your Reducer function and initial state
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    // Use the useEffect hook to update local storage whenever the user state changes
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user)); //here stringfy converts a JavaScript object or value into a JSON-formatted string.
    }, [state.user]); // The effect runs whenever the user state changes

    // Return the Context.Provider component with the provided state values and dispatch function
    return (
        <Context.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch, // It's a method provided by the state management system (like React) that allows you to send an action to the reducer. 
        }}>
            {children} {/* Render the child components */}
        </Context.Provider>
    );
}
