'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 2, 0, 0, 1, 0],
    [0, 0, 1, 2, 0, 2, 0, 0],
    [0, 0, 0, 1, 2, 1, 1, 0],
    [0, 1, 1, 2, 1, 0, 0, 0],
    [0, 0, 2, 0, 2, 1, 0, 0],
    [0, 1, 0, 0, 2, 0, 2, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
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
  /*while (board[y + i][x] === 2 / turnColor) {
      console.log('while i=', i);
      i++;
      if (board[y + i] === board[9] || board[y + i][x] === 0) {
        i = 0;
        break;
      }
    }
    if (board[y + 1] === board[9] || board[y + 1][x] === turnColor || board[y + 1][x] === 0) {
      i = 0;
    }
    if (board[y + i][x] === turnColor) {
      newBoard[y][x] = turnColor;
      console.log('下', i);
      for (let countY = 1; countY < i; countY++) {
        newBoard[y + countY][x] = turnColor;
      }
    }
    let j = 1;
    while (board[y - j] !== undefined && board[y - j][x] === 2 / turnColor) {
      j++;
      if (board[y - j] === undefined || board[y - j][x] === 0) {
        j = 0;
        break;
      }
    }
    if (
      (board[y - 1] !== undefined && board[y - 1][x] === turnColor) ||
      (board[y - 1] !== undefined && board[y - 1][x] === 0)
    ) {
      j = 0;
    }
    if (board[y - j] !== undefined && board[y - j][x] === turnColor) {
      newBoard[y][x] = turnColor;
      console.log('上', j);
      for (let countY = 1; countY < j; countY++) {
        newBoard[y - countY][x] = turnColor;
      }
    }
    let k = 1;
    while (board[y][x + k] === 2 / turnColor) {
      k++;
      console.log('k++');
      if (board[x + k] === undefined || board[y][x + k] === 0) {
        k = 0;
        break;
      }
    }
    if (board[y][x] === [y][7] || board[y][x + 1] === turnColor || board[y][x + 1] === 0) {
      k = 0;
    }
    if (board[x + k] !== undefined && board[y][x + k] === turnColor) {
      newBoard[y][x] = turnColor;
      console.log('右', k);
      for (let countX = 1; countX < k; countX++) {
        newBoard[y][x + countX] = turnColor;
      }
    }
    let l = 1;
    while (board[y][x - l] === 2 / turnColor) {
      l++;
      if (board[x - 1] === undefined || board[y][x - l] === 0) {
        l = 0;
        break;
      }
    }
    if (board[y][x] === [0][x] || board[y][x - 1] === turnColor || board[y][x - 1] === 0) {
      l = 0;
    }
    if (board[x - l] !== undefined && board[y][x - l] === turnColor) {
      newBoard[y][x] = turnColor;
      console.log('左', l);
      for (let countX = 1; countX < l; countX++) {
        newBoard[y][x - countX] = turnColor;
      }
    }
    let m = 0;
    while (board[y + 1] !== undefined && board[y + m][x + m] === 2 / turnColor) {
      m++;
      if (board[y + m][x + m] === undefined || board[y + m][x + m] === turnColor - turnColor) {
        m = 0;
        break;
      }
    }
    if (
      (board[y - 1] !== undefined && board[y - 1][x - 1] === turnColor) ||
      (board[y - 1] !== undefined && board[y - 1][x - 1] === 0)
    ) {
      m = 0;
    }
    if (board[y + m] !== undefined && board[y + m][x + m] === turnColor) {
      newBoard[y][x] = turnColor;
      console.log('右下', m);
      for (let countYX = 1; countYX < m; countYX++) {
        newBoard[y + countYX][x + countYX] = turnColor;
      }
    }
    let n = 0;
    while (board[y - 1] !== undefined && board[y - n][x + n] === 2 / turnColor) {
      n++;
      if (board[y - 1] === undefined || board[y - n][x + n] === 0) {
        n = 0;
        break;
      }
    }
    if (
      (board[y - 1] !== undefined && board[y - 1][x - 1] === turnColor) ||
      (board[y - 1] !== undefined && board[y - 1][x - 1] === 0)
    ) {
      n = 0;
    }
    if (board[y - n] !== undefined && board[y - n][x + n] === turnColor) {
      newBoard[y][x] = turnColor;
      console.log('右上', n);
      for (let countYX = 1; countYX < n; countYX++) {
        newBoard[y - countYX][x + countYX] = turnColor;
      }
    }
    let o = 0;
    while (board[y + 1] !== undefined && board[y + o][x - o] === 2 / turnColor) {
      o++;
      if (board[y + 1][x - 1] === undefined || board[y + o][x - o] === 0) {
        o = 0;
        break;
      }
    }
    if (
      (board[y + 1] !== undefined && board[y + 1][x - 1] === turnColor) ||
      (board[y + 1] !== undefined && board[y + 1][x - 1] === 0)
    ) {
      o = 0;
    }
    if (
      board[y + o] !== undefined &&
      board[x - o] !== undefined &&
      board[y + o][x - o] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      console.log('左下', o);
      for (let countYX = 1; countYX < o; countYX++) {
        newBoard[y + countYX][x - countYX] = turnColor;
      }
    }
    let p = 0;
    while (board[y - p] !== undefined && board[y - p][x - p] === 2 / turnColor) {
      p++;
      if (board[y - p][x - p] === undefined || board[y - p][x - p] === 0) {
        p = 0;
        break;
      }
    }
    if (
      (board[y - 1] !== undefined && board[y - 1][x - 1] === turnColor) ||
      (board[y - 1] !== undefined && board[y - 1][x - 1] === 0)
    ) {
      p = 0;
    }
    if (
      board[y - p] !== undefined &&
      board[x - p] !== undefined &&
      board[y - p][x - p] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      console.log('左上', p);
      for (let countYX = 1; countYX < p; countYX++) {
        newBoard[y - countYX][x - countYX] = turnColor;
      }
    }*/

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
