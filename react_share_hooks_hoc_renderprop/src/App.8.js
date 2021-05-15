import { useContext } from "react";
import Counter from "./components/counter/";
import withCounter from "./components/HOC/";
import { useCounter } from "./components/Hooks/useCounter";
import CounterContext from "./components/Context/counterContext";
import RenderCounter from "./components/RenderProps";
// import "./styles.css";

export default function App() {
  const EnhancedCounter = withCounter(Counter);
  const [count, increment, decrement] = useCounter();
  const { countVal, incrementVal, decrementVal } = useContext(CounterContext);
  return (
    <div className="App">
      HOC+HOOKS+CONTEXT
      <hr />
      <EnhancedCounter title="HOC Example" />
      <hr />
      <Counter
        title="useHOOks Example"
        count={count}
        increment={increment}
        decrement={decrement}
      />
      <hr />
      <Counter
        title="useContext Example"
        count={countVal}
        increment={incrementVal}
        decrement={decrementVal}
      />
      <hr />
      <RenderCounter>
        {({ count, increment, decrement }) => (
          <Counter
            title="Render props children Examples "
            count={count}
            increment={increment}
            decrement={decrement}
          />
        )}
      </RenderCounter>
    </div>
  );
}
