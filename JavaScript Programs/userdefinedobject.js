document.write("Welcome to External JavaScript File<br/>")
function Person(id,name){
    this.id = id;
    this.name = name;
}
let p1 = new Person(100,"Ravi");
document.write("<br/>id is "+p1.id);
document.write("<br/>name is "+p1.name);
delete p1.name;
document.write("<br/>After delete name property from person")
document.write("<br/>name is "+p1.name);

/*
function Employee(id,name,age) {    // parameterized object 
    this.id = id;
    this.name = name;
    this.age = age;
    this.setAge= function(age){
        this.age = age;
    }
    this.display = function() {
        document.write("<br/>id is "+this.id)
        document.write("<br> name is "+this.name)
        document.write("<br> age is "+this.age);
    }
}
var emp1 = new Employee(100,"Ravi",21);
    emp1.display();
var emp2 = new Employee(101,"Seeta",34);
emp2.display();
emp1.setAge(24);
emp1.display();
//Employee.prototype.desg="Tester";     // add any property to object dynamic property      
emp1.desg="Tester";             //only for emp1 object not for emp2 object 
document.write("<br>1st Employee Designataion "+emp1.desg);
document.write("<br>2nd Employee Designataion "+emp2.desg);
emp2.desg="Programmer"; 
document.write("<br>1st Employee Designataion "+emp1.desg);
document.write("<br>2nd Employee Designataion "+emp2.desg);
document.write("<br> Age is "+emp1.age);
delete emp1.age;                    // remove age property from emp1 object 
document.write("<br> Age is "+emp1.age);

// Creating user-defined object 
/* common property for all objects. 
function Employee() {           // we have to follow naming rules 
        this.id = 100;          //this is keyword which help to declare object property
        this.name = "Ravi";     //state 
        this.age = 24;
        this.salary = 24000;
        this.display = function() {     //behaviour 
            document.write("<br/>id is "+this.id)
            document.write("<br> name is "+this.name)
            document.write("<br> age is "+this.age);
            document.write("<br> salary is "+this.salary)
        }
}

var emp1 = new Employee();      //like Array or String or Date
document.write("Id is "+emp1.id);       //access property through object emp1

emp1.display();

var emp2 = new Employee();      //like Array or String or Date
document.write("<br/>Id is "+emp2.id);       //access property through object emp1

emp2.display();
//var obj = new Array();
//obj.push(10);
*/
