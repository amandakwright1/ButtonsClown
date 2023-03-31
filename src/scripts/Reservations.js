import { getReservation, getClowns, saveCompletion } from "./dataAccess.js"

const convertToListElement = (reservation,clowns) => {
    return`
    <li>
     ${reservation.id} is at ${reservation.partyAddress} with ${reservation.numberAttending} kids attending.Reservation date is ${reservation.partyDate} for ${reservation.partyLength} hours. The party is for ${reservation.childName}. Contact person is ${reservation.parentName}.
    <select class="clowns" id="clowns">
    <option value="">Choose</option>
    ${
    clowns.map(
            clowns => {
                return `<option value="${reservation.id}--${clowns.id}">${clowns.name}</option>`
            }
        ).join("")
    }
</select>
    <button class="reservation__delete"
    id="reservation--${reservation.id}">
Delete
</button>
</li>
`
}




export const Reservation = () => {
    const reservation = getReservation()
    const sortReservations = reservation.sort ((a, b)=>new Date(a.partyDate) - new Date(b.partyDate))
const clowns = getClowns()

    let html =  sortReservations.map (reservation => convertToListElement(reservation, clowns)).join("")
                

   return html
}
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})


mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [reserveId, clownId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. reserveId
                   2. clownId
                   3. date_created
            */
            const completion = {
                reserveId : +reserveId,
                clownId : +clownId,
                date_created : Date.now()
            }

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */
            saveCompletion(completion)
        }
    }
)
