export const myReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "increment":
      console.log("increment");
      let incrementState = state + 1;
      return incrementState;
    //   return {
    //     ...state,
    //     count: action.payload
    //     // count: action.payload
    //   };
    case "decrement":
      console.log("decrement");
      const decrementState = state - 1;
      return decrementState;

    //   return {
    //     ...state
    //   };
    default:
      return state;
  }
};
