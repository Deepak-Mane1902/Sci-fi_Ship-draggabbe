Draggable.create("#dragme",{
    type:'X',
    bounds:".container"
})

function colo(){
    document.getElementById("dragme").style.background = "rgba(255, 102, 0, 0.326)";
    document.getElementsByClassName("dragme-child").style.border="2px solid red";
}
function colo1(){
    document.getElementById("dragme").style.background = "";
}

function checkOverlap(){
    var div1 = document.querySelector("#cir")
    var div2 = document.querySelector("#dragme")
    var rect1 = div1.getBoundingClientRect();
    var rect2 = div2.getBoundingClientRect();
    if(rect1.left < rect2.right){
        document.querySelector("#on").style.opacity=1;
        document.querySelector("#cir").style.opacity=0;
        colo()

  }
    else{
        document.querySelector("#on").style.opacity=0;
        document.querySelector("#cir").style.opacity=1;
        return colo1()
  }
}

window.addEventListener("mousemove",checkOverlap)
