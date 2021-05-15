const wrapHOC = WrappedComponent => props => (
  <div>
    <div>header</div>
    <div>
      <WrappedComponent {...props} />
    </div>
    <div>footer</div>
  </div>
);

function App() {
  return (
    <div className="App">
      <span>iam app</span>
    </div>
  );
}

export default wrapHOC(App, "str");

//app inside wrapHOC
