import birdsData from './data.js';




const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4')

      console.log(option1);

  const ca = document.querySelector('.container')
const optionElem = document.querySelectorAll('.option');

const qustionField = document.querySelector('.cards__play');
const btnNext = document.querySelector('.btn__next');

let currentQuestio = [],
    acceptAnswer = true,
    score = 0,
    questionCounter = 0,
    validateQuestion = []

const CORRECT_AANSWER = 5
const random = [];

function getRandomArr() {
  let newArr = []
  for (let i = 0; i < birdsData.length; i++) {
    for (let j = 0; j < birdsData[i].length; j++) {
      newArr.push(birdsData[i][j])
    }
  }
  for (let i = 0; i < 4; i++) {
    let number = Math.floor(Math.random() * newArr.length)
    random.push(newArr[number])
  }
  return random
}

const loadQuiz = () =>{
}


window.addEventListener('load', () =>{
  loadQuiz()
})

getRandomArr() //возвращает новый рандомный массив из 4 элементов
