import { createTeamsGrid } from "./createTeams"

const addPlayer = document.getElementById("aggiungi-giocatore")
const playersContainer = document.getElementById("giocatori-container")
const createTeamsForm = document.getElementById("squadre-form")
const playerNames = document.getElementsByClassName("nome-giocatore")
let namesArray = []

const createPlayers = () => {

    const shuffle = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const createPlayerInput = (() => {
        addPlayer.addEventListener("click", () => {
            let newInput = document.createElement("input")
            newInput.classList.add("nome-giocatore")
            newInput.setAttribute("placeholder", "Nome")
            newInput.setAttribute("type", "text")
            newInput.required = true
            playersContainer.appendChild(newInput)
        })
    })()

    const collectPlayerNames = (() => {
        createTeamsForm.addEventListener("submit", (e) => {
            e.preventDefault()
            namesArray.length = 0
            Object.values(playerNames).forEach(name => {
                namesArray.push(name.value)
            })
            shuffle(namesArray)
            createTeamsGrid(namesArray)
        })
    })()
}


export { createPlayers, namesArray }