/* 
 * @file            Index JS
 * @description     This file handles the consumption of the Advice Slip API and the manipulation of its response, converting the data into text rendered within the HTML. Asynchronous operations, error handling, and best practices in naming conventions and clean code have been applied, reflecting my technical growth and maturity in JavaScript.
 * @author          Mário Miguel de Almeida
 * @last-modified   2025-12-27
 * @dependencies    none (Vanilla JS)
 */

const adviceIdEl = document.getElementById("adviceId")
const adviceDescriptionEl = document.getElementById("adviceDescription")
const actionButtonEl = document.getElementById("actionButton")

async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice', {
        cache: 'no-cache'
    })
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
