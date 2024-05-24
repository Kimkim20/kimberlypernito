document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // You can add your form validation logic here before submitting the form

        // Example: Display an alert on form submission
        alert('Form submitted successfully!');

        // You can also add code here to send the form data to a server using AJAX

        // Clear the form fields after submission
        form.reset();
    });
});