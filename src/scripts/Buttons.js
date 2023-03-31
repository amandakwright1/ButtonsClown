import { ReserveForm } from "./reserveForm.js"
import { Reservation } from "./Reservations.js"

export const ButtonsClown = () => {
    return `
    <h1>Buttons and Lollipop Clown Service</h1>
    <section class="reserveForm">
    ${ReserveForm()}
    </section>
   <section class= "reeservationRequests">
   <h2>Reservation Requests</h2>
   ${Reservation()}
   </section>
    `
}