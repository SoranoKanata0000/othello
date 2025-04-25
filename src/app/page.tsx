'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);
    let i = 1;
    if (
      (board[y + i] !== undefined && board[y + i][x] === 2 / turnColor) ||
      (board[y - i] !== undefined && board[y - i][x] === 2 / turnColor) ||
      (board[x + i] !== undefined && board[y][x + i] === 2 / turnColor) ||
      (board[x - i] !== undefined && board[y][x - i] === 2 / turnColor) ||
      (board[y + i] !== undefined &&
        board[x + i] !== undefined &&
        board[y - i] !== undefined &&
        board[x + i] !== undefined &&
        board[y + i] !== undefined &&
        board[x - i] !== undefined &&
        board[y + i][x + i] === 2 / turnColor) ||
      (board[y - i] !== undefined &&
        board[x + i] !== undefined &&
        board[y - i] !== undefined &&
        board[x - i] !== undefined &&
        board[y + i] !== undefined &&
        board[x + i] !== undefined &&
        board[y - i][x + i] === 2 / turnColor) ||
      (board[y + i] !== undefined &&
        board[x - i] !== undefined &&
        board[y - i] !== undefined &&
        board[x - i] !== undefined &&
        board[y + i] !== undefined &&
        board[x + i] !== undefined &&
        board[y + i][x - i] === 2 / turnColor) ||
      (board[y - i] !== undefined &&
        board[x - i] !== undefined &&
        board[y - i] !== undefined &&
        board[x + i] !== undefined &&
        board[y + i] !== undefined &&
        board[x - i] !== undefined &&
        board[y - i][x - i] === 2 / turnColor)
    ) {
      while (board[y + i][x] === 2 / turnColor) {
        if (board[y + i] === undefined || board[y + i][x] === turnColor - turnColor) {
          break;
        }
        i++;
      }
      if (board[y + i][x] === turnColor) {
        newBoard[y][x] = turnColor;
        console.log(i);
        for (let countY = 1; countY < i; countY++) {
          newBoard[y + countY][x] = turnColor;
        }
      }
      i = 1;
      while (board[y - i][x] === 2 / turnColor) {
        if (board[y - i] === undefined || board[y - i][x] === turnColor - turnColor) {
          break;
        }
        i++;
      }
      if (board[y - i][x] === turnColor) {
        newBoard[y][x] = turnColor;
        console.log(i);
        for (let countY = 1; countY < i; countY++) {
          newBoard[y - countY][x] = turnColor;
        }
      }
      i = 1;
      while (board[y][x + i] === 2 / turnColor) {
        if (board[x + i] === undefined || board[y][x + i] === turnColor - turnColor) {
          break;
        }
        i++;
      }
      if (board[y][x + i] === turnColor) {
        newBoard[y][x] = turnColor;
        console.log(i);
        for (let countX = 1; countX < i; countX++) {
          newBoard[y][x + countX] = turnColor;
        }
      }
      i = 1;
      while (board[y][x - i] === 2 / turnColor) {
        if (board[x - i] === undefined || board[y][x - i] === turnColor - turnColor) {
          break;
        }
        i++;
      }
      if (board[y][x - i] === turnColor) {
        newBoard[y][x] = turnColor;
        console.log(i);
        for (let countX = 1; countX < i; countX++) {
          newBoard[y][x - countX] = turnColor;
        }
      }
      i = 1;
      while (board[y + i][x + i] === 2 / turnColor) {
        if (board[y + i][x + i] === undefined || board[y + i][x + i] === turnColor - turnColor) {
          break;
        }
        i++;
      }
      if (board[y + i][x + i] === turnColor) {
        newBoard[y][x] = turnColor;
        console.log(i);
        for (let countYX = 1; countYX < i; countYX++) {
          newBoard[y + countYX][x + countYX] = turnColor;
        }
      }
      i = 1;
      while (board[y - i][x + i] === 2 / turnColor) {
        if (board[y - i][x + i] === undefined || board[y - i][x + i] === turnColor - turnColor) {
          break;
        }
        i++;
      }
      if (board[y - i][x + i] === turnColor) {
        newBoard[y][x] = turnColor;
        console.log(i);
        for (let countYX = 1; countYX < i; countYX++) {
          newBoard[y - countYX][x + countYX] = turnColor;
        }
      }
      i = 1;
      while (board[y + i][x - i] === 2 / turnColor) {
        if (board[y + i][x - i] === undefined || board[y + i][x - i] === turnColor - turnColor) {
          break;
        }
        i++;
      }
      if (board[y + i][x - i] === turnColor) {
        newBoard[y][x] = turnColor;
        console.log(i);
        for (let countYX = 1; countYX < i; countYX++) {
          newBoard[y + countYX][x - countYX] = turnColor;
        }
      }
      i = 1;
      while (board[y - i][x - i] === 2 / turnColor) {
        if (board[y - i][x - i] === undefined || board[y - i][x - i] === turnColor - turnColor) {
          break;
        }
        i++;
      }
      if (board[y - i][x - i] === turnColor) {
        newBoard[y][x] = turnColor;
        console.log(i);
        for (let countYX = 1; countYX < i; countYX++) {
          newBoard[y - countYX][x - countYX] = turnColor;
        }
      }
      setTurnColor(2 / turnColor);
      setBoard(newBoard);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => clickHandler(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? `#000` : `#fff` }}
                />
              )}
            </div>
          )),
        )}
      </div>
    </div>
  );
}
