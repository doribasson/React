export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const initalState = {
  count: 0,
  random: 0,
  arrRandom: []
};

export const myReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case INCREMENT:
      console.log("increment");
      // const newRandom = state.random.Math.random() * (10 - 1 + 1) + 1;
      return {
        ...state,
        count: state.count + 1,
        random: Math.floor(Math.random() * (10 - 1 + 1) + 1),
        arrRandom: [...state.arrRandom, state.count + 1]
        // arrRandom: [...state.arrRandom, state.random]
      };

    case DECREMENT:
      console.log("decrement");
      //copy deep state and not shallow with spread operator
      const copyArrRandom = [...state.arrRandom];
      //the same copy deep state and not shallow with slice
      // const copyArrRandom = state.arrRandom.slice(0);
      copyArrRandom.pop(); //delete from last array
      // copyArrRandom.splice(-1); //delete from last array
      return {
        ...state,
        count: state.count - 1,
        random: Math.floor(Math.random() * (10 - 1 + 1) + 1),
        arrRandom: copyArrRandom
        // arrRandom: state.arrRandom.splice(index, 1)
      };

    default:
      return state;
  }
};
