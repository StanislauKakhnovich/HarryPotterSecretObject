let body = document.body;
 
  let drawFirstScene = () => {
    let ctxGround = document.getElementById('layer-ground').getContext('2d');
    let ctxHarry = document.getElementById('layer-harry').getContext('2d');
    let lingrad = ctxGround.createLinearGradient(0,0,0,150);
    lingrad.addColorStop(0, '#00ABEB');
    lingrad.addColorStop(1, '#fff');
    ctxGround.fillStyle = lingrad;
    ctxGround.fillRect(0,0,600,200);
    let imgGround_1 = new Image();
    imgGround_1.src = 'image/ground_1.jpg';
    imgGround_1.onload = function(){
      let ptrn = ctxGround.createPattern(imgGround_1,'repeat');
      ctxGround.fillStyle = ptrn;
      ctxGround.fillRect(0, 320,600,250);
    }

    let imgGround_2 = new Image();
    imgGround_2.src = 'image/ground_2.jpg';
    imgGround_2.onload = function(){
      let ptrn = ctxGround.createPattern(imgGround_2,'repeat');
      ctxGround.fillStyle = ptrn;
      ctxGround.fillRect(0, 250,600,130);
    }

    let imgGround_3 = new Image();
    imgGround_3.src = 'image/ground_3.jpg';
    imgGround_3.onload = function(){
      let ptrn = ctxGround.createPattern(imgGround_3,'repeat');
      ctxGround.fillStyle = ptrn;
      ctxGround.fillRect(0, 204, 600, 80);
    }

    let imgGround_4 = new Image();
    imgGround_4.src = 'image/ground_4.jpg';
    imgGround_4.onload = function(){
      let ptrn = ctxGround.createPattern(imgGround_4,'repeat');
      ctxGround.fillStyle = ptrn;
      ctxGround.fillRect(0, 200, 600, 15);
    }

    let imgGrass = new Image();
    imgGrass.src = 'image/grass.jpg';
    imgGrass.onload = function(){
      let ptrn = ctxGround.createPattern(imgGrass,'repeat');
      ctxGround.fillStyle = ptrn;
      ctxGround.fillRect(0,190,600,10);
    }

    let imgHarryPotter = new Image();
    imgHarryPotter.src = 'image/harry_potter_1.png';
    imgHarryPotter.onload = function(){
      ctxHarry.drawImage(imgHarryPotter,80,101);
    }

  }
  body.addEventListener('load', drawFirstScene());

    let drawLeftEntrance = () => {
      let ctxLeftEntrance = document.getElementById('layer-left-entrance').getContext('2d');
      ctxLeftEntrance.fillStyle = 'white';
      ctxLeftEntrance.fillRect(39,189,49,11);
      ctxLeftEntrance.strokeStyle = 'white';
      ctxLeftEntrance.beginPath();
      ctxLeftEntrance.moveTo(40, 200);
      let x = 40;
      let y = 200;
      for (let i=0; i < 26; i++) {
        if (i%2 == 0) {
          ctxLeftEntrance.lineTo(x, y+=20);
        }
        if (i%2 != 0) {
          ctxLeftEntrance.lineTo(x+=12, y);
        }
      }
      ctxLeftEntrance.lineTo(196, 380);
      ctxLeftEntrance.lineTo(88, 200);
      ctxLeftEntrance.lineTo(40, 200);
      ctxLeftEntrance.stroke();
      ctxLeftEntrance.fill();
    }
  body.addEventListener('load', drawLeftEntrance());  
    
    let drawRepository = () => {
      let ctxRepository = document.getElementById('layer-repository').getContext('2d');
      ctxRepository.fillStyle = 'white';
      ctxRepository.fillRect(195,380,210,80);
    }
  body.addEventListener('load', drawRepository());  
  

  let drawRightEntrance = () => {
    let ctxRightEntrance = document.getElementById('layer-right-entrance').getContext('2d');
    ctxRightEntrance.fillStyle = 'white';
    ctxRightEntrance.fillRect(513,189,49,11);
    ctxRightEntrance.strokeStyle = 'white';
    ctxRightEntrance.beginPath();
    ctxRightEntrance.moveTo(560, 200);
    let x = 560;
    let y = 200;
    for (let i=0; i < 26; i++) {
      if (i%2 == 0) {
        ctxRightEntrance.lineTo(x, y+=20);
      }
      if (i%2 != 0) {
        ctxRightEntrance.lineTo(x-=12, y);
      }
    }
    ctxRightEntrance.lineTo(404, 380);
    ctxRightEntrance.lineTo(512, 200);
    ctxRightEntrance.lineTo(560, 200);
    ctxRightEntrance.stroke();
    ctxRightEntrance.fill();
  }  
body.addEventListener('load', drawRightEntrance());  

  let drawScrollOverSecondLevel = () => {
    let ctxScrollOver = document.getElementById('layer-scrolls-over-second-level').getContext('2d');
    let imgScrollOver = new Image();
    imgScrollOver.src = 'image/scroll_50.png';
    imgScrollOver.onload = function(){
      let x = 200;
      for (let i=0; i < 2; i++) {
        ctxScrollOver.drawImage(imgScrollOver, x+=15, 166);
      }
    }
  }
body.addEventListener('load', drawScrollOverSecondLevel());

  let drawScrollUnderSecondLevel = () => {
    let ctxScrollUnder = document.getElementById('layer-scrolls-under-second-level').getContext('2d');
    let imgScrollUnder = new Image();
    imgScrollUnder.src = 'image/scroll_50.png';
    imgScrollUnder.onload = function(){
      let x = 200;
      for (let i=0; i < 2; i++) {
        ctxScrollUnder.drawImage(imgScrollUnder, x+=15, 425);
      }
    }
  }
body.addEventListener('load', drawScrollUnderSecondLevel()); 

let drawScrollOverThirdLevel = () => {
  let ctxScrollOver = document.getElementById('layer-scrolls-over-third-level').getContext('2d');
  let imgScrollOver = new Image();
  imgScrollOver.src = 'image/scroll_50.png';
  imgScrollOver.onload = function(){
    let x = 200;
    for (let i=0; i < 1; i++) {
      ctxScrollOver.drawImage(imgScrollOver, x+=15, 166);
    }
  }
}
body.addEventListener('load', drawScrollOverThirdLevel());

let drawScrollUnderThirdLevel = () => {
  let ctxScrollUnder = document.getElementById('layer-scrolls-under-third-level').getContext('2d');
  let imgScrollUnder = new Image();
  imgScrollUnder.src = 'image/scroll_50.png';
  imgScrollUnder.onload = function(){
    let x = 230;
    for (let i=0; i < 1; i++) {
      ctxScrollUnder.drawImage(imgScrollUnder, x+=15, 425);
    }
  }
}
body.addEventListener('load', drawScrollUnderThirdLevel()); 

let drawScrollOverFifthLevel = () => {
  let ctxScrollOver = document.getElementById('layer-scrolls-over-fifth-level').getContext('2d');
  let imgScrollOver = new Image();
  imgScrollOver.src = 'image/scroll_50.png';
  imgScrollOver.onload = function(){
    let x = 200;
    for (let i=0; i < 3; i++) {
      ctxScrollOver.drawImage(imgScrollOver, x+=15, 166);
    }
  }
}
body.addEventListener('load', drawScrollOverFifthLevel());

let drawScrollUnderFifthLevel = () => {
  let ctxScrollUnder = document.getElementById('layer-scrolls-under-fifth-level').getContext('2d');
  let imgScrollUnder = new Image();
  imgScrollUnder.src = 'image/scroll_50.png';
  imgScrollUnder.onload = function(){
    let x = 245;
    for (let i=0; i < 3; i++) {
      ctxScrollUnder.drawImage(imgScrollUnder, x+=15, 425);
    }
  }
}
body.addEventListener('load', drawScrollUnderFifthLevel()); 

let drawScrollOverSeventhLevel = () => {
  let ctxScrollOver = document.getElementById('layer-scrolls-over-seventh-level').getContext('2d');
  let imgScrollOver = new Image();
  imgScrollOver.src = 'image/scroll_50.png';
  imgScrollOver.onload = function(){
    let x = 200;
    for (let i=0; i < 1; i++) {
      ctxScrollOver.drawImage(imgScrollOver, x+=15, 166);
    }
  }
}
body.addEventListener('load', drawScrollOverSeventhLevel());


let drawNinthScene = () => {
  let ctxUnrolledScroll = document.getElementById('layer-unrolled-scroll-ninth-level').getContext('2d');
  let imgUnrolledScroll = new Image();
  imgUnrolledScroll.src = 'image/unrolled_scroll.png';
  imgUnrolledScroll.onload = function(){
    ctxUnrolledScroll.drawImage(imgUnrolledScroll,300, 20);
    ctxUnrolledScroll.font = "24px Fredoka One";
    ctxUnrolledScroll.fillText("console.log", 370, 90);
  }
}
body.addEventListener('load', drawNinthScene());

let drawScrollOverEleventhLevel = () => {
  let ctxScrollOver = document.getElementById('layer-scrolls-over-eleventh-level').getContext('2d');
  let imgScrollOver = new Image();
  imgScrollOver.src = 'image/scroll_50.png';
  imgScrollOver.onload = function(){
    let x = 200;
    for (let i=0; i < 3; i++) {
      ctxScrollOver.drawImage(imgScrollOver, x+=15, 166);
    }
  }
}
body.addEventListener('load', drawScrollOverEleventhLevel());

let drawScrollUnderEleventhLevel = () => {
  let ctxScrollUnder = document.getElementById('layer-scrolls-under-eleventh-level').getContext('2d');
  let imgScrollUnder = new Image();
  imgScrollUnder.src = 'image/scroll_50.png';
  imgScrollUnder.onload = function(){
    let x = 210;
    for (let i=0; i < 3; i++) {
      ctxScrollUnder.drawImage(imgScrollUnder, x+=15, 409);
    }
  }
}
body.addEventListener('load', drawScrollUnderEleventhLevel()); 

let drawTwelfthScene = () => {
    let ctxReserveGround = document.getElementById('layer-reserve-ground-twelfth-level').getContext('2d');
    ctxReserveGround.translate(300, 0);
    let lingrad = ctxReserveGround.createLinearGradient(0,0,0,75);
    lingrad.addColorStop(0, '#00ABEB');
    lingrad.addColorStop(1, '#fff');
    ctxReserveGround.fillStyle = lingrad;
    ctxReserveGround.fillRect(0,0,300,100);
    let imgGround = new Image();
    imgGround.src = 'image/ground_y.jpg';
    imgGround.onload = function(){
      let ptrn = ctxReserveGround.createPattern(imgGround,'repeat');
      ctxReserveGround.fillStyle = ptrn;
      ctxReserveGround.fillRect(0, 100,300,202);
    }
    
    
    let imgGrass = new Image();
    imgGrass.src = 'image/grass.jpg';
    imgGrass.onload = function(){
      let ptrn = ctxReserveGround.createPattern(imgGrass,'repeat');
      ctxReserveGround.fillStyle = ptrn;
      ctxReserveGround.fillRect(0,95,300,5);
    }

}

body.addEventListener('load', drawTwelfthScene()); 

let drawLeftEntranceReserve = () => {
  
  let ctxLeftEntrance = document.getElementById('layer-reserve-repository-twelfth-level').getContext('2d');
  ctxLeftEntrance.translate(300, 0);
  ctxLeftEntrance.fillStyle = 'white';
  ctxLeftEntrance.fillRect(19,94,25,6);
  ctxLeftEntrance.strokeStyle = 'white';
  ctxLeftEntrance.beginPath();
  ctxLeftEntrance.moveTo(20, 100);
  let x = 20;
  let y = 100;
  for (let i=0; i < 26; i++) {
    if (i%2 == 0) {
      ctxLeftEntrance.lineTo(x, y+=10);
    }
    if (i%2 != 0) {
      ctxLeftEntrance.lineTo(x+=6, y);
    }
  }
  ctxLeftEntrance.lineTo(98, 190);
  ctxLeftEntrance.lineTo(44, 100);
  ctxLeftEntrance.lineTo(20, 100);
  ctxLeftEntrance.stroke();
  ctxLeftEntrance.fill();
}
body.addEventListener('load', drawLeftEntranceReserve()); 

let drawReserveRepository = () => {
  let ctxRepository = document.getElementById('layer-reserve-repository-twelfth-level').getContext('2d');
  ctxRepository.fillStyle = 'white';
  ctxRepository.fillRect(98,190,104,40);
}
body.addEventListener('load', drawReserveRepository());  

let drawReserveScrolls = () => {
  let ctxScrollUnder = document.getElementById('layer-reserve-scrolls-thirteenth-level').getContext('2d');
  ctxScrollUnder.translate(300, 0);
  let imgScrollUnder = new Image();
  imgScrollUnder.src = 'image/scroll_50_reserve.png';
  imgScrollUnder.onload = function(){
    let x = 100;
    for (let i=0; i < 5; i++) {
      ctxScrollUnder.drawImage(imgScrollUnder, x+=7, 213);
    }
    
    x = 105;
    for (let i=0; i < 3; i++) {
      ctxScrollUnder.drawImage(imgScrollUnder, x+=7, 205);
    }
    
  }
}
body.addEventListener('load', drawReserveScrolls()); 




