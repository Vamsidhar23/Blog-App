// Define the Reducer function that handles state updates based on dispatched actions
const Reducer = (state, action) => {
    // Use a switch statement to handle different action types
    switch (action.type) {
      // If the action type is "LOGIN_START"
      case "LOGIN_START":
        // Update the state for the login process start
        return {
          user: null,         // Set user to null (no user info available)
          isFetching: true,   // Set isFetching to true (login process is ongoing)
          error: false,       // Set error to false (no error occurred)
        };
      
      // If the action type is "LOGIN_SUCCESS"
      case "LOGIN_SUCCESS":
        // Update the state for a successful login
        return {
          user: action.payload, // Set user with the payload data
          isFetching: false,    // Set isFetching to false (login process completed)
          error: false,         // Set error to false (no error occurred)
        };
      
      // If the action type is "LOGIN_FAILURE"
      case "LOGIN_FAILURE":
        // Update the state for a failed login attempt
        return {
          user: null,           // Set user to null (no user info available)
          isFetching: false,    // Set isFetching to false (login process completed)
          error: true,          // Set error to true (error occurred)
        };
        case "UPDATE_START":
          // Update the state for the update process start
          return {
            user: null,         // Set user to null (no user info available)
            isFetching: true,   // Set isFetching to true (login process is ongoing)
            error: false,       // Set error to false (no error occurred)
          };
        
        // If the action type is "LOGIN_SUCCESS"
        case "UPDATE_SUCCESS":
          // Update the state for a successful update
          return {
            ...state,
            user: action.payload, // Set user with the payload data
            success:true,
            isFetching: false,    // Set isFetching to false (login process completed)
            error: false,         // Set error to false (no error occurred)
          };
        
        // If the action type is "LOGIN_FAILURE"
        case "UPDATE_FAILURE":
          // Update the state for a failed update attempt
          return {
            user: state.user,           // Set user to state (no user info available)
            isFetching: false,    // Set isFetching to false (login process completed)
            error: true,          // Set error to true (error occurred)
          };
          case "DELETE_USER":
            // If the action payload contains the ID of the user to be deleted
            if (action.payload && state.user && state.user._id === action.payload) {
                return {
                    ...state,
                    user: null,
                    isFetching: false,
                    error: false,
                };
            }
        case "LOG_OUT":
        return {
            user: null,
            isFetching: false, // Set isFetching to false (login process
            error:false,
         };
      
      // Default case for any action types not matched above
      default:
        // Return the current state as is
        return state;
    }
  };
  
  // Export the Reducer function for use in other components
  export default Reducer;
  