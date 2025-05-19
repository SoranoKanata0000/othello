'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { canSetStone } from './putable';

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
    [0, 0, 0, 0, 0, 0, 0, 0],
    [],
  ]);
  const clickHandler = (x: number, y: number) => {
    console.log(y, x, turnColor);
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
        while (board[y + i][x + j] === 2 / turnColor) {
          i += countY;
          j += countX;
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
        }
        if (board[y + i][x + j] === turnColor) {
          newBoard[y][x] = turnColor;
          let turnStoneY = countY;
          let turnStoneX = countX;
          console.log('newBoard=>', newBoard[y][x]);
          while (Math.abs(turnStoneY) < Math.abs(i) || Math.abs(turnStoneX) < Math.abs(j)) {
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
    if (newBoard[y][x] !== 0 && board[y][x] !== newBoard[y][x] && newBoard[y][x] !== 3) {
      console.log(turnColor, '=>', 2 / turnColor);
      setTurnColor(2 / turnColor);
      canSetStone(newBoard);
      setBoard(newBoard);
    }
  };
  // const canSetStone = (newBoard: number[][]) => {
  //   console.log('turn=', turnColor);
  //   const preStone = (newBoard: number[][], turnColor: number) => {
  //     let y = 1;
  //     let passCount = 0;
  //     while (y < 9) {
  //       for (let x = 0; x < 8; x++) {
  //         let i = 0;
  //         let j = 0;
  //         let countY = -1;
  //         let countX = -1;
  //         if (newBoard[y][x] !== 0) {
  //           console.log('board', y, x, '=>continue');
  //           continue;
  //         }
  //         if (newBoard[y][x] !== 1 && newBoard[y][x] !== 2) {
  //           newBoard[y][x] = 0;
  //         }
  //         while (countY < 2) {
  //           while (countX < 2) {
  //             i += countY;
  //             j += countX;
  //             while (newBoard[y + i][x + j] === turnColor) {
  //               i += countY;
  //               j += countX;
  //               if (
  //                 newBoard[y + i] === newBoard[0] ||
  //                 newBoard[y + i] === newBoard[9] ||
  //                 newBoard[y + i][x + j] === 0
  //               ) {
  //                 i = 0;
  //                 j = 0;
  //                 break;
  //               }
  //             }
  //             if (
  //               newBoard[y + countY] === newBoard[0] ||
  //               newBoard[y + countY] === newBoard[9] ||
  //               newBoard[y + countY][x + countX] === 2 / turnColor ||
  //               newBoard[y + countY][x + countX] === 0
  //             ) {
  //               i = 0;
  //               j = 0;
  //             }
  //             if (newBoard[y + i][x + j] === 2 / turnColor) {
  //               const putableBoard = newBoard.map((brd) => true);
  //               newBoard[y][x] = 3;
  //               passCount++;
  //             }
  //             i = 0;
  //             j = 0;
  //             countX++;
  //           }
  //           countX = -1;
  //           countY++;
  //         }
  //       }
  //       y++;
  //     }
  //     console.log('ps.end');
  //     return passCount;
  //   };
  //   if (preStone(newBoard, turnColor) === 0) {
  //     console.log(2 / turnColor, '=>', turnColor);
  //     setTurnColor(turnColor);
  //     const preTurnColor = 2 / turnColor;
  //     preStone(newBoard, preTurnColor);
  //   }
  // };
  const forceEnd = () => {
    let count = 0;
    for (let y = 1; y < 9; y++) {
      for (let x = 0; x < 8; x++) {
        if (board[y][x] === 1 || board[y][x] === 2) {
          count++;
        }
      }
    }
    if (count >= 64) {
      alert('ゲーム終了');
    }
  };
  const pointCounter = (turnColors: number) => {
    let score = 0;
    for (let y = 1; y < 9; y++) {
      for (let x = 0; x < 8; x++) {
        if (board[y][x] === turnColors) {
          score++;
        }
      }
    }
    console.log('score', turnColors, '=', score);
    return score;
  };
  forceEnd();
  return (
    <div className={styles.container}>
      <div className={styles.scoreCounter} onClick={() => pointCounter(1)}>
        <p>
          Black=
          <span>1</span>
        </p>
      </div>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => clickHandler(x, y)}>
              {color !== 0 && color !== 3 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? `#000` : `#fff` }}
                />
              )}
              {color !== 1 && color !== 2 && (
                <div
                  className={styles.preStone}
                  style={{ background: color === 3 ? `#777` : `transparent` }}
                />
              )}
            </div>
          )),
        )}
      </div>
      <div className={styles.scoreCounter} onClick={() => pointCounter(2)}>
        <p>
          white=
          <span>2</span>
        </p>
      </div>
    </div>
  );
}
