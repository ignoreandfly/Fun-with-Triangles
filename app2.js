var inputone = document.querySelector("#sideone");
var inputtwo = document.querySelector("#sidetwo");
var inputthree = document.querySelector("#sidethree");
var btn = document.querySelector("#checkbtn");
var output = document.querySelector("#outputbox");

function clickHandler() {
    var ipone = Number(inputone.value);
    var iptwo = Number(inputtwo.value);
    var ipthree = Number(inputthree.value);
   
    validator(ipone, iptwo, ipthree);

}

function validator(ione, itwo, ithree) {
    var semiperimeter = (ione + itwo + ithree) / 2;
    var area = Math.sqrt(semiperimeter * (semiperimeter - ione)*(semiperimeter - itwo)*(semiperimeter - ithree));
    output.innerText = "Area: "+ area
}
btn.addEventListener("click", clickHandler)