const USER_LOGIN = "USER_LOGIN";
const USER_LOGOUT = "USER_LOGOUT";

export const userLogin = (loginData) => ({
  type: USER_LOGIN,
  loginData
});

export const userLogout = () => ({
    type: USER_LOGOUT
  });

export const selectUser = (state) => state.user.user;

const initialState = {
    user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
        const { user } = action.loginData
        return { ...state, user };
    case USER_LOGOUT:
        return { ...state, user: null };
    default:
        return state;
  }
};