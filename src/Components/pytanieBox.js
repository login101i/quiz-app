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


const QuestionBox = ({ question, options, correct, wybranoDobrze, wybranoZle, wszystkieNieaktywne}) => {

    const [answer, setAnswer] = useState(options)

    const background = document.querySelector('body')


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
                {options.map(item => (

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

                            setAnswer(item)
                            const answerIndex = options.indexOf(item)
                            console.log(answerIndex, item, answer)

                            let wszystkieBtn = document.querySelectorAll('.answerBtn')
                            console.log(wszystkieBtn)
                            let kliknietyBtn = Array.from(document.querySelectorAll('.answerBtn')).find(el => el.innerText === item.trim());

                            const ancestor = kliknietyBtn.parentElement
                            let pominieteBtn = Array.from(ancestor.querySelectorAll('.answerBtn')).filter(el => el.innerText !== item.trim());


                            if (answerIndex === correct) {
                                kliknietyBtn.style.background = "green"
                                kliknietyBtn.disabled = true
                                pominieteBtn.forEach(o => o.style.background = "red")
                                pominieteBtn.forEach(r => r.disabled = true)
                                wybranoDobrze(answerIndex, item)

                                // if(kliknietyBtn.disabled===true){
                                //     alert("nieaktywny")
                                // }


                            }
                            else {
                                kliknietyBtn.style.background = "red"
                                kliknietyBtn.disabled = true
                                wybranoZle(answerIndex, item)
                            }
                            const iloscButtonow = wszystkieBtn.length
                            console.log(iloscButtonow)
                         
                            console.log(iloscButtonow)
                            for (let i = 0; i < iloscButtonow; i++) {
                                let nieaktywny = wszystkieBtn[i].disabled === true
                                console.log(nieaktywny)
                            }
                            console.log(wszystkieBtn)
                            const tablicaWszystkichButtonow=Array.from(wszystkieBtn)
                            console.log(tablicaWszystkichButtonow)
                            const liczbaNiekatywnychBtn=tablicaWszystkichButtonow.filter(obj=>obj.disabled).length
                            console.log(liczbaNiekatywnychBtn)

                            if(liczbaNiekatywnychBtn===iloscButtonow){
                                wszystkieNieaktywne()
                                console.log("będę konczył grę")

                            }
                        }}
                     


                    >{item}
                    </button>

                ))}
            </FlipMove>
        </div >

    )
}

export default QuestionBox
