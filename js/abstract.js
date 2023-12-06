const signInButton = document.getElementById('signin')

signInButton.addEventListener("mouseover", () => {
    signInButton.style.backgroundColor = "white"
    signInButton.style.color = "black"
})

signInButton.addEventListener("mouseleave", () => {
    signInButton.style.backgroundColor = "#4C5FD5"
    signInButton.style.color = "white"
})