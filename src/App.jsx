import { useReducer } from "react";
import Home from "./Home";
import Game from "./Game";
import Win from "./Win";
import Loss from "./Loss";
import Leaderboard from "./Leaderboard";
import "bootstrap/dist/css/bootstrap.min.css";

let reducer = (state,action) => {
    switch(action.screen) {
        case "HOME":
            return {screen : "HOME"}
        case "GAME":
            return {screen : "GAME"}
        case "WIN":
            return {screen : "WIN"}
        case "LOSS":
            return {screen : "LOSS"}
        case "LEADERBOARD":
            return {screen : "LEADERBOARD"}
        default:
            return state;
    }
}

function App() {
    const [state,dispatch] = useReducer(reducer,{screen : "HOME"})

    return <>
    {state.screen === "HOME" && <Home dispatch={dispatch}/>}
    {state.screen === "GAME" && <Game dispatch={dispatch}/>}
    {state.screen === "WIN" && <Win dispatch={dispatch}/>}
    {state.screen === "LOSS" && <Loss dispatch={dispatch}/>}
    {state.screen === "LEADERBOARD" && <Leaderboard dispatch={dispatch}/>}
    </>
}

export default App;