import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="main-container">
        <div className={count == 1 ? "clear-src" : "blank"}>
          <div className="error-text">Opps, nothing found!!!</div>
        </div>
        <div className={count == 0 ? "container" : "blank"}>
          <div className="text">
            Welcome to <br></br>Ahanas brain
          </div>
          <button
            className="btn-ahana"
            onClick={() => {
              setCount(1);
            }}
          >
            Click to find
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
