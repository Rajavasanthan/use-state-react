import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Game from "./Game";
import Win from "./Win";
import Loss from "./Loss";
import Leaderboard from "./Leaderboard";
import { useState } from "react";
function App() {
  const [home, setHome] = useState(true);
  const [game, setGame] = useState(false);
  const [win, setWin] = useState(false);
  const [loss, setLoss] = useState(false);
  const [leaderboard, setLeaderboard] = useState(false);

  let changeState = (name) => {
    switch (name) {
      case "HOME":
        setHome(true);
        setGame(false);
        setWin(false);
        setLoss(false);
        setLeaderboard(false);
        break;
      case "GAME":
        setHome(false);
        setGame(true);
        setWin(false);
        setLoss(false);
        setLeaderboard(false);
        break;
      case "WIN":
        setHome(false);
        setGame(false);
        setWin(true);
        setLoss(false);
        setLeaderboard(false);
        break;
      case "LOSS":
        setHome(false);
        setGame(false);
        setWin(false);
        setLoss(true);
        setLeaderboard(false);
        break;
      case "LEADERBOARD":
        setHome(false);
        setGame(false);
        setWin(false);
        setLoss(false);
        setLeaderboard(true);
        break;
      default:
        break;
    }
  };
  return (
    <>
      {home && <Home changeState={changeState}></Home>}
      {game && <Game changeState={changeState}></Game>}
      {win && <Win changeState={changeState}></Win>}
      {loss && <Loss changeState={changeState}></Loss>}
      {leaderboard && <Leaderboard changeState={changeState}></Leaderboard>}
    </>
  );
}

export default App;
