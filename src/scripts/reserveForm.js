import { sendReservation } from "./dataAccess.js"



export const ReserveForm = () => {
    let html = `
   <h2>Reserve your Party</h2>
        <div class="field">
            <label class="label" for="reserveParent">Parent Name</label>
            <input type="text" name="reserveParent" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reserveChild">Child Name</label>
            <input type="text" name="reserveChild" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reserveAddress">Address</label>
            <input type="text" name="reserveAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="numberAttending">Number of children attending</label>
            <input type="number" name="numberAttending" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reserveDate">Date of Reservation</label>
            <input type="date" name="reserveDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reserveLength">Length of Reservation in hours</label>
            <input type="hour" name="reserveLength" class="input" />
        </div>
        <button class="button" id="submitReservation" style="background-color: teal; font-family: Times New Roman">Submit Request</button>
        <div class="bg-image"></div>
    `

    return html
}


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        // Get what the user typed into the form fields
        const userName = document.querySelector("input[name='reserveParent']").value
        const partyName = document.querySelector("input[name='reserveChild']").value
        const userAddress = document.querySelector("input[name='reserveAddress']").value
        const userAttending = document.querySelector("input[name='numberAttending']").value
        const userDate = document.querySelector("input[name='reserveDate']").value
        const userLength = document.querySelector("input[name='reserveLength']").value


        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userName,
            childName:partyName,
            partyAddress: userAddress,
            numberAttending: +userAttending,
            partyDate: userDate,
            partyLength : userLength
        }

        // Send the data to the API for permanent storage
        sendReservation(dataToSendToAPI)

        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))


    }
})
