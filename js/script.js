const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

/* const togglePassword = document.querySelector(".bx-toggle-left");

const password = document.querySelector("#password");

togglePassword.addEventListener("click", function (e) {
  // Toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // Toggle the eye slash icon
  if (
    togglePassword.src.match(
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAT1JREFUSEtjZKAxYKSx+QyjFhAM4QEJInags1KBuAiIFQk6EaLgPhD3AfFsIP6JrAfdB9JAyd1ArEmkwejKrgAF3ID4OUwC2QJmoOARILYg03CYtoNAhgM2C0DBMosEw9uAaicDMQsQ5wJxGZLeSCB7BYiP7IOzQL4RkRaADOtGU1sP5DdAxfYCaRd0C74CBbiItEAMqO41mlpQ/D2Bir0D0sLoFoAiRoJICySB6l6gqQWJPYOKfQHSvOgWbAMKeBJpQTlQXRea2logvwkqdhxIW6Fb4AcU2EikBSBlrUA8CYjZgDgPiEuR9MYB2YvRLQDxtwCxNwmWYFN6GChoD8T/sVkgDrXZlUxLLgL1uQPxS5h+XGVRDFBBEBCbA7EUEZbdAqrpB+K5QPwbWf2AFHZEOJh4JaM+IBhWNA8iAI8YKxmwUPAYAAAAAElFTkSuQmCC" />
    )
  ) {
    togglePassword.src = (
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWpJREFUSEvtlD0sQ1EUx9sYJAaR+BYGW7uRGEQsIsRHRETSiUQkWLEY7EasrMwYdGCwtAOLSMRgkkgQaunQhcXvT1/yHG1vveSlS2/yy3vvnHvP/55z7n3RSMgjGnL8SFXAWeGKlKiWbS3BOnQ7t/gz4QG2YQ8+/WtsBp04zyFeZmA77QbDKGQ8h1+gBmMa+uEZVuAS3h1iTfgHYB9a4QKGCwks51N85dkDG7AIH3AIaw4hZX8LDTALR5rvz+Ca716Ygz5YNQF3yxBR75TJGYxZgRyGOmiHe6g3AipVsyOLLvyPoB60WIEXDG3QCDoVQQS0VhtRrA4rkMQwAWpYImCJBlmXglOYsgLTGE58zh3e/9NkxdMJGgLVX33487OT8iQomy24g6wmlhgqSww2YTy/yRlvvr1oOscHMOIIWsytSzoPb8UEPPsCL6qhLt13s0qMJ3xXcAy6L79GRX52AatTeFk1A2c5Qy/RF7ikPBmvV3T6AAAAAElFTkSuQmCC" />
    );
  } else {
    togglePassword.src = (
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAT1JREFUSEtjZKAxYKSx+QyjFhAM4QEJInags1KBuAiIFQk6EaLgPhD3AfFsIP6JrAfdB9JAyd1ArEmkwejKrgAF3ID4OUwC2QJmoOARILYg03CYtoNAhgM2C0DBMosEw9uAaicDMQsQ5wJxGZLeSCB7BYiP7IOzQL4RkRaADOtGU1sP5DdAxfYCaRd0C74CBbiItEAMqO41mlpQ/D2Bir0D0sLoFoAiRoJICySB6l6gqQWJPYOKfQHSvOgWbAMKeBJpQTlQXRea2logvwkqdhxIW6Fb4AcU2EikBSBlrUA8CYjZgDgPiEuR9MYB2YvRLQDxtwCxNwmWYFN6GChoD8T/sVkgDrXZlUxLLgL1uQPxS5h+XGVRDFBBEBCbA7EUEZbdAqrpB+K5QPwbWf2AFHZEOJh4JaM+IBhWNA8iAI8YKxmwUPAYAAAAAElFTkSuQmCC" />
    );
  }
});
 */
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "admin" && password === "admin") {
    alert("You have successfully logged in.");
    window.location.href = "dashboard.html";
  } else {
    alert("invalid user or password!");
    loginForm.username.value = "";
    loginForm.password.value = "";
  }
});
