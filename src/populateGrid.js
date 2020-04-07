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

    const getScenario = () => {
        const scenario = document.getElementById("scenario").value
        console.log(scenario)
        return scenario
    }

    const loadScenario = () => {
        let scenario = getScenario();
        let id = 1
        Object.values(gridContainer.children).forEach(card => {
            card.style.backgroundImage = `url(./images/SCENARIO${scenario}/IMG${id}.png)`
            id++
        })
    }

    scenarioBtn.addEventListener("click", () => {
        loadScenario()
    })

}



export { populateGrid }