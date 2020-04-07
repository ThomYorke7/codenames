const teamsContainer = document.getElementById("squadre-container")
const createTeamsForm = document.getElementById("squadre-form")


const createTeamsGrid = (playersArray) => {
    createTeamsForm.remove()
    const teamGrid = document.createElement("div")
    teamGrid.id = "team-grid"
    const redTeam = document.createElement("div")
    redTeam.textContent = "Squadra Rossa"
    const blueTeam = document.createElement("div")
    blueTeam.textContent = "Squadra Blu"
    teamGrid.appendChild(redTeam)
    teamGrid.appendChild(blueTeam)
    for (let i = 0; i < playersArray.length; i++) {
        let playerDiv = document.createElement("div")
        playerDiv.classList.add("player-div")
        playerDiv.textContent = playersArray[i]
        teamGrid.appendChild(playerDiv)
    }
    teamsContainer.appendChild(teamGrid)
}

export { createTeamsGrid }