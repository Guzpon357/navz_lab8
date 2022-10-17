var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["Codigo"] = document.getElementById("Codigo").value;
    formData["Nombre"] = document.getElementById("Nombre").value;
    formData["Precio"] = document.getElementById("Precio").value;
    formData["Stock"] = document.getElementById("Stock").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.Codigo;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.Nombre;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.Precio;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.stock;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Codigo").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Nombre").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Precio").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Stock").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Codigo;
    selectedRow.cells[1].innerHTML = formData.Nombre;
    selectedRow.cells[2].innerHTML = formData.Precio;
    selectedRow.cells[3].innerHTML = formData.Stock;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("Codigo").value = '';
    document.getElementById("Nombre").value = '';
    document.getElementById("Precio").value = '';
    document.getElementById("Stock").value = '';
    selectedRow = null;
}