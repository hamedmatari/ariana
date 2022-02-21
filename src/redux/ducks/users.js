const ADD_USER = "add-user";

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

const initialState = {
  users: [
    {
      name: "jjjjj",
      skills: ["aaa", "bbb"],
      bithDate: "dddd",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};
