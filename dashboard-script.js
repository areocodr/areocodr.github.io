const allSideMenu = document.querySelectorAll("#sidebar .side-menu.top li a");

allSideMenu.forEach((item) => {
  const li = item.parentElement;

  item.addEventListener("click", function () {
    allSideMenu.forEach((i) => {
      i.parentElement.classList.remove("active");
    });
    li.classList.add("active");
  });
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector("#content nav .bx.bx-menu");
const sidebar = document.getElementById("sidebar");

menuBar.addEventListener("click", function () {
  sidebar.classList.toggle("hide");
});

//

const searchButton = document.querySelector(
  "#content nav form .form-input button"
);
const searchButtonIcon = document.querySelector(
  "#content nav form .form-input button .bx"
);
const searchForm = document.querySelector("#content nav form");
searchButton.addEventListener("click", function (e) {
  if (window.innerWidth < 576) {
    e.preventDefault();
    searchForm.classList.toggle("show");
    if (searchForm.classList.contains("show")) {
      searchButtonIcon.classList.replace("bx-search", "bx-x");
    } else {
      searchButtonIcon.classList.replace("bx-x", "bx-search");
    }
  }
});

if (window.innerWidth < 768) {
  sidebar.classList.add("hide");
} else if (window.innerWidth > 576) {
  searchButtonIcon.classList.replace("bx-x", "bx-search");
  searchForm.classList.remove("show");
}

window.addEventListener("resize", function () {
  if (this.innerWidth > 576) {
    searchButtonIcon.classList.replace("bx-x", "bx-search");
    searchForm.classList.remove("show");
  }
});
const students = [];

function addStudent() {
  const name = document.getElementById("name").value;
  const course = document.getElementById("course").value;
  const faculty = document.getElementById("faculty").value;
  const gender = document.getElementById("gender").value;
  const address = document.getElementById("address").value;
  const religion = document.getElementById("religion").value;
  const dob = document.getElementById("dob").value;
  const state = document.getElementById("state").value;

  const student = {
    name,
    course,
    faculty,
    gender,
    address,
    religion,
    dob,
    state,
  };

  students.push(student);

  displayStudents();
  clearForm();
}

function displayStudents() {
  const table = document.getElementById("studentTable");
  // Clear existing rows
  table.innerHTML =
    "<tr><th>Name</th><th>Course</th><th>Faculty</th><th>Gender</th><th>Home Address</th><th>Religion</th><th>Date of Birth</th><th>State of Origin</th><th>Action</th></tr>";

  // Add new rows
  students.forEach((student, index) => {
    const row = table.insertRow(-1);
    const cellCount = Object.keys(student).length + 1;

    for (let i = 0; i < cellCount - 1; i++) {
      const cell = row.insertCell(i);
      cell.innerHTML = Object.values(student)[i];
    }

    // Add delete button
    const deleteCell = row.insertCell(cellCount - 1);
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function () {
      deleteStudent(index);
    };
    deleteCell.appendChild(deleteButton);
  });
}

function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}

function clearForm() {
  document.getElementById("studentForm").reset();
}
