const gridContainer = document.getElementById("griglia-container")
const cards = gridContainer.children

const cardListener = () => {

    const createChoices = (div) => {
        const selectors = ["blue", "red", "black", "gray"]
        const selectorsContainer = document.createElement("div")
        selectorsContainer.classList.add("selectorsContainer")
        for (let i = 0; i < 4; i++) {
            let selectorDiv = document.createElement("div")
            selectorDiv.classList.add(`${selectors[i]}-selector`)
            selectorDiv.classList.add("choice")
            selectorsContainer.appendChild(selectorDiv)
        }
        div.appendChild(selectorsContainer)
    }

    const createRemoveBtn = () => {
        const removeBtn = document.createElement("div")
        removeBtn.classList.add("remove-choice")
        return removeBtn
    }

    gridContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("choice")) {
            let choice = e.target.classList[0]
            let choiceParent = e.target.parentNode

            switch (choice) {
                case "blue-selector":
                    choiceParent.style.backgroundImage = "url(./images/AGENTI/blue1.jpg)";
                    choiceParent.innerHTML = "";
                    choiceParent.appendChild(createRemoveBtn())
                    break;
                case "red-selector":
                    choiceParent.style.backgroundImage = "url(./images/AGENTI/red2.jpg)";
                    choiceParent.innerHTML = "";
                    choiceParent.appendChild(createRemoveBtn())
                    break;
                case "black-selector":
                    choiceParent.style.backgroundImage = "url(./images/AGENTI/black.jpg)";
                    choiceParent.innerHTML = "";
                    choiceParent.appendChild(createRemoveBtn())
                    break;
                case "gray-selector":
                    choiceParent.style.backgroundImage = "url(./images/AGENTI/gray1.jpg)";
                    choiceParent.innerHTML = "";
                    choiceParent.appendChild(createRemoveBtn())
                    break;
            }
        } else if (e.target.classList.contains("remove-choice")) {
            e.target.parentNode.remove()
        }
    })

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", (e) => {
            if (e.target.classList.contains("card-container") && !e.target.hasChildNodes() && e.target.style.backgroundImage) {
                createChoices(e.target)
            }
        })
    }
}

export { cardListener }