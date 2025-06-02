import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const PLAYERS = {
  'X': 'Player 1',
  'O': 'Player 2'
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer
}

function deriveGameBoard(gameTurns) {
  /*คือการทำให้ gameBoard เป็นแบบ 
  [[null, null, null],
  [null, null, null],
  [null, null, null],]
  ทุกครั้ง
  แล้วค่อยวนลูปใน GameTurn แล้วเซตค่าลงไป
  */
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    /* เป็นการไล่เอาที่ละ rol และ col ที่ชนะ และเทียบว่าทั้ง 3 ช่องนั้นมีสัญลักษณ์เหมือนกันทั้ง 3 ช่องไหม 
    { row: 0, col: 0 },
    { row: 0, col: 1 },
    { row: 0, col: 2 },
    */
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    /* ถ้าทั้ง3ช่อง ที่ไล่จากตารางที่สามารถชนะได้ ถ้าทั้ง 3 จุด มีสัญลักษณ์เหมือนกัน === ผู้เล่นที่มีสัญลักษณ์นั้นชนะ */
    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      // เอาสัญลักษณ์ที่ชนะ มาเปรียบใน Players ว่ามีชื่ออะไร และทำการส่งชื่อนั้นออกไป
      winner = players[firstSquareSymbol]; // Player 1 or Player 2
    }
  }
  return winner;
}
function App() {

  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  /* gameTurns
  { square: { row , col }, player: <name/symbol> }, 
  { square: { row , col }, player: <name/symbol> },
  */

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns); //func. 1
  const winner = deriveWinner(gameBoard, players); //func. 2

  //กรณีที่กดครบทั้ง 9 ช่องแล้ว ยังไม่เข้าเงื่อนไขที่สามารถทำให้ผู้เล่นคนใดคนหนึ่งชนะได้ === เสมอกันทั้งคู่
  const hasDraw = gameTurns.length === 9 && !winner;

  // เมื่อมีการกดใส่ "X" / "O" ในตาราง
  function handleSelectSquare(rowIndex, colIndex) {

    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns
      ];

      return updateTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  // เมื่อมีการเปลี่ยนชื่อผู้เล่น
  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
          <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange} />
        </ol>
        {/* ชนะ / เสมอ > ก็สามารถจบเกมได้เลย */}
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
