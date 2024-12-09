let userNumber = document.getElementById("userNumber")
let inputBox = document.getElementById("input-contener")
let check = document.getElementById("check-button")
let reset = document.getElementById("reset-button")
let output = document.getElementById("output-contener")
let number = Math.floor(Math.random()*11)
let attempts = 0

function guessNumber() {
    let x = userNumber.value
    if(x!=""){ attempts++ }

    let userInput = parseInt(userNumber.value)
    
    if(userInput === number) {
        let html = `<img src="./assets/Congratulations-Gifs-Transparent-PNG.gif" alt="win" width="300px">
        <h3>You guess the right number in ${attempts} attempts
        </h3>`
        output.innerHTML = html

        reset.style.display = "block"
        inputBox.style.display = "none"
        // let createButton = `<button id="reset-button">Reset</button>`
        // inputBox.innerHTML = createButton

        // let reset = document.getElementById("reset-button")

        // reset.addEventListener("click",()=>{
        //     window.location.reload()
        // })

    } if(userInput < number) {
        let html = `<img src="./assets/wrong.gif" alt="win" width="250px">
        <h3>Wrong guess,Try bigger number </h3>`
        output.innerHTML = html

        userNumber.value = ""
    } if(userInput > number) {
        let html = `<img src="./assets/wrong.gif" alt="win" width="250px">
        <h3>Wrong guess,Try smaller number </h3>`
        output.innerHTML = html

        userNumber.value = ""
    }
}

check.addEventListener("click",guessNumber)

userNumber.addEventListener("change",guessNumber)

reset.addEventListener("click",()=>{
    window.location.reload()
})