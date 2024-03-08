const plusBtnList = document.querySelectorAll('.plus')
const minusBtnList = document.querySelectorAll('.minus')
const responseList = document.querySelectorAll('.answer')
const hamburgerBtn = document.querySelector(".hamburger-button")
const optionMenu = document.querySelector(".hamburger-con")
const theJoke = document.querySelector(".output")
const jokeBtn = document.querySelector(".button")


plusBtnList.forEach(element => {
    element.addEventListener('click', () => {

        let index = parseInt(element.id)
        responseList[index].style.display = "block"
        minusBtnList[index].style.display = "block"
        plusBtnList[index].style.display = "none"
    })
});

minusBtnList.forEach(element => {
    element.addEventListener('click', () => {

        let index = parseInt(element.id)
        responseList[index].style.display = "none"
        minusBtnList[index].style.display = "none"
        plusBtnList[index].style.display = "block"
    })
});

hamburgerBtn.addEventListener('click', () => {
    
    if (optionMenu.style.display == "none"){
        optionMenu.style.display = "flex"
        
    }
    else{
        optionMenu.style.display = "none"
    }
})

//                         Dad Jokes
// ######################################################################

// const url = 'https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'dca83b1671msh5fe94dd26654c85p1ac500jsna8f18d1372ca',
// 		'X-RapidAPI-Host': 'dad-jokes-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// async function getJoke() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         const joke = result[0].joke;
//         theJoke.textContent = joke
//     } catch (error) {
//         theJoke.textContent = "Something went awry...."
//     }
// }

// jokeBtn.addEventListener('click', () => {
    
//     getJoke()

// })