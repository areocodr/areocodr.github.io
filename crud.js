/* var selectedRow = null;
function onFormSubmit(e){
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow === null) {
    insertNewRecord(formData);
  }
  else {
    updateRecord(formData);
  }
  resetForm();
}

// Retrieve the data
function readFormData(){
  var formData = {};
  formData["productCode"] = document.getElementById("productCode").value;
  formData["product"] = document.getElementById("product").value;
  formData["qty"] = document.getElementById("qty").value;
  formData["perPrice"] = document.getElementById("perPrice").value;
  return formData;
}

// Insert the data
function insertNewRecord(data) {
  var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
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
      cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

// Edit the data
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById('productCode').value = selectedRow.cells[0].innerHTML;
  document.getElementById('product').value = selectedRow.cells[1].innerHTML;
  document.getElementById('qty').value = selectedRow.cells[2].innerHTML;
  document.getElementById('perPrice').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.productCode;
  selectedRow.cells[1].innerHTML = formData.product;
  selectedRow.cells[2].innerHTML = formData.qty;
  selectedRow.cells[3].innerHTML = formData.perPrice;
}

// Delete the data
function onDelete(td) {
  if(confirm('Do you want to delete this record?')) {
    row = td.parentElement.parentElement;
    document.getElementById('storeList').deleteRow(row.rowIndex);
  }
  resetForm();
}

// Reset the data
function resetForm() {
  document.getElementById("productCode").value = '';
  document.getElementById("product").value = '';
  document.getElementById("qty").value = '';
  document.getElementById("perPrice").value = '';
} */

const students = [];

function addStudent() {
  const name =
    document.getElementById("firstName").value +
    " " +
    document.getElementById("otherNames").value +
    " " +
    document.getElementById("surName").value;
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

function generateId() {
  return Maath.floor(Math.random() * 100);
}
