import { useState } from "react";
export default function GameBoard() {
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSquareSelect(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const upgradedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      upgradedBoard[rowIndex][colIndex] = "X";
      return upgradedBoard;
    });
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSquareSelect(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
