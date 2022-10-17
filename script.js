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
    formData["productoCodigo"] = document.getElementById("productoCodigo").value;
    formData["productoNombre"] = document.getElementById("productoNombre").value;
    formData["productoCantidad"] = document.getElementById("productoCantidad").value;
    formData["productoPrecio"] = document.getElementById("productoPrecio").value;
    formData["productoStock"] = document.getElementById("productoStock").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.productoCodigo;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.productoNombre;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.productoCantidad;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.productoPrecio;
    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.productoStock;
    cell6 = newRow.insertCell(5);
        cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productoCodigo").value = selectedRow.cells[0].innerHTML;
    document.getElementById("productoNombre").value = selectedRow.cells[1].innerHTML;
    document.getElementById("productoCantidad").value = selectedRow.cells[2].innerHTML;
    document.getElementById("productoPrecio").value = selectedRow.cells[3].innerHTML;
    document.getElementById("productoStock").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productoCodigo;
    selectedRow.cells[1].innerHTML = formData.productoNombre;
    selectedRow.cells[2].innerHTML = formData.productoCantidad;
    selectedRow.cells[3].innerHTML = formData.productoPrecio;
    selectedRow.cells[4].innerHTML = formData.productoStock;
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
    document.getElementById("productoCodigo").value = '';
    document.getElementById("productoNombre").value = '';
    document.getElementById("productoCantidad").value = '';
    document.getElementById("productoPrecio").value = '';
    document.getElementById("productoStock").value = '';
    selectedRow = null;
}