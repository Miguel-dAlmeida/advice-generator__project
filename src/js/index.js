const adviceIdEl = document.getElementById("adviceId")
const adviceDescriptionEl = document.getElementById("adviceDescription")
const actionButtonEl = document.getElementById("actionButton")

async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    return response.json()
}

async function onGenerateAdvice() {
    try {
        const advice = await getAdvice()
        adviceIdEl.innerText = `ADVICE #${advice.slip.id}`
        adviceDescriptionEl.innerText = advice.slip.advice
    } catch (error) {
        adviceDescriptionEl.innerText = "Unable to fetch advice. Try again."
        console.error(error)
    }
}

actionButtonEl.addEventListener("click", onGenerateAdvice)
