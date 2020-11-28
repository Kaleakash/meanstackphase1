/*function info(fname) {                   //normal Function 
    document.write("info function, Welcome "+fname)
}

info("Ravi");

// Function expression style 

var abc = function(fname){
                document.write("Welcome "+fname);
            }
//sayHello("Ramesh");
abc("Ramesh");
*/
//Normal function  
/*function addNumber(a,b){
    var sum = a+b;
    return sum;
}
var result1 = addNumber(10,20);
document.write(result1)
//Arrow function : ES6 Features Arrow function is konwn anonymous function
document.write("<br/>")
var add = (a,b)=>a+b;
document.write(add(1,2));

var sqrt = (a)=>a*a;
document.write("<br>"+sqrt(3));
document.write("<br>"+sqrt(4));
document.write("<br>"+sqrt(5));

var largestNum = (a,b)=> {
                if(a>b){
                    return "1st is largest";
                }else {
                    return "2nd is largest";
                }
}
var a = eval(prompt("Enter the value of a"))
var b = eval(prompt("Enter the value of b"))
document.write("<br/>"+largestNum(a,b));
document.write("<br/>"+largestNum(100,20));
document.write("<br/>")
var para = (a, b) => {
    document.write("My marks"+a);
    document.write("<br>your marks"+b);
}
para(100,200);
*/
/*var num=[10,20,30,40,50];       //Array as literal 
document.write("Using for loop<br/>")
for(var i=0;i<num.length;i++){
    document.write("<br> "+num[i])
}
document.write("<br/>Using callback function<br/>");
num.forEach(display);   //forEach is predefind function part of array 
                        // which takes callback function as a parameter which 
                        //help to display the elements from array one by one 
                        //without loop 
function display(val1) {
    document.write("<br/>Value is "+val1);
}
document.write("<br/>Using callback function as anonymous function<br/>");
num.forEach(function(val2,index){
    document.write("<br>Value "+val2+"Index "+index);
})

document.write("<br/> Using Callback with arrow function <br/>");
num.forEach(n=>document.write("<br>Value is "+n));
document.write("<br/>Added number of each array element <br/>")
var numDetails=[];
num.forEach(val=>numDetails.push(val+10));
*/

//ES6 Features of Function Rest Operater and Spread Operators 
//4th parameter tech: 0, 1, more than 1 
/*function empDetails(id,name,salary,...tech){    //...tech is one type of rest operator receive,0, 1 or many 
    document.write("<br/> id is "+id);
    document.write("<br/> name is "+name);
    document.write("<br/> salary is "+salary);
    document.write("<br/> tech is "+tech);
    document.write("<br> Number of technolgies "+tech.length);
}

empDetails(1,"Ravi",12000);         //zero tech 
empDetails(2,"Ramesh",14000,"C");   //1 tech
empDetails(3,"Ramu",18000,"C","C++");   //2 tech 
empDetails(4,"Rajesh",24000,"HTML","CSS","JavaScript","Angular","ReactJS"); //more than one 
//We can use only one rest parameter or operater inside function it must be last parameter. 
var technologies=["C","C++","Java","net","Python"]
empDetails(5,"Ajay",45000,technologies);
empDetails(6,"Dinesh",42000,...technologies);   // spread operator or parameter 
//Spread operator is use to pass the value to rest parameter as a more than one value using array. 
//Spread calling function, Rest parameter of function. 
*/
 // Default parameter ES6 Features 
/*
 function employeeDetails(id=0,name="Unknown",salary=8000) {
        document.write("<br/>id is "+id);
        document.write("<br/>name is "+name);
        document.write("<br/>salary is "+salary);
 }  

 employeeDetails();
 employeeDetails(100);
 employeeDetails(101,"Ravi");
 employeeDetails(102,"Ramesh",18000)

*/






