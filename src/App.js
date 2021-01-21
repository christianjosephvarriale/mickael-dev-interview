import React, { useState, useCallback } from "react";
import Board from "./component/Board";
import History from "./component/History";
import "./App.css";

const App = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleChangeStep = useCallback((data, index) => {
    // setStepNumber(data.stepNumber);
    // setXIsNext(data.xIsPlayer);
  }, []);

  const handleChangeBoard = useCallback(
    (squares, xIsPlayer, step) => {
      const clonedHistory = [...history];
      clonedHistory.splice(step + 1, 1, { squares, isX: xIsPlayer, step });
      setHistory(clonedHistory);
      setXIsNext(!xIsPlayer);
      setStepNumber(step + 1);
    },
    [history, setHistory, setStepNumber, setXIsNext]
  );

  return (
    <div className="game">
      <Board
        history={history}
        stepNumber={stepNumber}
        player={xIsNext}
        onChangeBoard={handleChangeBoard}
      />
      <History history={history} onStep={handleChangeStep} player={xIsNext} />
    </div>
  );
};

export default App;
