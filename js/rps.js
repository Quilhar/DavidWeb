
// const choiceRock = document.querySelector('#rock')
// const choicePaper = document.querySelector('#paper')
// const choiceScissors = document.querySelector('#scissors')


// choices = ['rock', 'paper', 'scissors']

// choiceRock.addEventListener('click', () => {
//     gamePlay(choiceRock.id)
// })
// choicePaper.addEventListener('click', () => {
//     gamePlay(choicePaper.id)
// })
// choiceScissors.addEventListener('click', () => {
//     gamePlay(choiceScissors.id)
// })

// function gamePlay(choice) {
//     // get user choice (passed in to function), update userImg
//     // get computer choice (create a function to handle this), update compImg
//     // discuss/show global vs local space
//     // decide who wins and update result (new function)
//     // check 
//     getCompChoice()
//     console.log(compChoice)
// }

// function getCompChoice() {
//     const compChoice = Math.floor(Math.random() * choices.length)
// }


// 1. get access to all html elements (show one, students the rest)
// 2. demonstrate using console.log() to see results of code
// 3. add eventListener buttons (show one, students do the rest)
// 4. creating a function to handle the gameplay which will be called when 
//    a button is clicked
// 5. get user choice (passed in to function), update userImg
// 6. get computer choice (create a function to handle this), update compImg
// 7. discuss/show global vs local space
// 8. decide who wins and update result (new function)
// 9. Next steps?


// the DOM: the document object model
// givving varibles to different elements

const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const result = document.querySelector('.result')
const userImg = document.querySelector('.user-img')
const compImg = document.querySelector('.comp-img')

const choices = ["rock", "paper", "scissors"]
let comp

// function rockBtnClick() {
//     // to change the text of the result object
//     result.innerText = 'Rock Clicked'
// }

// function paperBtnClick() {
//     result.innerText = 'Paper Clicked' 
// }

// function scissorsBtnClick() {
//     result.innerText = 'Scissors Clicked' 
// }

// adding the function to a button to occur when a certain action happens
rockButton.addEventListener('click', () => {
    userImg.src = "../img/rps_imgs/" + rockButton.id + ".png"
    // result.style.backroundColor = "red" (Changing an objects styles by using .style. followed by the style)
    compChoice()
})
paperButton.addEventListener('click', () => {
    userImg.src = "../img/rps_imgs/" + paperButton.id + ".png"
    compChoice()
})
scissorsButton.addEventListener('click', () => {
    userImg.src = "../img/rps_imgs/" + scissorsButton.id + ".png"
    compChoice()
})

// getting a random number to decide the index for the computer choice
function compChoice () {
    const randNum = Math.floor(Math.random()*3)
    comp = choices[randNum]
    compImg.src = "../img/rps_imgs/" + comp + ".png"
}

function winLose(userChoice) {
    console.log(comp, userChoice)
}

winLose(rock)