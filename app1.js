var inputone = document.querySelector("#angleone");
var inputtwo = document.querySelector("#angletwo");
var inputthree = document.querySelector("#anglethree");
var btn = document.querySelector("#checkbtn");
var output = document.querySelector("#outputbox");
function clickHandler(){
var ipone = Number(inputone.value);
var iptwo= Number(inputtwo.value);
var ipthree= Number(inputthree.value);
if (ipone <=0 || iptwo<=0 || ipthree<=0){
    output.innerText="Angles can't be negative/zero"}
    else {
 validator(ipone,iptwo,ipthree);}

}

function validator(ione,itwo,ithree){
    if (ione + itwo + ithree === 180) {
    output.innerText = "It is a trianngle"}
else { 
    output.innerText = "It is not a trianngle"
}
}
btn.addEventListener("click", clickHandler)