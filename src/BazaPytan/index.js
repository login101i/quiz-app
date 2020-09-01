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
    question: "Płyta indykcyjna charakteryzuje się",
    answers: [
      'Po wyłaczeniu zasilania miejsce grzewcze jest chłodne',
      "Jest o 50% grubsza od standardowej, indykcyjnej płyty",
      "Nie jest zasilana prądem elektrycznym",
      "Można ją podłączyć bezprzewodowo"],
    correct: 0,
    questionId: Math.random()
  },
  {
    question: "Co to jest obłóg?",
    answers: [

      "Płat drewna o minimalnej grubości 8mm",
      'Cienki płat drewna używany do produkji płyt stolarkich',
      "Nie jest to na pewno fornir",
      "Taka kora drewna tylko innaczej nazwana"],
    correct: 1,
    questionId: Math.random()
  },
  {
    question: "Jaką wysokość standardowo ma lodówka do zabudowy:",
    answers: ['133cm', "190cm", "187cm", "178cm"],
    correct: 3,
    questionId: Math.random()
  },
  {
    question: "Gdzie standardowo umieszczamy gniazdo elektryczne dla chłodziarki",
    answers: ['W korpusie szafki nad chłodziarką.', "Pod korpusem chłodziarki, na wysokości cokołu", "Tak jak mówi specyfikacja techniczna", "Byle gdzie, ważne żeby było", " po drugiej stronie na ścianie "],
    correct: 2,
    questionId: Math.random()
  },
  {
    question: "Co jest nie tak  na tym  poziomym przekroju drzwi",
    answers: ['Opaska nie jest umiejscowiona w jednej lini z opaską po drugiej stronie', "Skrzydło drzwi jest cofnięte w stosunku do lica ościeżnicy.", "Ościeżnica drzwi jest za krótka w stosunku do szerokości muru", "Brak odpowiedzniej grubości ościeżnicy na zawias wewnętrzny."],
    correct: 1,
    questionId: Math.random()
  },
  {
    question: "Upożądkuj w odpowiedniej kolejności proces malowania bejcą: ",
    answers: ['bejcowanie, lakier, lakier', "lakier, bejcowanie ,lakier", "lakier, bejcowanie", "lakierowanie, bejcowanie, utwardzanie"],
    correct: 0,
    questionId: Math.random()
  },
  // {
  //   question: `Co pokazane jest na zdjęciu?`,
  //   answers: ["Klamki i szyldy na patent", 'Biały obrus z lnu', "Szyldy dla drzwi do wykorzystania z  patentem ", "Klamka i szyldy na zamek na klucz"],
  //   correct: 3,
  //   questionId: Math.random()
  // },
  {
    question: `Czy można zastosować podwieszany zlewozmywak w drenianym blacie`,
    answers: ["tak", 'nie', "tylko jak się go przyklei ", "tak, ale musi być specjalnie wyprofilowany"],
    correct: 1,
    questionId: Math.random()
  },
  {
    question: `Gdzie we frontach nie występują spowalniacze`,
    answers: ["We frontach z ramką okalającą", 'we fronach z zawiasami puszkowymi', "Tam, gdzie występują zawiasy motylkowe", "We frontach z zawiasami puszkowymi i zawiasami motylkowymi imitujące główne zawiasy. "],
    correct: 2,
    questionId: Math.random()
  },
  {
    question: `Jak regulujemy ogranicznik otwarcia we froncie?`,
    answers: ["Poprzez regulację sprężyny", "Za pomocą śrubokręta", "Poprzez wykręcenie dodatkowych śrubek ograniczających", "za pomocą klucza sześciokątnego"],
    correct: 3,
    questionId: Math.random()
  },
  {
    question: `O czym należy przede wszystkim pamiętać zamawiając zlew ceramiczny?`,
    answers: ["O wybiciu otworu na baterię", "O podbiciu gwarancji", "O kupieniu susharki.", "O kupieniu odpowiednich środków zabezpieczających powierzchnię zlewozmywaka"],
    correct: 0,
    questionId: Math.random()
  },
  {
    question: `Jaką szerokość ma wkładka/panent do drzwi?`,
    answers: ["6cm", "7cm", "8cm", "9cm"],
    correct: 2,
    questionId: Math.random()
  },
]

export default (n = 8) => Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n))
