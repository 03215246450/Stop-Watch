// Stop Watch======================
// Stop Watch======================
// Stop Watch======================
// Stop Watch======================


var hour = 0
var min= 0
var sec = 0
var timer = false


function start(){
  document.getElementById("start").disabled = true;  
  document.getElementById("stop").disabled = false; 
    timer = true
    stopWatch()
}

function stop(){ 
  document.getElementById("stop").disabled = true;    
    document.getElementById("start").disabled = false;
    timer = false
}

function reset(){   
  timer = false
  sec = 0; min = 0; hour = 0;
  document.getElementById("seconds").innerHTML = "00"
  document.getElementById("minutes").innerHTML = "00"
  document.getElementById("hour").innerHTML = "00"
}

function stopWatch(){
    if(timer == true){
        sec = sec+1
        if(sec == 60){
            min = min+1
            sec = 0
        }
       if(min == 60){
        hour = hour+1
        min = 0
       }
        setTimeout("stopWatch()", 1000)
        document.getElementById("seconds").innerHTML = sec 
        document.getElementById("minutes").innerHTML = min 
        document.getElementById("hour").innerHTML = hour
    }
}






