import WithHooks from "./components/WithHooks";
import WithRenderProps from "./components/WithRenderProps";
import WithHoc from "./components/WithHoc";
export default function App() {
  return (
    <div>
      <WithHooks />
      <hr />
      <WithRenderProps />
      <hr />
      <WithHoc />
    </div>
  );
}
