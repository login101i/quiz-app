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


const QuestionBox = ({ question, options, correct, wybranaOdpowiedz, wybranoZle }) => {

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



                            // const clickedButton = document.addEventListener("click", function(event){
                            //     const target = event.target.parentElement;
                            //     console.log(target)
                            //     return target
                            // })
                            // console.log(clickedButton)

                            let kliknietyBtn = Array.from(document.querySelectorAll('.answerBtn')).find(el => el.innerText === item.trim());
                            const ancestor = kliknietyBtn.parentElement
                           
                            let pominieteBtn = Array.from(ancestor.querySelectorAll('.answerBtn')).filter(el => el.innerText !== item.trim());


                            if (answerIndex === correct) {
                                kliknietyBtn.style.background = "green"
                                kliknietyBtn.disabled = true
                                pominieteBtn.forEach(o => o.style.background = "red")
                                pominieteBtn.forEach(r=>r.disabled=true)

                                wybranaOdpowiedz(answerIndex, item)



                            }
                            else {
                                kliknietyBtn.style.background = "red"
                                kliknietyBtn.disabled = true
                                wybranoZle(answerIndex, item)


                                // const ancestor = pominieteBtn.forEach(o => o.style.background = "red")
                                // console.log(ancestor)
                             
                                // let oo = Array.from(ancestor.querySelectorAll('.answerBtn')).filter(el => el.innerText !== answer);
                                // console.log(oo)
                                // oo.forEach(o => o.style.background = "red")
                                // pominieteBtn.forEach(o => o.style.background = "red")
                                //     .style.background = "green"
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
