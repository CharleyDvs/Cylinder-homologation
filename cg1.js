var d20 = [20, 8, 18, 35, 69, 106, 11, 11];
var input = document.getElementById("bore");

function CG1measure(){
  for (i=1; 1<7; i++){
    document.getElementsByClassName("cg1")[i].value = ;
  }
}

var cyl1d = document.getElementById("bore").value;

input.addEventListener("keypress", function(event){
  if (cyl1d === 20 && event.keyCode === 13) {
    CG1measure();
  }
});