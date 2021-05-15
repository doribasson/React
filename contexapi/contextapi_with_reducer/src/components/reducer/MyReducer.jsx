export const initalState = {
  count: 0,
  random: 0
};

export const myReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "INCREMENT":
      console.log("increment");
      // const newRandom = state.random.Math.random() * (10 - 1 + 1) + 1;
      return {
        ...state,
        count: state.count + 1,
        random: Math.floor(Math.random() * (10 - 1 + 1) + 1)
      };

    case "decrement":
      console.log("decrement");
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};
