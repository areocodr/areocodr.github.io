/* var selectedRow = null;
function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow === null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

// Retrieve the data
function readFormData() {
  var formData = {};
  formData["productCode"] = document.getElementById("productCode").value;
  formData["product"] = document.getElementById("product").value;
  formData["qty"] = document.getElementById("qty").value;
  formData["perPrice"] = document.getElementById("perPrice").value;
  return formData;
}

// Insert the data
function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.productCode;
  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.product;
  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.qty;
  var cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.perPrice;
  var cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;
}

// Edit the data
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
  document.getElementById("product").value = selectedRow.cells[1].innerHTML;
  document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
  document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.productCode;
  selectedRow.cells[1].innerHTML = formData.product;
  selectedRow.cells[2].innerHTML = formData.qty;
  selectedRow.cells[3].innerHTML = formData.perPrice;
}

// Delete the data
function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
  }
  resetForm();
}

// Reset the data
function resetForm() {
  document.getElementById("productCode").value = "";
  document.getElementById("product").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("perPrice").value = "";
}

const students = [];

function addStudent() {
  const firstName =
    document.getElementById("firstName").value;
  const surname = document.getElementById("surName").value;
  const course = document.getElementById("course").value;
  const faculty = document.getElementById("faculty").value;
  const gender = document.getElementById("gender").value;
  const address = document.getElementById("address").value;
  const religion = document.getElementById("religion").value;
  const dob = document.getElementById("dob").value;
  const state = document.getElementById("state").value;

  const student = {
    firstName,
    surname
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
    "<tr><th>First Name</th><th>Surname</th><th>Course</th><th>Faculty</th><th>Gender</th><th>Home Address</th><th>Religion</th><th>Date of Birth</th><th>State of Origin</th><th>Action</th></tr>";

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

function generateId() {
  return Maath.floor(Math.random() * 100);
}
 */

let students = [];

function addStudents(student) {
  let table = $("#studentTable tbody");
  table.append(`
   <tr id="${student.id}">
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
          <button class="mb-1 btn btn-sm btn-warning editBtn" data-id="${student.id}">Edit</button>
  
          <button class="mb-1 btn btn-sm btn-danger deleteBtn" data-id="${student.id}">Delete</button>
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
    imagePreview: $("#imagePreview").val(),
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

$("#editForm").submit(function (e) {
  e.preventDefault();

  let studentId = $("#editStudentId").val();
  let studentIndex = students.findIndex((student) => student.id == studentId);
  let student = students[studentIndex];

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
  row.find("td:eq(0)").text(student.firstName);
  row.find("td:eq(1)").text(student.surname);
  row.find("td:eq(2)").text(student.course);
  row.find("td:eq(3)").text(student.faculty);
  row.find("td:eq(4)").text(student.gender);
  row.find("td:eq(5)").text(student.address);
  row.find("td:eq(6)").text(student.religion);
  row.find("td:eq(7)").text(student.dob);
  row.find("td:eq(8)").text(student.state);

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

let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");
let video = document.querySelector("#video");

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    video.srcObject = stream;
    video.play();
  });
}

document.getElementById("snap").addEventListener("click", () => {
  context.drawImage(video, 0, 0, 320, 240);
});
/* 
function captureImageBase64() {
  const canvas = document.getElementById("imageCanvas");
  return canvas.toDataURL("image/png"); // Get base64-encoded image data
} */

/* function captureImage() {
  const video = document.getElementById("webcam");
  const canvas = document.getElementById("imageCanvas");
  const context = canvas.getContext("2d");

  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;

      document.getElementById("snap").addEventListener("click", () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
      }); 
      
      */

// Capture a frame from the video stream
// video.onloadedmetadata = function () {

//   // Stop the video stream
//   stream.getTracks().forEach((track) => track.stop());

//   // Display the captured image
//   const imagePreview = document.getElementById("imageCanvas");
//   imagePreview.style.display = "block";
// };

let imageData = ""; // Variable to store base64-encoded image data

document.getElementById("snap").addEventListener("click", captureImage);
document.getElementById("download").addEventListener("click", downloadImage);

function captureImage() {
  const video = document.getElementById("webcam");
  const canvas = document.getElementById("imageCanvas");
  const context = canvas.getContext("2d");

  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;

      video.onloadedmetadata = function () {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Save base64-encoded image data
        imageData = canvas.toDataURL("image/png");

        // Stop the video stream
        stream.getTracks().forEach((track) => track.stop());
      };
    })
    .catch((error) => {
      console.error("Error accessing webcam:", error);
    });
}

function downloadImage() {
  if (imageData) {
    // Create a link element
    const downloadLink = document.createElement("a");
    downloadLink.href = imageData;
    downloadLink.download = "captured_image.png";
    downloadLink.click();
  } else {
    alert("No image captured yet.");
  }
}
