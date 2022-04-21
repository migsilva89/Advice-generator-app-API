function getData() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => {
        return response.json();
    })
    .then(advices => {
        console.log(advices)
        console.log(advices.slip.id)
        let adviceText = document.getElementById("adviceContent")
        adviceText.textContent = advices.slip.advice
        let adviceId = document.getElementById("adviceName")
        adviceId.textContent = advices.slip.id
    })
}

document.getElementById("btn")
btn.addEventListener("click", getData)



