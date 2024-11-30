document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const destination = document.getElementById('destination').value;

    alert(`Thank you ${name}, your booking to ${destination} has been successfully registered!`);

    // Reset the form
    this.reset();
});