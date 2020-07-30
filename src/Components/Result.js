import React from "react";

const Result =({score, playAgain})=>(
    <div className="core-board">
        <div className="score">Zdobyłeś {score}/5 poprawnych odpowiedzi!</div>
        <button className="playBtn" onClick={playAgain}>
           Graj ponownie
        </button>
    </div>
);

export default Result