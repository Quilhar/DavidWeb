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
const clouds = ['few clouds','scattered clouds','broken clouds', 'overcast clouds']
const rain = ['shower rain','rain', 'mist', "light rain"]


// const dateObject = new Date()
// const month = dateObject.getMonth() + 1
// const date = dateObject.getDate()
// const year = dateObject.getFullYear()

// let lat
// let lon
// let hours = dateObject.getHours()
// let minutes = dateObject.getMinutes()
let amPm = "AM"

let curCity 
let curState

const lonLatKey = '65e3ae9323d14c73bd9b88373bcdd36c'
let lonLatUrl = `https://api.geoapify.com/v1/ipinfo?&apiKey=${lonLatKey}`

async function getLocation() {
    try {
        const locationResponse = await fetch(lonLatUrl)
        const locationData = await locationResponse.json()
        
        lat = locationData.location.latitude
        lon = locationData.location.longitude
        curCity = locationData.city.name
        curState = locationData.state.name
        
        city.textContent = `${curCity}, ${curState}`

        console.log(lat,lon)

        const coords = [lat, lon]

        return coords


    } catch (error) {
        console.error(error)
    }
}

async function getWeather(coords) {
    const la = coords[0]
    const lo = coords[1]
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${lo}&appid=${weatherKey}&units=imperial`
    let img
    try {
        
        const weatherResponse = await fetch(url)
        const weatherData = await weatherResponse.json()
        temp.textContent = Math.round(weatherData.main.temp)

        let curCondition = weatherData.weather[0].description
        console.log(curCondition)
        weatherCondition.textContent = curCondition

        
        if (clouds.includes(curCondition)) {
            img = "partly-cloudy.png"
        } else if (rain.includes(curCondition)) {
            img = "rain.png"
        } else if (curCondition == 'thunderstorm') {
            img = "rain-storm.png"
        } else if (curCondition == "snow") {
            img = "snow.png"
        } else {
            img = "sunny.png"
        }


        weatherIcon.src = `../img/weather_imgs/${img}`
        
        
        console.log(weatherData)
    } catch (error) {
        console.error(error)
    }
}


async function getTime(coords) {
    const la = coords[0]
    const lo = coords[1]
    const timeUrl = `https://api.api-ninjas.com/v1/worldtime?lat=${la}&lon=${lo}`
    const options = {
        
        headers: {
            'X-API-Key': 'o2RlrdpMNSHrVCW5750ZvQ==MJFpnNpLfmMO2p01',
        }
    }

    try {
        const timeResponse = await fetch(timeUrl, options)
        const timeData = await timeResponse.json()
        const hr = timeData.hour
        const min = timeData.minute
        const month = timeData.month
        const day = timeData.day
        const year = timeData.year

        if (min < 10) {
            min = '0' + minutes.toString()
        }
        
        if (hr >= 12) {
            amPm = 'PM'
        }
        
        if (hr > 12) {
            hr = hr - 12
        }

        dateTime.textContent = `${hr}:${min} ${amPm} ${month}/${day}/${year}`

    }

    catch (error) {
        console.error(error)
    }
}

getLocation()
    .then(c => getTime(c))

getLocation()
    .then(c => getWeather(c))







// let time = ` ${hours}:${minutes} ${amPM}`

// console.log(month, date, year, hours, minutes, time)

// dateTime.textContent = time


