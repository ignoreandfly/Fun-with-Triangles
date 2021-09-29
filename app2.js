var inputone = document.querySelector("#sideone");
var inputtwo = document.querySelector("#sidetwo");
var inputthree = document.querySelector("#sidethree");
var btn = document.querySelector("#checkbtn");
var output = document.querySelector("#outputbox");

function clickHandler() {

    var ipone = Number(inputone.value);
    var iptwo = Number(inputtwo.value);
    var ipthree = Number(inputthree.value);
    if (ipone <0 || iptwo<0 || ipthree<0){
        output.innerText="Please enter valid values"
    }
   else {
    validator(ipone, iptwo, ipthree);
   }
}

function validator(ione, itwo, ithree) {
    if (ione + itwo <= ithree || ione + ithree <= itwo || itwo + ithree <= ione)
    output.innerText = "These values do not form a triangle"
else{
   var semiperimeter = (ione + itwo + ithree) / 2;
    var area = Math.sqrt(semiperimeter * (semiperimeter - ione)*(semiperimeter - itwo)*(semiperimeter - ithree));
    output.innerText = "Area: "+ area}
}
btn.addEventListener("click", clickHandler)