var age = eval(prompt("what is ur age"));
var eligible=(age>=18);
var uneligible=(age<=18);
if (eligible) {
        var ok= window.confirm("do you want to vote")
        if (ok) {
            document.write("you can vote")
        }else document.write("you dont to continue")
}else if (uneligible) {
    document.write("you can not  vote")
}