import React, { useCallback, useMemo } from "react";

const Square = ({ value, rowIndex, cellIndex, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(rowIndex, cellIndex);
  }, [rowIndex, cellIndex, onClick]);
  let content = null;
  if (value === true) content = "X";
  else if (value === false) content = "O";

  return (
    <button className="square" onClick={handleClick}>
      {content}
    </button>
  );
};

const Board = ({ history, stepNumber, player, onChangeBoard }) => {
  const curSquares = (history[stepNumber] || { squares: [] }).squares;
  const chunks = useMemo(
    () =>
      curSquares.reduce((acc, cur, index) => {
        if (index % 3 === 0) acc.push([]);
        acc[acc.length - 1].push(cur);

        return acc;
      }, []),
    [curSquares]
  );

  const handleClick = useCallback((rowIndex, cellIndex) => {
    const squares = [...curSquares];
    squares.splice(rowIndex * 3 + cellIndex, 1, player);
    onChangeBoard(squares, player, stepNumber);
  }, [curSquares, onChangeBoard, player, stepNumber]);

  return (
    <div>
      {chunks.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((cell, cellIndex) => (
            <Square
              key={cellIndex}
              value={cell}
              rowIndex={rowIndex}
              cellIndex={cellIndex}
              onClick={handleClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
