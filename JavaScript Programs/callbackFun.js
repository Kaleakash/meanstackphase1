function fullName(firstName,lastName,callback){
    document.write("My Name is "+firstName+" , "+lastName)
    callback(firstName);        //greeting("Ravi")
}

function greeting(fn){              //Normal function 
    document.write(" Welcome, "+fn);
}

var hello = function(fn){              // function expression  style 
    document.write("Welcome to JS Training "+fn)
}
fullName("Ravi","Kumar",greeting);
document.write("<br/>");
fullName("Seeta","Kumari",hello);

/*function display(callback){     //callback function 
    return callback;
}

/*function add(a,b){
    return a+b;
}

var result1 = display(add(1,2)); //passing function itself as a parameter to another function 
document.write(result1);
*/
/*var result2 = display(function(a,b){
    return a+b;
})
document.write("<br/>")
document.write(result2(10,20));*/