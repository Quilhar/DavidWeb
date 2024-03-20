const plusBtnList = document.querySelectorAll('.plus')
const minusBtnList = document.querySelectorAll('.minus')
const responseList = document.querySelectorAll('.answer')
const hamburgerBtn = document.querySelector(".hamburger-button")
const optionMenu = document.querySelector(".hamburger-con")
const theJoke = document.querySelector(".output")
const jokeBtn = document.querySelector(".button")
const copyYear = document.querySelector(".copy-year")



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
                            
//                          Weather
// ########################################################################

const city = document.querySelector(".city-output")
const dateTime = document.querySelector(".date-time")
const weatherIcon = document.querySelector(".weather-img")
const temp = document.querySelector(".temp-output")
const weatherCondition = document.querySelector(".condition-output")
const weatherKey = '127ced9ba1b98f8ddc63e6f82aec51f3'
const clouds = ['few clouds','scattered clouds','broken clouds']
const rain = ['shower rain','rain', 'mist']


const dateObject = new Date()
const month = dateObject.getMonth() + 1
const date = dateObject.getDate()
const year = dateObject.getFullYear()

let hours = dateObject.getHours()
let minutes = dateObject.getMinutes()
let amPM = "AM"
let lat = 43.6591
let lon = -70.2568
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=imperial`
let img 

async function getWeather() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        temp.textContent = Math.round(data.main.temp)
        city.textContent = data.name

        let curCondition = data.weather[0].description
        weatherCondition.textContent = curCondition

        if (clouds.includes(curCondition)) {
            img = "partly-cloudy.png"
        } else if (rain.include(curCondition)) {
            img = "rain.png"
        } else if (curCondition == 'thunderstorm') {
            img = "rain-storm.png"
        } else if (curCondition == "snow") {
            img = "snow.png"
        } else if (curCondition == "clear sky") {
            img = "sunny.png"
        }


        weatherIcon.src = `../DavidWeb/img/weather_imgs/${img}`
        
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

getWeather()

if (minutes < 10) {
    minutes = '0' + minutes.toString()
}

if (hours >= 12) {
    amPM = 'PM'
}

if (hours > 12) {
    hours = hours - 12
}


let time = ` ${hours}:${minutes} ${amPM}`

console.log(month, date, year, hours, minutes, time)

city.textContent = "Portland, ME"
dateTime.textContent = time
weatherIcon.src = ''
weatherCondition.textContent = "Cloudy"
