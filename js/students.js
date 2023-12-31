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

$(document).ready(function () {
  // Retrieve form data from localStorage
  let formData = JSON.parse(localStorage.getItem("formData"));

  if (formData) {
    // Display data in the table
    let tableRow = `<tr>
    <td>${formData.id}</td>
    <td>${formData.surname}</td>
    <td>${formData.course}</td>
    <td>${formData.faculty}</td>
    <td>${formData.gender}</td>
    <td>${formData.address}</td>
    <td>${formData.religion}</td>
    <td>${formData.dob}</td>
    <td>${formData.state}</td>
    <td>${formData.imagePreview}</td>
    <td>
      <button class="mb-1 btn btn-sm btn-warning editBtn" data-id="${
        formData.id
      }">Edit</button>
      <button class="mb-1 btn btn-sm btn-danger deleteBtn" data-id="${
        formData.id
      }">Delete</button>
      <button class="mb-1 btn btn-sm btn-secondary toggleBlacklistBtn" data-id="${
        student.id
      }">${student.isBlacklisted ? "Unblacklist" : "Blacklist"}</button>
    </td></tr>`;
    $("#dataTable tbody").append(tableRow);
  }
});

function populateStateOptions() {
  const states = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

  const stateSelect = $("#filterState");
  states.forEach((state) => {
    stateSelect.append(`<option value="${state}">${state}</option>`);
  });
}

$(document).ready(function () {
  populateStateOptions();
});

function searchStudents() {
  let searchInput = $("#searchInput").val().toLowerCase();
  let filterGender = $("#filterGender").val().toLowerCase();
  let filterState = $("#filterState").val().toLowerCase();
  let filterFaculty = $("#filterFaculty").val().toLowerCase();
  let filterCourse = $("#filterCourse").val().toLowerCase();

  let filteredStudents = students.filter((student) => {
    let fullName = `${student.firstName} ${student.surname}`.toLowerCase();
    let gender = student.gender.toLowerCase();
    let state = student.state.toLowerCase();
    let faculty = student.faculty.toLowerCase();
    let course = student.course.toLowerCase();

    return (
      fullName.includes(searchInput) &&
      (filterGender === "" || gender === filterGender) &&
      (filterState === "" || state === filterState) &&
      (filterFaculty === "" || faculty.includes(filterFaculty)) &&
      (filterCourse === "" || course.includes(filterCourse))
    );
  });

  displayStudents(filteredStudents);
}

let students = [];

function addStudents(student) {
  let table = $("#dataTable tbody");
  table.append(`
   <tr id="${student.id}" class="${student.isBlacklisted ? "blacklisted" : ""}">
        <td>${student.id}</td>
        <td>${student.firstName}</td>
        <td>${student.surname}</td>
        <td>${student.course}</td>
        <td>${student.faculty}</td>
        <td>${student.gender}</td>
        <td>${student.address}</td>
        <td>${student.religion}</td>
        <td>${student.dob}</td>
        <td>${student.state}</td>
        <td>${student.imagePreview}</td>
        <td>
          <button class="mb-1 btn btn-sm btn-warning editBtn" data-id="${
            student.id
          }">Edit</button>
  
          <button class="mb-1 btn btn-sm btn-danger deleteBtn" data-id="${
            student.id
          }">Delete</button>
        </td>
   </tr>`);
}

function clearForm() {
  $("#firstName").val("");
  $("#surname").val("");
  $("#course").val("");
  $("#faculty").val("");
  $("#gender").val("");
  $("#address").val("");
  $("#religion").val("");
  $("#dob").val("");
  $("#state").val("");
  $("#imagePreview").val("");
}

function generateId() {
  return Math.floor(Math.random() * 100000);
}

$(document).on("click", "#clearBtn", function () {
  clearForm();
});

$("#studentForm").submit(function (e) {
  e.preventDefault();

  let student = {
    id: generateId(),
    firstName: $("#firstName").val(),
    surname: $("#surname").val(),
    course: $("#course").val(),
    faculty: $("#faculty").val(),
    gender: $("#gender").val(),
    address: $("#address").val(),
    religion: $("#religion").val(),
    state: $("#state").val(),
    dob: $("#dob").val(),
  };

  // Validate date of birth
  if (isFutureDate(student.dob)) {
    alert("Date of birth cannot be a future date.");
    return;
  }

  students.push(student);
  addStudents(student);

  clearForm();
});

function isFutureDate(dateString) {
  const currentDate = new Date();
  const inputDate = new Date(dateString);

  return inputDate > currentDate;
}

$(document).on("click", ".toggleBlacklistBtn", function () {
  let studentId = $(this).data("id");
  let studentIndex = students.findIndex((student) => student.id == studentId);
  let student = students[studentIndex];

  student.isBlacklisted = !student.isBlacklisted;
  $("#studentTable")
    .find(`[data-id="${studentId}"]`)
    .toggleClass("blacklisted", student.isBlacklisted);
});

$("#editForm").submit(function (e) {
  e.preventDefault();

  let studentId = $("#editStudentId").val();
  let studentIndex = students.findIndex((student) => student.id == studentId);
  let student = students[studentIndex];

  student.id = $("#editStudentId").val();
  student.firstName = $("#editfirstName").val();
  (student.surname = $("#editsurname").val()),
    (student.course = $("#editcourse").val()),
    (student.faculty = $("#editfaculty").val()),
    (student.gender = $("#editgender").val()),
    (student.address = $("#editaddress").val()),
    (student.religion = $("#editreligion").val()),
    (student.state = $("#editstate").val()),
    (student.dob = $("#editdob").val());

  let row = $(`#${student.id}`);
  row.find("td:eq(0)").text(student.id);
  row.find("td:eq(1)").text(student.firstName);
  row.find("td:eq(2)").text(student.surname);
  row.find("td:eq(3)").text(student.course);
  row.find("td:eq(4)").text(student.faculty);
  row.find("td:eq(5)").text(student.gender);
  row.find("td:eq(6)").text(student.address);
  row.find("td:eq(7)").text(student.religion);
  row.find("td:eq(8)").text(student.dob);
  row.find("td:eq(9)").text(student.state);

  $("#editModal").modal("hide");
});

$(document).on("click", ".editBtn", function () {
  let studentId = $(this).data("id");

  let studentIndex = students.findIndex((student) => student.id == studentId);

  let student = students[studentIndex];

  $("#editfirstName").val(student.firstName);
  $("#editsurname").val(student.surname);
  $("#editcourse").val(student.course);
  $("#editfaculty").val(student.faculty);
  $("#editgender").val(student.gender);
  $("#editaddress").val(student.address);
  $("#editreligion").val(student.religion);
  $("#editstate").val(student.state);
  $("#editdob").val(student.dob);
  $("#editStudentId").val(student.id);

  $("#editModal").modal("show");
});

$(document).on("click", ".deleteBtn", function () {
  let studentId = $(this).data("id");

  let studentIndex = students.findIndex((student) => student.id == studentId);

  $("#studentTable").find(`[data-id="${studentId}"]`).closest("tr").remove();

  students.splice(studentIndex, 1);

  $("#editModal").modal("hide");
});

// LOGOUT
document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");

  document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.location.href = "index.html";
});
