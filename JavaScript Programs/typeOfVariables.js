//Using var global scope 
/*function sayHello(name){
    if(name=="Ravi"){
        var msg = "Welcome user "+name; // declare the varible inside if block 
    }else {
        msg = "Welcome Unknown user";       // false block 
    }
    return msg;                         //outside block 
}

document.write(sayHello("Raju"));
*/

//let keywords 
/*
function sayHello(name){
    if(name=="Ravi"){
        let msg = "Welcome user "+name; // declare the varible inside if block 
    }else {
       let msg = "Welcome Unknown user";       // false block by default var
    }
    return msg;                         //outside block 
}

document.write(sayHello("Ramesh"));*/

/*
for(var i=0;i<100000;i++){

}

document.write("Value of i is "+i);



for(let j=0;j<100000;j++){

}

document.write("Value of j is "+j);

*/

//With var keyword we can re-declare the same variable with different type of 
//values. 
/*
var a = 10;                 //in C      int a=10; 
var a = "Ravi";   //re-declare           //            a=20;     re-assinging 

let b =20;
let b = "Ravi";         //Error in this line. 
*/
/*
var a=10;
a=20;
let b=30;
b=40;
const c=50;
c=60;               // we can't assign different values. 
*/



















































