function App() {
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-2">row1 col1</div>
        <div className="col-8 align-self-center col2">row1 col2</div>
        <div className="col-2 my-col">row1 col3</div>
      </div>
      <div className="row my-row2 mt-3">
        <div className="col-4 vh-100 border bg-light">row2 col1</div>
        <div className="col-6 bg-dark text-white justify-content-center">
          <p className="mx-auto text-center p-3 shadow">row2 col2</p>
          <button type="button" className="btn btn-primary mx-auto d-block">
            submit
          </button>
        </div>
        <div className="col-2 bg-light text-dark">
          <p className="d-flex flex-column justify-content-center align-items-center vh-100 text-success shadow">
            row2 col3
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

//npm install node-sass
