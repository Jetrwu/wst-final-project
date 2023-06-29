// Check login status on page load
document.addEventListener("DOMContentLoaded", function() {
  checkLoginStatus();
});

// Sign up page
function signUp() {
  // Retrieve form input values
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validate email and password
  if (email.includes("@") && password.length >= 6) {
    // Store user information in local storage
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("Signed up successfully!");
    window.location.href = "login.html"; // Redirect to login page
  } else {
    alert("Please enter a valid email address and a password with a minimum of 6 characters.");
  }
}

// Log in page
function logIn() {
  // Retrieve form input values
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Retrieve stored email and password from local storage
  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  // Check if entered email and password match stored values
  if (email === storedEmail && password === storedPassword) {
    localStorage.setItem("loggedIn", "true"); // Update login status in local storage
    checkLoginStatus(); // Update login status in UI
    window.location.href = "index.html"; // Redirect to index page
  } else {
    alert("Invalid email or password. Please try again.");
  }
}

// Log out
function logOut() {
  localStorage.setItem("loggedIn", "false"); // Update login status in local storage
  checkLoginStatus(); // Update login status in UI
  window.location.href = "login.html"; // Redirect to login page
}

// Check login status
function checkLoginStatus() {
  const loggedInStatus = localStorage.getItem("loggedIn");
  const loginStatusElement = document.getElementById("login-status");
  const logoutElement = document.getElementById("logout");

  if (loggedInStatus === "true") {
    // If logged in, update header bar with user's name
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    loginStatusElement.innerHTML = `Welcome, ${firstName} ${lastName}!`;
    logoutElement.style.display = "inline-block";
    document.getElementById("signup").style.display = "none";
  } else {
    // If logged out, restore default header bar
    loginStatusElement.innerHTML = `<a href="login.html">Log In</a>`;
    logoutElement.style.display = "none";
    document.getElementById("signup").style.display = "inline-block";
  }
}
