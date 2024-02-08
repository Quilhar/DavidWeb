const playBtn = document.querySelector(".play-button")
const dot1 = document.querySelector(".dot1")
const dot2 = document.querySelector(".dot2")
const dot3 = document.querySelector(".dot3")

playBtn.addEventListener('click', () => {
    
    dot1.style.display = "block"
    
})

playBtn.addEventListener('click', () => {
    
    dot2.style.display = "block"
    
})

playBtn.addEventListener('click', () => {
    
    dot3.style.display = "block"
    
})

playBtn.addEventListener('click', () => {
    
    playBtn.style.display = "none"
    
})

