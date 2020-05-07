/*var structure []*/
var d20 = [8, 15.5, 18, 35, 69, 106, 11, 11];
var thread20 = ["M8x1.25", '1/8"', "M5x0.8"]
var limit = document.getElementsByClassName("smc").length;

function autoFill(){
  var input = document.getElementById("bore").value;
  if (input === "20"){
    for(i = 0; i < limit; i++){
      document.getElementsByClassName("smc")[i].value = d20[i];
    }
    for(i = 0; i < 3; i++) {
      document.getElementsByClassName("smcThread")[i].value = thread20[i];
    }
  }
}