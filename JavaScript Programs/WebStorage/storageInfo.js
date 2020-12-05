//var count1=0;
//var count2=0
function local() {
  //  count1++;
//localStorage.setItem("obj1",count1);
    var obj1 = localStorage.getItem("obj1")
    document.getElementById("a1").innerHTML=obj1;
}

function session() {
//    count2++;
  //  sessionStorage.setItem("obj2",count2);
    var obj2 = sessionStorage.getItem("obj2")
    document.getElementById("a2").innerHTML=obj2;
}