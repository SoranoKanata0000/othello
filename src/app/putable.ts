import { useState } from 'react';

const [turnColor, setTurnColor] = useState(1);

export const canSetStone = (newBoard: number[][]) => {
  console.log('turn=', turnColor);
  const preStone = (newBoard: number[][], turnColor: number) => {
    let y = 1;
    let passCount = 0;
    while (y < 9) {
      for (let x = 0; x < 8; x++) {
        let i = 0;
        let j = 0;
        let countY = -1;
        let countX = -1;
        if (newBoard[y][x] !== 0) {
          console.log('board', y, x, '=>continue');
          continue;
        }
        if (newBoard[y][x] !== 1 && newBoard[y][x] !== 2) {
          newBoard[y][x] = 0;
        }
        while (countY < 2) {
          while (countX < 2) {
            i += countY;
            j += countX;
            while (newBoard[y + i][x + j] === turnColor) {
              i += countY;
              j += countX;
              if (
                newBoard[y + i] === newBoard[0] ||
                newBoard[y + i] === newBoard[9] ||
                newBoard[y + i][x + j] === 0
              ) {
                i = 0;
                j = 0;
                break;
              }
            }
            if (
              newBoard[y + countY] === newBoard[0] ||
              newBoard[y + countY] === newBoard[9] ||
              newBoard[y + countY][x + countX] === 2 / turnColor ||
              newBoard[y + countY][x + countX] === 0
            ) {
              i = 0;
              j = 0;
            }
            if (newBoard[y + i][x + j] === 2 / turnColor) {
              const putableBoard = newBoard.map((brd) => true);
              newBoard[y][x] = 3;
              passCount++;
            }
            i = 0;
            j = 0;
            countX++;
          }
          countX = -1;
          countY++;
        }
      }
      y++;
    }
    console.log('ps.end');
    return passCount;
  };
  if (preStone(newBoard, turnColor) === 0) {
    console.log(2 / turnColor, '=>', turnColor);
    setTurnColor(turnColor);
    const preTurnColor = 2 / turnColor;
    preStone(newBoard, preTurnColor);
  }
};
