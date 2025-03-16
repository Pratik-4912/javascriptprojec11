// Reservation Form Submission (Validation Example)
const reservationForm = document.getElementById("reservationForm");

reservationForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const people = document.getElementById("people").value;

    if (!name || !email || !date || !time || !people) {
        alert("Please fill out all fields.");
        return;
    }

    alert("Reservation successfully submitted!");
});