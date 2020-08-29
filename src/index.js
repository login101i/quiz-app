// import React, { Component } from 'react'
// import ReactDOM from "react-dom"
// import "./assets/style.css"
// import quizService from "./quizService/index"
// import QuestionBox from './Components/QuestionBox';
// import Result from "./Components/Result"

// // 1

// class QuizBee extends Component {
//     state = {
//         questionBank: [],
//         score: 0,
//         responses: 0,
//     }
//     getQuestions = () => {
//         quizService().then(question => {
//             this.setState({
//                 questionBank: question
//             })

//         })
//     }
//     computeAnswer = (answer, correct) => {
//         if (answer === correct) {
//             this.setState({
//                 score: this.state.score + 1
//             })
//         }
//         this.setState({
//             responses: this.state.responses < 5 ? this.state.responses + 1 : 5
//         })
//     }
//     playAgain = () => {
//         this.getQuestions();
//         this.setState({
//             score: 0,
//             responses: 0
//         })
//     }
//     componentDidMount() {
//         this.getQuestions()
//     }
//     render() {
//         return (
//             <body>
//                 <div className="container">
//                     <div className="title">Akan Game</div>
//                     {this.state.questionBank.length > 0 &&
//                         this.state.responses < 5 &&
//                         this.state.questionBank.map(
//                             ({ question, answers, correct, questionId }) => (
//                                 <QuestionBox
//                                     question={question}
//                                     options={answers}
//                                     key={questionId}
//                                     selected={answer => this.computeAnswer(answer, correct)}
//                                 />
//                             )
//                         )}

//                     {this.state.responses === 5 ?
//                         (<Result score={this.state.score} playAgain={this.playAgain} />
//                         ) : null}
//               }
//             </div>
//             </body>
//         )
//     }
// }


// ReactDOM.render(<QuizBee />, document.getElementById("root"))
// // 2


// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// import './assets/style.css'

// import bazaPytan from './BazaPytan/index'
// import questionBox from './Components/pytanieBox'

// class AKANGAME extends Component {
//     state = {
//         pytania: []
//     }

//     pobierzPytania = () => {

//         bazaPytan().then(pytanko => {
//             this.setState({
//                 pytania: pytanko
//             })
//         })
//     }

//     componentDidMount() {
//         this.pobierzPytania()
//     }



import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import quizService from './BazaPytan/index'

import QuestionBox from './Components/pytanieBox'
import Result from './Components/Result'
import ScrollView from 'scroll-view'


import './assets/style.css'



class QuizBee extends Component {
    state = {
        questionBank: [],
        score: 0,
        responses: 0
    }

    getQuestions = () => {
        quizService().then(question => {
            this.setState({
                questionBank: question
            })
        })
    }

    componentDidMount() {
        this.getQuestions()
    }



    rozkminijOdpowiedz = (answers, item, correct) => {
        console.log(answers, item, correct)
        if (item === answers[correct]) {
            this.setState({
                score: this.state.score + 1
            })
            console.log("poprawna odpowiedz")
        }
        this.setState({
            responses: this.state.responses + 1
        })

    }


    grajPonownie = () => {
        this.getQuestions()
        this.setState({
            score: 0,
            responses: 0
        })
    }
//    doGory(){
//        document.body.scroll.scrollTo({ x: 0, y: 0, animated: true });
//    }

    render() {
        return (
           
            <div className="container">
                <div className="title">AKAN QUIZ</div>
                {this.state.questionBank.length > 0 && this.state.responses < 5 &&
                    this.state.questionBank.map(
                        ({ question, answers, correct, questionId, wybranaOdpowiedz }) => (
                            <QuestionBox
                                key={questionId}
                                question={question}
                                options={answers}
                                wybranaOdpowiedz={(answers, item) => this.rozkminijOdpowiedz(answers, item, correct)}
                            />
                        )


                    )}



                {this.state.responses === 5 ? (
                  
                        <Result  
                            score={this.state.score}
                            grajPonownie={this.grajPonownie}
                        />

                ) : null}

            </div>
      
        )
    }
}

ReactDOM.render(<QuizBee />, document.getElementById("root"))
