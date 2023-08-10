// Action creator function to represent a login process start
export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START", // Specify the action type as "LOGIN_START"
  });
  
  // Action creator function to represent a successful login
  export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS", // Specify the action type as "LOGIN_SUCCESS"
    payload: user,        // Include the payload data (user information)
  });
  
  // Action creator function to represent a login failure
  export const LoginFailure = () => ({
    type: "LOGIN_FAILURE", // Specify the action type as "LOGIN_FAILURE"
  });

  export const LogOut = () => ({
    type: "LOG_OUT", // Specify the action type as "LOGOUT
  })

  // Action creator function to represent a update process start
export const UpdateStart = (userCredentials) => ({
  type: "UPDATE_START", // Specify the action type as "UPDATE_START"
});

// Action creator function to represent a successful update
export const UpdateSuccess = (user) => ({
  type: "UPDATE_SUCCESS", // Specify the action type as "UPDATE_SUCCESS"
  payload: user,        // Include the payload data (user information)
});

// Action creator function to represent a update failure
export const UpdateFailure = () => ({
  type: "UPDATE_FAILURE", // Specify the action type as "UPDATE_FAILURE"
});

export const deleteUser = (userIdToDelete) => ({
  type: "DELETE_USER",
  payload: userIdToDelete, // Include the user ID as payload
});

  