const qBank = [
  {
    question:
      "Płyta indykcyjna charakteryzuje się:  ",
    answers: ["Po wyłaczeniu zasilania miejsce grzewcze jest chłodne", "Jest o 50% grubsza od standardowej, indykcyjnej płyty", "Nie jest zasilana prądem elektrycznym", "Można ją podłączyć bezprzewodowo"],
    correct: "Po wyłaczeniu zasilania miejsce grzewcze jest chłodne",
    questionId: "099099"
  },
  {
    question:
      'Co to jest obłóg?',
    answers: ["Płat drewna o minimalnej grubości 8mm", "Cienki płat drewna używany do produkji płyt stolarkich", "Nie jest to na pewno fornir", "Taka kora drewna tylko innaczej nazwana"],
    correct: "Cienki płat drewna używany do produkji płyt stolarkich",
    questionId: "183452"
  },
  {
    question:
      "Płyta indykcyjna charakteryzuje się:  ",
    answers: ["Po wyłaczeniu zasilania miejsce grzewcze jest chłodne", "Jest o 50% grubsza od standardowej, indykcyjnej płyty", "Nie jest zasilana prądem elektrycznym", "Można ją podłączyć bezprzewodowo"],
    correct: "Po wyłaczeniu zasilania miejsce grzewcze jest chłodne",
    questionId: "099099"
  },
  {
    question:
      'Co to jest obłóg?',
    answers: ["Płat drewna o minimalnej grubości 8mm", "Cienki płat drewna używany do produkji płyt stolarkich", "Nie jest to na pewno fornir", "Taka kora drewna tylko innaczej nazwana"],
    correct: "Cienki płat drewna używany do produkji płyt stolarkich",
    questionId: "183452"
  },
  {
    question:
      "Płyta indykcyjna charakteryzuje się:  ",
    answers: ["Po wyłaczeniu zasilania miejsce grzewcze jest chłodne", "Jest o 50% grubsza od standardowej, indykcyjnej płyty", "Nie jest zasilana prądem elektrycznym", "Można ją podłączyć bezprzewodowo"],
    correct: "Po wyłaczeniu zasilania miejsce grzewcze jest chłodne",
    questionId: "099099"
  },
  {
    question:
      'Co to jest obłóg?',
    answers: ["Płat drewna o minimalnej grubości 8mm", "Cienki płat drewna używany do produkji płyt stolarkich", "Nie jest to na pewno fornir", "Taka kora drewna tylko innaczej nazwana"],
    correct: "Cienki płat drewna używany do produkji płyt stolarkich",
    questionId: "183452"
  },
  {
    question:
      "Płyta indykcyjna charakteryzuje się:  ",
    answers: ["Po wyłaczeniu zasilania miejsce grzewcze jest chłodne", "Jest o 50% grubsza od standardowej, indykcyjnej płyty", "Nie jest zasilana prądem elektrycznym", "Można ją podłączyć bezprzewodowo"],
    correct: "Po wyłaczeniu zasilania miejsce grzewcze jest chłodne",
    questionId: "099099"
  },
  {
    question:
      'Co to jest obłóg?',
    answers: ["Płat drewna o minimalnej grubości 8mm", "Cienki płat drewna używany do produkji płyt stolarkich", "Nie jest to na pewno fornir", "Taka kora drewna tylko innaczej nazwana"],
    correct: "Cienki płat drewna używany do produkji płyt stolarkich",
    questionId: "183452"
  },
  
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
  // 3

