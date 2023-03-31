import { ButtonsClown } from "./Buttons.js"
import { fetchReservations,fetchClowns } from "./dataAccess.js"





//grabs container from index 
const mainContainer = document.querySelector("#container")
const render = () => {
    fetchReservations()
    .then(() => fetchClowns()
        .then(
            () => { 
    mainContainer.innerHTML = ButtonsClown()
}
))
}

render()
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)




