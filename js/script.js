const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

const togglePassword = document.getElementById("togglePassword");

const password = document.querySelector("#password");

togglePassword.addEventListener("click", function (e) {
  // Toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  if (password.type === "password") {
    // pass.type = "text";
    togglePassword.classList.remove("bx-toggle-left");
    togglePassword.classList.add("bxs-toggle-right");
  } else {
    // pass.type = "password";
    togglePassword.classList.remove("bxs-toggle-right");
    togglePassword.classList.add("bx-toggle-left");
  }
});

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "admin" && password === "web_app") {
    alert("You have successfully logged in.");
    window.location.href = "dashboard.html";
  } else {
    alert("invalid user or password!");
    loginForm.username.value = "";
    loginForm.password.value = "";
  }
});
