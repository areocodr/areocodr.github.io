/* function updateReviewModal() {
  const firstName = $("#firstName").val();
  const surname = $("#surname").val();
  const course = $("#course").val();
  const faculty = $("#faculty").val();
  const gender = $("#gender").val();
  const address = $("#address").val();
  const religion = $("#religion").val();
  const state = $("#state").val();
  const dob = $("#dob").val();

  const reviewContent = `
  <p><strong>First Name:</strong> ${firstName}</p>
  <p><strong>Surname:</strong> ${surname}</p>
  <p><strong>Course:</strong> ${course}</p>
  <p><strong>Faculty:</strong> ${faculty}</p>
  <p><strong>Gender:</strong> ${gender}</p>
  <p><strong>Address:</strong> ${address}</p>
  <p><strong>Religion:</strong> ${religion}</p>
  <p><strong>State:</strong> ${state}</p>
  <p><strong>Date of Birth:</strong> ${dob}</p>
  `;

  $("#reviewModalBody").html(reviewContent);
}

$("#addBtn").click(function () {
  updateReviewModal();
});

$("#confirmBtn").click(function () {
  $("#studentForm").submit();
});

$("#clearBtn").click(function () {
  clearForm();
});
 */
/* 
$(document).ready(function () {
  $("#addBtn").on("click", function () {
    let formData = {
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

    let storedForms = JSON.parse(localStorage.getItem("formData")) || [];
    storedForms.push(formData);

    localStorage.setItem("formData", JSON.stringify(storedForms));
  });
});
 */
let students = [];

function addStudents(student) {
  let table = $("#studentTable tbody");
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
        <td>
          <button class="mb-1 btn btn-sm btn-warning editBtn" data-id="${
            student.id
          }">Edit</button>
          <button class="mb-1 btn btn-sm btn-danger deleteBtn" data-id="${
            student.id
          }">Delete</button>
          <button class="mb-1 btn btn-sm btn-secondary toggleBlacklistBtn" data-id="${
            student.id
          }">${student.isBlacklisted ? "Unblacklist" : "Blacklist"}</button>
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

  // Check if student with same ID exists
  if (students.some((s) => s.id === student.id)) {
    alert("Student with the same ID already exists.");
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

$("#clearForm")
  .$("#editForm")
  .submit(function (e) {
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
