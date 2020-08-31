// import React from "react";

// const Result =({score, playAgain})=>(
//     <div className="core-board">
//         <div className="score">Zdobyłeś {score}/5 poprawnych odpowiedzi!</div>
//         <button className="playBtn" onClick={playAgain}>
//            Graj ponownie
//         </button>
//     </div>
// );

// export default Result

import React from 'react'



const Result = ({ score, grajPonownie }) => {
    return (
        <div className="score-card">
            {/* <div className="score">
                {score > 4 ? (<div>Super! Twój wynik to {score}/5</div>) : <div>Slabo. Twój wynik to {score}/5</div>}
            </div> */}
            <button
                className="playBtn"
                onClick={grajPonownie}
            >Graj Ponownie</button>
        </div>
    )
}

export default Result