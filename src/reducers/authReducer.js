export const authReducer = (loggedInUser = null, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return action.payload.user;

    case "LOGOUT_USER":
      return null;

    default:
      return loggedInUser;
  }
};
