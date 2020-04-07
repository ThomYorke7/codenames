const mapContainer = document.getElementById("mappa-container")
const createMapBtn = document.getElementById("caricamento-mappa-btn")
const mapNumber = document.getElementById("mappa")

const createMap = () => {
    createMapBtn.addEventListener("click", () => {
        //console.log(mapNumber.value)
        mapContainer.style.backgroundImage = `url(./images/CHIAVI/key${mapNumber.value}.jpg)`
    })
}


export { createMap }