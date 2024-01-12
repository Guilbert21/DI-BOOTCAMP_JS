const initialState = {
  robots: [
    {
      id: 1,
      name: "Robot 1",
      username: "robo1",
      email: "robo1@example.com",
    },
    {
      id: 2,
      name: "Robot 2",
      username: "robo2",
      email: "robo2@example.com",
    },
    {
      id: 3,
      name: "Robot 3",
      username: "robo3",
      email: "robo3@example.com",
    },
  ], 
  searchField: "",
};

export const robotReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_FIELD":
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};
