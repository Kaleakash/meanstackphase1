var empObj = '{"id":100,"name":"Ravi","salary":120000}';
document.write(empObj);
document.write("<br>id is "+empObj.id)
//convert string to json 
    var empJson = JSON.parse(empObj);
document.write("<br>")
document.write(empJson);
document.write("<br> Id is "+empJson.id)
document.write("<br> Name is "+empJson.name)
document.write("<br> Salary is "+empJson.salary)
//convert json to string 
var empObj1 = JSON.stringify(empJson);
document.write("<br>")
document.write(empObj1);
document.write("<br>id is "+empObj1.id)

//We have to convert json data into string and store in localStorage 
localStorage.setItem("empRef",JSON.stringify(empJson));

document.write("<br>")
//While retrive we have convert back to json from string. 
let obj = JSON.parse(localStorage.getItem("empRef"));
document.write(obj.id);