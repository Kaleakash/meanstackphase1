function onFormSubmit(){
    var formData = readFormData();
    insertNewRecord(formData);
     resetForm();
}
//read the data 
function readFormData() {
    var formData = {}       //empty object  , creating object using literal 
    formData.name = document.getElementById("name").value;  //set name property to formData object 
    formData.age = document.getElementById("age").value;        //set age property to formData object 
    return formData;                                            //return this object. 
}
//Insert new records. 
function insertNewRecord(data) {
var table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
var newRow = table.insertRow(table.length); //create row 
var cell1 = newRow.insertCell(0);           //create cell 
cell1.innerHTML = data.name                    //add the value in cell 
var cell2 = newRow.insertCell(1);           //create cell 
cell2.innerHTML = data.age                     //add the value in cell 
var cell3 = newRow.insertCell(2);           //create cell 
cell3.innerHTML = "<a href='#' onClick='onDelete(this)'>Delete</a>"   //this is current object of that rec                 
}
//Delete Records 
function onDelete(obj){
    //console.log(obj);
var row = obj.parentElement.parentElement;  //obj.parentElement is td obj.parentElement.parentElement is tr
    //console.log(row);
    document.getElementById("employeeList").deleteRow(row.rowIndex);
}
//reset Data 
function resetForm() {
    document.getElementById("name").value="";
    document.getElementById("age").value="";
}
