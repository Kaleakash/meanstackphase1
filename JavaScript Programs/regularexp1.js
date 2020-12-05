/*let r1 = /welcome/  // simple pattern in literal style 
document.write(r1.test("welcome"));
document.write("<br/>");
document.write(r1.test("hello"));
*/

/*let r1 = new RegExp("welcome");
document.write(r1.test("welcome"));
document.write("<br/>");
document.write(r1.test("hello"));*/

// by default pattern are case sensitive i flag ignore case 
/*let r1 = new RegExp("welcome","i");
document.write(r1.test("welcome"));
document.write("<br/>");
document.write(r1.test("Welcome"));
document.write("<br/>");
document.write(r1.test("Hello"));
document.write("<br/>");
document.write(r1.test("Hi Students, Welcome to MEAN Stack Training"));
*/
//start with specific character or word
/*let r1 = new RegExp("^Hi","i");
document.write("<br/>");
document.write(r1.test("Hi, I am Akash"))
document.write("<br/>");
document.write(r1.test("hi Student")) 
document.write("<br/>");
document.write(r1.test("I am  Akash, Hi Student"))
*/

//end with specific character or word
/*let r1 = new RegExp("Kam$","i");
document.write("<br/>");
document.write(r1.test("Hello Kam"))
document.write("<br/>");
document.write(r1.test("Hello Kam, yannick")) 
document.write("<br/>");
document.write(r1.test("Hello Mansoor, Kam"))
document.write("<br/>");
document.write(r1.test("Kam"))
*/


//Start with some character, end with some character and between one or more or zero
//* zero, 1 or many and . anything 
/*let r1 = new RegExp("^Hi.*Akash$");
document.write(r1.test("Hi, This is Akash"));
document.write("<br/>")
document.write(r1.test("Hi Akash"));
document.write("<br/>")
document.write(r1.test("HiAkash"));
document.write("<br/>")
document.write(r1.test("Hi, How r you Akash Kale"));
*/

//Range [abc] start with a or b or c 
//let r1 = new RegExp("[abc]"); start with a or b or c 
//let r1 = new RegExp("[a-c]"); start with a or b or c 
//let r1 = new RegExp("[a-z]")       //start with a to z 
/*let r1 = new RegExp("[a-z,0-9,A-Z]")       //start with a to z and 0 to 9 
document.write(r1.test("a"))
document.write("<br/>")
document.write(r1.test("b"))
document.write("<br/>")
document.write(r1.test("m"))
document.write("<br/>")
document.write(r1.test("z"))
document.write("<br/>")
document.write(r1.test("1"))
document.write("<br/>")
document.write(r1.test("A"))
document.write("<br/>")
*/

/*
\d  --> any digits : 0 - 9 
\D --> any Alphabets  a-z 
\w ---> Alphabets with underscore 
\W --> non alphanumerical character means except a-z and 0-9 
\s --> any whitespace, space, tab, newline. 

*/
//let r1 = /\d/
/*let r1 = new RegExp("\\d");
document.write(r1.test("1"));
document.write("<br/>")
document.write(r1.test("12"));
document.write("<br/>")
document.write(r1.test("a"));
document.write("<br/>")
document.write(r1.test("a1"));
document.write("<br/>")
*/
//+ one or more 
//let r1 = new RegExp("\\d+");
//* zero or more 
//let r1 = new RegExp("\\d*");
//? zero or 1 
/*let r1 = new RegExp("\\d?\\D")
document.write(r1.test("1"));
document.write("<br/>")
document.write(r1.test("1a"));
document.write("<br/>")
document.write(r1.test("a1"));
document.write("<br/>")
document.write(r1.test("a"));
document.write("<br/>")
*/
//let r1 = new RegExp("\\d")      // start with any digits then more any character 
/*let r1 = new RegExp("\\d{10}$")
document.write(r1.test("9123456789"));
document.write("<br/>")
document.write(r1.test("1111"));
document.write("<br/>")
document.write(r1.test("123"));
document.write("<br/>")
*/
//Valid email validation 
//one or more character & one or more character .com 
// let r1 = new RegExp("[com|in|uk]$")  end with com or in or uk  
/*let r1 = new RegExp("^[a-z,A-Z]+@[a-z,A-Z]+.com$")
document.write(r1.test("abc@xyz.com"))
document.write("<br/>")
document.write(r1.test("@xyz.com"))
document.write("<br/>")
document.write(r1.test("abc@xyz.in"))
document.write("<br/>")
document.write(r1.test("a@x.com"))
*/
let r1 = new RegExp("\\d{3}@\\D{4}");
document.write(r1.test("122@abcd"))
document.write("<br/>")
document.write(r1.test("567@xyza"))
document.write("<br/>")
document.write(r1.test("56@xyza"))
document.write("<br/>")


/*
<input type="password" name="pass" pattern="\\d{3}@\\D{4}"/>
*/





