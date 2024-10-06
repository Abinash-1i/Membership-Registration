document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting to server
    
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Log the data to the console
    console.log("Form Submitted:");
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Password: " + password);
    
    // Display success message
    document.getElementById("successMessage").style.display = "block";
});