var inputone = document.querySelector("#sideone");
var inputtwo = document.querySelector("#sidetwo");

var btn = document.querySelector("#checkbtn");
var output = document.querySelector("#outputbox");

function clickHandler() {
    var ipone = Number(inputone.value);
    var iptwo = Number(inputtwo.value);
  
   
    validator(ipone, iptwo);

}

function validator(ione, itwo) {
    var hypotenuse = Math.sqrt((ione*ione)+(itwo*itwo));
    output.innerText = hypotenuse;
}
btn.addEventListener("click", clickHandler)