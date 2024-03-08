const hamburgerBtn = document.querySelector(".hamburger-button")
const optionMenu = document.querySelector(".hamburger-con")
const exitBtn = document.querySelector(".exit button")



hamburgerBtn.addEventListener('click', () => {
    
    optionMenu.style.display = "flex"
    hamburgerBtn.style.display = "none"

})

exitBtn.addEventListener('click', () => {
    
    optionMenu.style.display = "none"
    hamburgerBtn.style.display = "block"

})