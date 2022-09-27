import React, {useState} from "react";



const App = () => {

  const [inputData, setInputData] = useState('');

  const onInputChangeHandler = (e) => {
    setInputData(e.target.value);
  }

  const onClickHandler = () => {
    console.log(inputData);
  };
  return (
    <div className="App">
      <input placeholder="message" value={inputData} onChange={onInputChangeHandler}/>
      <button onClick={onClickHandler}>Send message</button>
    </div>
  );
};

export default App;
