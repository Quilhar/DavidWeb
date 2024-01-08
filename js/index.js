const plusBtnList = document.querySelectorAll('.plus')
const minusBtnList = document.querySelectorAll('.minus')
const responseList = document.querySelectorAll('.answer')


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