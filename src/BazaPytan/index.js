// const qBank = [
//   {
//     question:
//       "Płyta indykcyjna charakteryzuje się:  ",
//     answers: ["Po wyłaczeniu zasilania miejsce grzewcze jest chłodne", "Jest o 50% grubsza od standardowej, indykcyjnej płyty", "Nie jest zasilana prądem elektrycznym", "Można ją podłączyć bezprzewodowo"],
//     correct: "Po wyłaczeniu zasilania miejsce grzewcze jest chłodne",
//     questionId: "099099"
//   },
//   {
//     question:
//       'Co to jest obłóg?',
//     answers: ["Płat drewna o minimalnej grubości 8mm", "Cienki płat drewna używany do produkji płyt stolarkich", "Nie jest to na pewno fornir", "Taka kora drewna tylko innaczej nazwana"],
//     correct: "Cienki płat drewna używany do produkji płyt stolarkich",
//     questionId: "183452"
//   },
//   {
//     question:
//       "Płyta indykcyjna charakteryzuje się:  ",
//     answers: ["Po wyłaczeniu zasilania miejsce grzewcze jest chłodne", "Jest o 50% grubsza od standardowej, indykcyjnej płyty", "Nie jest zasilana prądem elektrycznym", "Można ją podłączyć bezprzewodowo"],
//     correct: "Po wyłaczeniu zasilania miejsce grzewcze jest chłodne",
//     questionId: "099099"
//   },
//   {
//     question:
//       'Co to jest obłóg?',
//     answers: ["Płat drewna o minimalnej grubości 8mm", "Cienki płat drewna używany do produkji płyt stolarkich", "Nie jest to na pewno fornir", "Taka kora drewna tylko innaczej nazwana"],
//     correct: "Cienki płat drewna używany do produkji płyt stolarkich",
//     questionId: "183452"
//   },
//   {
//     question:
//       "Płyta indykcyjna charakteryzuje się:  ",
//     answers: ["Po wyłaczeniu zasilania miejsce grzewcze jest chłodne", "Jest o 50% grubsza od standardowej, indykcyjnej płyty", "Nie jest zasilana prądem elektrycznym", "Można ją podłączyć bezprzewodowo"],
//     correct: "Po wyłaczeniu zasilania miejsce grzewcze jest chłodne",
//     questionId: "099099"
//   },
//   {
//     question:
//       'Co to jest obłóg?',
//     answers: ["Płat drewna o minimalnej grubości 8mm", "Cienki płat drewna używany do produkji płyt stolarkich", "Nie jest to na pewno fornir", "Taka kora drewna tylko innaczej nazwana"],
//     correct: "Cienki płat drewna używany do produkji płyt stolarkich",
//     questionId: "183452"
//   },
//   {
//     question:
//       "Płyta indykcyjna charakteryzuje się:  ",
//     answers: ["Po wyłaczeniu zasilania miejsce grzewcze jest chłodne", "Jest o 50% grubsza od standardowej, indykcyjnej płyty", "Nie jest zasilana prądem elektrycznym", "Można ją podłączyć bezprzewodowo"],
//     correct: "Po wyłaczeniu zasilania miejsce grzewcze jest chłodne",
//     questionId: "099099"
//   },
//   {
//     question:
//       'Co to jest obłóg?',
//     answers: ["Płat drewna o minimalnej grubości 8mm", "Cienki płat drewna używany do produkji płyt stolarkich", "Nie jest to na pewno fornir", "Taka kora drewna tylko innaczej nazwana"],
//     correct: "Cienki płat drewna używany do produkji płyt stolarkich",
//     questionId: "183452"
//   },

// ];

// export default (n = 5) =>
//   Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
//   // 3


const qBank = [
  {
    question: "Jak charakteryzuje się płyta indukcyjna?",
    answers: ["niczym", "czymś", "subtelnie", 'zajebistościa'],
    correct: 1,
    questionId: Math.random()
  },
  {
    question: "6+4=?",
    answers: ["niczym", "czymś", "subtelnie", 'zajebistościa'],
    correct: 1,
    questionId: Math.random()
  },
  {
    question: "Co to jest komputer?",
    answers: ["niczym", "czymś", "subtelnie", 'zajebistościa'],
    correct: 1,
    questionId: Math.random()
  },
  {
    question: "Jak wysoko są chmury?",
    answers: ["niczym", "czymś super i jednocześnie fajnym a zarazem zajebistym", "subtelnie", 'zajebistościa'],
    correct: 0,
    questionId: Math.random()
  },
  {
    question: "Najmaczenijesza kolacja to ?",
    answers: ["niczym", "czymś", "subtelnie", 'zajebistościa'],
    correct: 1,
    questionId: Math.random()
  },
  {
    question: "Ile można wypić kawy na raz. Jak myślisz? Czy to trudne?",
    answers: ["niczym", "czymś", "subtelnie", 'zajebistościa'],
    correct: 3,
    questionId: Math.random()
  },
]

export default (n = 5) => Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n))
