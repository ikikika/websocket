import React, { useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

const App = () => {
  const [inputData, setInputData] = useState("");

  const onInputChangeHandler = (e) => {
    setInputData(e.target.value);
  };

  const onClickHandler = () => {
    // socket.emit()
  };
  return (
    <div className="App">
      <input
        placeholder="message"
        value={inputData}
        onChange={onInputChangeHandler}
      />
      <button onClick={onClickHandler}>Send message</button>
    </div>
  );
};

export default App;
