// import React, {useState} from "react";
// import FlipMove from 'react-flip-move'

// const QuestionBox=({question, options, selected}) =>{
//     const [answer, setAnswer] = useState(options)
//     return(
//         <div className="questionBox">
//             <div className="question">{question}</div>
//             {answer.map((text,index)=>(
//                 <div>
//                 <FlipMove duration={500} easing="ease-in-out">
//                     <button key={index} className="answerBtn" onClick={() => {
//                         setAnswer([text]);
//                         selected(text)
//                     }}>{text}</button>
//                 </FlipMove>
//                 </div>

//             ))}
//         </div>
//     )
// };

// export default QuestionBox;


// import React from 'react';


// const pytanieBox = ({ question }) => {
//     console.log("hahhaa")
//     return (


//             <div >
//                 <div className="question">
//                     {question}
//                 </div>
//                 <p>llallal</p>
//             </div>

//     )
// }

// export default pytanieBox

import React, { useState } from 'react'
import FlipMove from 'react-flip-move'


const QuestionBox = ({ question, options, wybranaOdpowiedz }) => {

    const [answers, setAnswer] = useState(options)

    return (

        <div 

            className="questionBox">
            <div 
                style={
                    {
                        textAlign: "center"
                    }

                }
            className="question">
                {question}
            </div>
            <FlipMove duration={200} easing="cubic-bezier(1, 0, 0, 1)">
                {answers.map(item => (

                    <button
                        style={
                            {
                                color: "white",
                                width: "97%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              
                              
                            }

                        }
                        className="answerBtn"
                        onClick={() => {
                            setAnswer([item])
                            wybranaOdpowiedz(answers, item)
                        }}

                    >{item}
                    </button>

                ))}
            </FlipMove>
        </div>

    )
}

export default QuestionBox
