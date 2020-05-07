/*var structure [D, AL, A, H, S, ZZ, TA, TB]*/
var d20 = [8, 15.5, 18, 35, 69, 106, 11, 11];
/*var structure [MM, P, TC]*/
var thread20 = ["M8x1.25", '1/8"', "M5x0.8"];
var d25 = [10, 19.5, 22, 40, 69, 111, 11, 11];
var thread25 = ["M10x1.25", '1/8"', "M6x0.75"];
var d32 = [12, 19.5, 22, 40, 71, 113, 11, 10];
var thread32 = ["M10x1.25", '1/8"', "M8x1.0"];
var d40 = [16, 27, 30, 50, 78, 130, 12, 10];
var thread40 = ["M14x1.5", '1/8"', "M10x1.25"]; 
var d50 = [20, 32, 35, 58, 90, 150, 13, 12];
var thread50 = ["M18x1.5", '1/4"', "M12x1.25"];

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
  if (input === "25"){
    for(i = 0; i < limit; i++){
      document.getElementsByClassName("smc")[i].value = d25[i];
    }
    for(i = 0; i < 3; i++) {
      document.getElementsByClassName("smcThread")[i].value = thread25[i];
    }
  }
  if (input === "32"){
    for(i = 0; i < limit; i++){
      document.getElementsByClassName("smc")[i].value = d32[i];
    }
    for(i = 0; i < 3; i++) {
      document.getElementsByClassName("smcThread")[i].value = thread32[i];
    }
  }
  if (input === "40"){
    for(i = 0; i < limit; i++){
      document.getElementsByClassName("smc")[i].value = d40[i];
    }
    for(i = 0; i < 3; i++) {
      document.getElementsByClassName("smcThread")[i].value = thread40[i];
    }
  }
  if (input === "50"){
    for(i = 0; i < limit; i++){
      document.getElementsByClassName("smc")[i].value = d50[i];
    }
    for(i = 0; i < 3; i++) {
      document.getElementsByClassName("smcThread")[i].value = thread50[i];
    }
  }
}