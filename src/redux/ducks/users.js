const ADD_USER = "add-user";
const DELETE_USER = "delete-user";
const EDIT_USER = "edit-user";

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});
export const deleteUser = (user) => ({
  type: DELETE_USER,
  payload: user,
});
export const editUser = (newUser, user) => ({
  type: EDIT_USER,
  newUser,
  oldUser: user,
});
const initialState = {
  users: [],
  lastID: 0,
};
const reducerSwitch = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      action.payload.id = state.lastID;
      state.lastID++;
      return { ...state, users: [...state.users, action.payload] };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.id),
      };
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.oldUser.id) {
            action.newUser.id = user.id;
            return action.newUser;
          }
          return user;
        }),
      };
    default:
      return state;
  }
};
export default reducerSwitch;
