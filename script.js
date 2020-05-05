var button = document.getElementById("enter");
button.addEventListener("click", function(){
    var count = document.getElementsByClassName("cyl1").length;
    var tolerate = document.getElementById("tolerancia").value;

    for(i = 0; i < count; i++){
        var measure1 = document.getElementsByClassName("cyl1")[i].value;
        var measure2 = document.getElementsByClassName("cyl2")[i].value;
        var difference = measure1 - measure2;
        var marker1 = document.getElementsByClassName("marker1")[i];
        var marker2 = document.getElementsByClassName("marker2")[i];

        if(difference < 0){
            difference = difference * -1;
        }

        if(difference === 0){
            marker1.classList.remove("blue");
            marker1.classList.remove("red");
            marker1.classList.remove("yellow");
            marker1.classList.add("green");
            marker2.classList.remove("blue");
            marker2.classList.remove("red");
            marker2.classList.remove("yellow");
            marker2.classList.add("green");
        }else if(difference <= tolerate){
            marker1.classList.remove("blue");
            marker1.classList.remove("green");
            marker1.classList.remove("red");
            marker1.classList.add("yellow");
            marker2.classList.remove("blue");
            marker2.classList.remove("green");
            marker2.classList.remove("red");
            marker2.classList.add("yellow");
        }else  if(difference > tolerate){
            marker1.classList.remove("blue");
            marker1.classList.remove("yellow");
            marker1.classList.remove("green");
            marker1.classList.add("red");
            marker2.classList.remove("blue");
            marker2.classList.remove("yellow");
            marker2.classList.remove("green");
            marker2.classList.add("red");
        }
    }
});