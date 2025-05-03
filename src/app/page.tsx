'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 0, 0, 0],
    [],
  ]);
  const clickHandler = (x: number, y: number) => {
    console.log(y, x);
    const newBoard = structuredClone(board);
    let i = 0;
    let j = 0;
    let countY = -1;
    let countX = -1;
    console.log('defalt', 'i=', i, 'j=', j, 'countY=', countY, 'countX=', countX);
    while (countY < 2) {
      if (board[y][x] === 1 || board[y][x] === 2) {
        break;
      }
      while (countX < 2) {
        i += countY;
        j += countX;
        console.log('i=', i, 'j=', j, 'countY=', countY, 'countX=', countX);
        while (board[y + i][x + j] === 2 / turnColor) {
          i += countY;
          j += countX;
          console.log('i+=countY', 'j+=countX');
          if (board[y + i] === board[0] || board[y + i] === board[9] || board[y + i][x + j] === 0) {
            i = 0;
            j = 0;
            console.log('while if=>break');
            break;
          }
        }
        if (
          board[y + countY] === board[0] ||
          board[y + countY] === board[9] ||
          board[y + countY][x + countX] === turnColor ||
          board[y + countY][x + countX] === 0
        ) {
          i = 0;
          j = 0;
          console.log('if=>0');
        }
        if (board[y + i][x + j] === turnColor) {
          newBoard[y][x] = turnColor;
          let turnStoneY = countY;
          let turnStoneX = countX;
          console.log('turnStoneY=', turnStoneY, 'turnStoneX=', turnStoneX);
          console.log('i=', i, 'j=', j);
          while (Math.abs(turnStoneY) < Math.abs(i) || Math.abs(turnStoneX) < Math.abs(j)) {
            console.log('turnStoneY=', turnStoneY, 'turnStoneX=', turnStoneX);
            newBoard[y + turnStoneY][x + turnStoneX] = turnColor;
            turnStoneY += countY;
            turnStoneX += countX;
          }
        }
        i = 0;
        j = 0;
        countX++;
      }
      countX = -1;
      countY++;
    }
    if (newBoard[y][x] !== 0 && board[y][x] !== newBoard[y][x]) {
      console.log(turnColor, '=>', 2 / turnColor);
      setTurnColor(2 / turnColor);
      setBoard(newBoard);
    }
  };
  const canSetStone = () => {
    let y = 0;
    let x = 0;
    let i = 0;
    let j = 0;
    let countY = -1;
    let countX = -1;
    for (const z of board) {
      if (board[y][x] !== 0) {
        continue;
      }
      const newBoard = structuredClone(board);
      while (countY < 2) {
        while (countX < 2) {
          i += countY;
          j += countX;
          console.log('i=', i, 'j=', j, 'countY=', countY, 'countX=', countX);
          while (board[y + i][x + j] === 2 / turnColor) {
            i += countY;
            j += countX;
            console.log('i+=countY', 'j+=countX');
            if (
              board[y + i] === board[0] ||
              board[y + i] === board[9] ||
              board[y + i][x + j] === 0
            ) {
              i = 0;
              j = 0;
              console.log('while if=>break');
              break;
            }
          }
          if (
            board[y + countY] === board[0] ||
            board[y + countY] === board[9] ||
            board[y + countY][x + countX] === turnColor ||
            board[y + countY][x + countX] === 0
          ) {
            i = 0;
            j = 0;
            console.log('if=>0');
          }
          if (board[y + i][x + j] === turnColor) {
            newBoard[y][x] = 3;
          }
          i = 0;
          j = 0;
          countX++;
        }
        countX = -1;
        countY++;
      }
      setBoard(newBoard);
      x++;
    }
    y++;
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div
              className={styles.cell}
              key={`${x}-${y}`}
              onClick={() => clickHandler(x, y)}
              {...() => canSetStone()}
            >
              {color !== 0 && color !== 3 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? `#000` : `#fff` }}
                />
              )}
              {color !== 1 && color !== 2 && (
                <div
                  className={styles.preStone}
                  style={{ background: color === 3 ? `#000` : `transparent` }}
                />
              )}
            </div>
          )),
        )}
      </div>
    </div>
  );
}
