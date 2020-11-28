var num=[10,20,30,40,50,60];
document.write("for classical loop<br/>")
for(var i=2;i<4;i=i+2){
    document.write("<br>"+num[i]);
}
document.write("<br/>using for each with arrow<br>")
num.forEach(v=>document.write("<br/>"+v));
document.write("<br/>for in loop<br/>")
for(var i in num){    //it is use to get the index using index you can get the value 
    document.write("<br/>i - index "+i+" Value is "+num[i]);
}
document.write("<br/>Using for of loop");
for(var n of num){  //it is use to retrieve the value one by one
    document.write("<br/> value is "+n);
}
