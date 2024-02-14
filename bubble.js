var timer = 60;
var score1 = -10;
var hitrn = 0;


function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 100; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div id="bubble">${rn}</div>`;
  }

  document.querySelector("#p-btm").innerHTML = clutter;
}

function runTimer() {
  var timers = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timers);
      document.querySelector("#p-btm").innerHTML = `<h2 class="high">Your Final Score is ${score1}</h2>`;
    }
  }, 1000);
}

function newhit(){
    
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#newhit").textContent = hitrn;
    
}

function score(){
    score1 += 10;
    document.querySelector("#scoreval").textContent = score1;
}

document.querySelector("#p-btm").addEventListener("click",function(dets){
  var clickednumber = Number(dets.target.textContent);
  if(clickednumber === hitrn){
    score();
    makeBubble();
    newhit();

  }
});



makeBubble();
runTimer();
newhit();
score();