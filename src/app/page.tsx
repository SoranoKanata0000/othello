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
    while (board[y + i] !== undefined && board[y + i][x] === 2 / turnColor) {
      i++;
      if (board[y + i] === undefined || board[y + i][x] === 0) {
        i = 0;
        break;
      }
    }
    if (board[y + 1][x] === turnColor || board[y + 1][x] === 0) {
      i = 0;
    }
    if (board[y + i] !== undefined && board[y + i][x] === turnColor) {
      newBoard[y][x] = turnColor;
      console.log('i = ', i);
      for (let countY = 1; countY < i; countY++) {
        newBoard[y + countY][x] = turnColor;
      }
    }
    let j = 1;
    while (board[y - j] !== undefined && board[y - j][x] === 2 / turnColor) {
      j++;
      if (board[y - j] === undefined || board[y - j][x] === turnColor - turnColor) {
        j = 0;
        break;
      }
    }
    if (board[y - 1][x] === turnColor || board[y - 1][x] === 0) {
      j = 0;
    }
    if (board[y - j] !== undefined && board[y - j][x] === turnColor) {
      newBoard[y][x] = turnColor;
      console.log('j = ', j);
      for (let countY = 1; countY < j; countY++) {
        newBoard[y - countY][x] = turnColor;
      }
    }
    let k = 1;
    while (board[x + k] !== undefined && board[y][x + k] === 2 / turnColor) {
      k++;
      if (board[x + k] === undefined || board[y][x + k] === turnColor - turnColor) {
        k = 0;
        break;
      }
    }
    if (board[y][x + 1] === turnColor || board[y][x + 1] === 0) {
      k = 0;
    }
    if (board[x + k] !== undefined && board[y][x + k] === turnColor) {
      newBoard[y][x] = turnColor;
      console.log('k = ', k);
      for (let countX = 1; countX < k; countX++) {
        newBoard[y][x + countX] = turnColor;
      }
    }
    let l = 1;
    while (board[x - l] !== undefined && board[y][x - l] === 2 / turnColor) {
      l++;
      if (board[x - l] === undefined || board[y][x - l] === turnColor - turnColor) {
        l = 0;
        break;
      }
    }
    if (board[y][x - 1] === turnColor || board[y][x - 1] === 0) {
      l = 0;
    }
    if (board[x - l] !== undefined && board[y][x - l] === turnColor) {
      newBoard[y][x] = turnColor;
      console.log('l = ', l);
      for (let countX = 1; countX < l; countX++) {
        newBoard[y][x - countX] = turnColor;
      }
    }
    let m = 1;
    while (
      board[y + m] !== undefined &&
      board[x + m] !== undefined &&
      board[y + m][x + m] === 2 / turnColor
    ) {
      m++;
      if (board[y + m][x + m] === undefined || board[y + m][x + m] === turnColor - turnColor) {
        m = 0;
        break;
      }
    }
    if (board[y + 1][x + 1] === turnColor || board[y + 1][x + 1] === 0) {
      m = 0;
    }
    if (
      board[y + m] !== undefined &&
      board[x + m] !== undefined &&
      board[y + m][x + m] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      console.log('m = ', m);
      for (let countYX = 1; countYX < m; countYX++) {
        newBoard[y + countYX][x + countYX] = turnColor;
      }
    }
    let n = 1;
    while (
      board[y - n] !== undefined &&
      board[x + n] !== undefined &&
      board[y - n][x + n] === 2 / turnColor
    ) {
      n++;
      if (board[y - n][x + n] === undefined || board[y - n][x + n] === turnColor - turnColor) {
        n = 0;
        break;
      }
    }
    if (board[y - 1][x + 1] === turnColor || board[y - 1][x + 1] === 0) {
      n = 0;
    }
    if (
      board[y - n] !== undefined &&
      board[x + n] !== undefined &&
      board[y - n][x + n] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      console.log('n = ', n);
      for (let countYX = 1; countYX < n; countYX++) {
        newBoard[y - countYX][x + countYX] = turnColor;
      }
    }
    let o = 1;
    while (
      board[y + o] !== undefined &&
      board[x - o] !== undefined &&
      board[y + o][x - o] === 2 / turnColor
    ) {
      o++;
      if (board[y + o][x - o] === undefined || board[y + o][x - o] === turnColor - turnColor) {
        o = 0;
        break;
      }
    }
    if (board[y + 1][x - 1] === turnColor || board[y + 1][x - 1] === 0) {
      o = 0;
    }
    if (
      board[y + o] !== undefined &&
      board[x - o] !== undefined &&
      board[y + o][x - o] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      console.log('o = ', o);
      for (let countYX = 1; countYX < o; countYX++) {
        newBoard[y + countYX][x - countYX] = turnColor;
      }
    }
    let p = 1;
    while (
      board[y - p] !== undefined &&
      board[x - p] !== undefined &&
      board[y - p][x - p] === 2 / turnColor
    ) {
      p++;
      if (board[y - p][x - p] === undefined || board[y - p][x - p] === 0) {
        p = 0;
        break;
      }
    }
    if (board[y - 1][x - 1] === turnColor || board[y - 1][x - 1] === 0) {
      p = 0;
    }
    if (
      board[y - p] !== undefined &&
      board[x - p] !== undefined &&
      board[y - p][x - p] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      console.log('p = ', p);
      for (let countYX = 1; countYX < p; countYX++) {
        newBoard[y - countYX][x - countYX] = turnColor;
      }
    }
    console.log('i=', i, 'j=', j, 'k=', k, 'l=', l, 'm=', m, 'n=', n, 'o=', o, 'p=', p);
    if (i !== 0 || j !== 0 || k !== 0 || l !== 0 || m !== 0 || n !== 0 || o !== 0 || p !== 0) {
      console.log(turnColor, '=>', 2 / turnColor);
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
