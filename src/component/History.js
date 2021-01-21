import React, { useCallback } from "react";

const History = ({ history, onStep, player }) => {
  const handleClick = useCallback(
    (data, index) => {
      onStep(data, index);
    },
    [onStep]
  );

  return (
    <div className="game-info">
      <p>Next: {player === true ? "X" : "O"}</p>
      {history.map((data, index) => (
        <button
          key={index}
          className="board-row"
          onClick={(e) => handleClick(data, index)}
          style={{ display: "block" }}
        >
          <span>{data.stepNumber}</span>:
          <span>{data.player === true ? "X" : "O"}</span>
        </button>
      ))}
    </div>
  );
};

export default History;
