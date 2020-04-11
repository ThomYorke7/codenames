const gridContainer = document.getElementById("griglia-container")
const scenarioBtn = document.getElementById("caricamento-scenario-btn")

const populateGrid = () => {

    const createDivs = (() => {
        for (let i = 0; i < 25; i++) {
            let cardContainer = document.createElement("div")
            cardContainer.classList.add("card-container")
            gridContainer.appendChild(cardContainer)
        }
    })()

    const loadScenario = (scenario) => {
        let id = 1
        Object.values(gridContainer.children).forEach(card => {
            card.style.backgroundImage = `url(./images/SCENARIO${scenario}/IMG${id}.png)`
            id++
        })
    }

    scenarioBtn.addEventListener("click", () => {
        let scenario = document.getElementById("scenario").value
        if (scenario) {
            loadScenario(scenario)
        }
    })
}



export { populateGrid }