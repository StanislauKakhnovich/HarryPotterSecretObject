let ctxFinalAnimation = document.getElementById("layer-animation-level").getContext("2d");
let xMonster = 0;
let rotateMouthMonster = Math.PI/7

let monster = {
    x: {
        'ru': -85,
        'en': -98
    },
    text: {
        'ru': 'СБОРЩИК МУСОРА',
        'en': 'GARBAGE COLLECTOR'
    }
}

let xText = monster.x[languageRender];
let stringText = monster.text[languageRender];


function drawFinalAnimation() {
  let id = setInterval (() => {
    ctxFinalAnimation.clearRect(0,0, 600, 600);
    ctxFinalAnimation.beginPath();
    ctxFinalAnimation.fillStyle = 'black';
    ctxFinalAnimation.arc(xMonster, 420, 150, rotateMouthMonster, -rotateMouthMonster, false);
    ctxFinalAnimation.lineTo(xMonster, 420);
    ctxFinalAnimation.fill();
    xMonster += 3;
    rotateMouthMonster -= Math.PI/140;
      
    if (rotateMouthMonster == 0) {
      rotateMouthMonster = Math.PI/7
    }
    
    ctxFinalAnimation.font = "18px Fredoka One";
    ctxFinalAnimation.fillStyle = 'white';
    ctxFinalAnimation.fillText(stringText, xText, 350);
    xText += 3;

    if (xMonster > 750) {
      clearInterval(id);
    }
  }, 1000/60);
}