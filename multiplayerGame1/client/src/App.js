import React, { useState } from "react";
import "./App.css";

const styles = {
  box: {
    display: "flex",
    alignSelf: "center",
    width: 500,
    height: 500,
    border: "1px solid #000",
  },
  controls: {
    display: "flex",
    alignSelf: "center",
  },
  item: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    position: "relative",
  },
};

const movementStep = 50;

const App = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const moveDown = () => {
    let newY = offset.y + movementStep;
    if( newY > 450 ){
      newY = 450;
    }
    setOffset({...offset, y: newY });
  };
  const moveRight = () => {
    let newX = offset.x + movementStep;
    if( newX > 450 ){
      newX = 450;
    }
    setOffset({...offset, x: newX });
  };
  const moveLeft = () => {
    let newX = offset.x - movementStep;
    if( newX < 0 ){
      newX = 0;
    }
    setOffset({...offset, x: newX });
  };
  const moveUp = () => {
    let newY = offset.y - movementStep;
    if( newY < 0 ){
      newY = 0;
    }
    setOffset({...offset, y: newY });
  };

  return (
    <div className="App">
      <div style={styles.box}>
        <div style={{ ...styles.item, ...{ left: offset.x, top: offset.y } }} />
      </div>
      <div style={styles.controls}>
        <table>
          <tr>
            <td></td>
            <td>
              <button onClick={moveUp}>Up</button>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <button onClick={moveLeft}>Left</button>
            </td>
            <td></td>
            <td>
              <button onClick={moveRight}>Right</button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button onClick={moveDown}>Down</button>
            </td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default App;
