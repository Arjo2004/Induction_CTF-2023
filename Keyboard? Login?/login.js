// login.js

function checkLogin() {
    // Replace these with your actual login credentials
    const validUsername = "floofcat";
    const validPassword = "bitskrieg@69420";

    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    if (usernameInput === validUsername && passwordInput === validPassword) {
        // Redirect to a new page (replace 'redirect_page.html' with your desired URL)
        window.location.href = "flag-bits-floof.html";
    } else {
        // Display an error message
        document.getElementById("message").innerHTML = "Invalid username or password. Please try again.";
    }
}
