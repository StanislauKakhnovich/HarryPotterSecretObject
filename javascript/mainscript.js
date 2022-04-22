let levelScroller = document.querySelector('#scroller');
let registrationField = document.querySelector('#zero-level');
let editor = document.querySelector('#editor');
let arrowRight = document.querySelector('.arrow.right');
let arrowLeft = document.querySelector('.arrow.left');
let buttonNext = document.querySelector('#next');
let buttonReset = document.querySelector('#reset');
let currentLevel = document.querySelector('.current');
let instruction = document.querySelector('#instructions')
let controlCode = document.querySelector('#controlCode');
let enteredText = document.querySelector('#code');
let before = document.querySelector('#before');
let after = document.querySelector('#after');
let leftEntrance = document.querySelector('#layer-left-entrance');
let rightEntrance = document.querySelector('#layer-right-entrance');
let repository = document.querySelector('#layer-repository');
let scrollSecondLevelOver = document.querySelector('#layer-scrolls-over-second-level');
let scrollSecondLevelUnder = document.querySelector('#layer-scrolls-under-second-level');
let scrollThirdLevelOver = document.querySelector('#layer-scrolls-over-third-level');
let scrollThirdLevelUnder = document.querySelector('#layer-scrolls-under-third-level');
let scrollFifthLevelOver = document.querySelector('#layer-scrolls-over-fifth-level');
let scrollFifthLevelUnder = document.querySelector('#layer-scrolls-under-fifth-level');
let scrollSeventhLevelOver = document.querySelector('#layer-scrolls-over-seventh-level');
let nameScroll = 'ornare';
let scrollNinthLevelUnrolled = document.querySelector('#layer-unrolled-scroll-ninth-level');
let scrollEleventhLevelOver = document.querySelector('#layer-scrolls-over-eleventh-level');
let scrollEleventhLevelUnder = document.querySelector('#layer-scrolls-under-eleventh-level');
let reservePlace = document.querySelector('#layer-reserve-ground-twelfth-level');
let reserveRepository = document.querySelector('#layer-reserve-repository-twelfth-level');
let reserveScrolls = document.querySelector('#layer-reserve-scrolls-thirteenth-level');
let finalAnimation = document.querySelector('#layer-animation-level');
let buttonEntry = document.querySelector('#btn-entry');
let board = document.querySelector('#board');
let containerButtonNextOver = document.querySelector('#container-btn-next-over');
let buttonNextOver = document.querySelector('#nextOver');
let bottomPoint = document.querySelector('#bottom-point');
let topPoint = document.querySelector('#level-indicator');
let timeInterval = 500;

let activateButtonsNext = () => {
    buttonNext.classList.remove('disabled');
    buttonNextOver.classList.remove('disabled');
}

let scrollUp = () => {
    if(document.documentElement.clientWidth < 1015) {
        setTimeout(()=>{topPoint.scrollIntoView(false)}, 0);
    }
    if(document.documentElement.clientWidth > 1015) {
        setTimeout(()=>{bottomPoint.scrollIntoView(false)}, 0);
    }
};

let setHeightEnteredtext = (counter) => {
    if ([1, 3, 4, 6, 8, 10, 13, 14].some((elem) => elem == counter)) return 48;
    if ([9, 12, 15, 16].some((elem) => elem == counter)) return 24;
    if ([2, 7].some((elem) => elem == counter)) return 72;
    if (counter == 11) return 144;
    if (counter == 5) return 168;
}

let switchingLevelUniversal = (counter) => {
    setTimeout(()=>{topPoint.scrollIntoView(false)}, 0);
    instruction.innerHTML = '';
    instruction.innerHTML = levels[counter].instructions[languageRender];
    before.innerText = '';
    before.innerText = levels[counter].before;
    after.innerText = '';
    after.innerText = levels[counter].after;
    currentLevel.innerText = counter;
    enteredText.innerHTML = '';
    containerButtonNextOver.classList.remove('hidden');
    buttonNext.classList.add('disabled');
    buttonNextOver.classList.add('disabled');
    arrowLeft.classList.remove('disabled');
    formSignUp.classList.add('hidden');
    formSignIn.classList.add('hidden');
    levelScroller.classList.remove('hidden');
    registrationField.classList.add('hidden');
    editor.classList.remove('hidden');
    enteredText.style.height = `${setHeightEnteredtext(counter)}px`;
    sessionStorage.removeItem(`code${counter - 1}Level`);
    sessionStorage.removeItem(`code${counter + 1}Level`);
    enteredText.innerHTML = sessionStorage.getItem(`code${counter}Level`);

    if (counter == 0) {
        levelScroller.classList.add('hidden');
        registrationField.classList.remove('hidden');
        editor.classList.add('hidden');
        arrowLeft.classList.add('disabled');
        containerButtonNextOver.classList.add('hidden');
    }
    if(counter < 2) {
        leftEntrance.classList.add('hidden');
        repository.classList.add('hidden');
    }
    if(counter >= 2) {
        leftEntrance.classList.remove('hidden');
        repository.classList.remove('hidden');
    }
    if(counter == 2) {
        scrollSecondLevelOver.classList.remove('hidden');
        scrollSecondLevelUnder.classList.add('hidden');
        scrollThirdLevelOver.classList.add('hidden');
        scrollThirdLevelUnder.classList.add('hidden');
    }
    if (counter >= 3) {
        scrollSecondLevelUnder.classList.remove('hidden');
    }
    if (counter == 3) {
        scrollSecondLevelOver.classList.add('hidden');
        scrollThirdLevelOver.classList.remove('hidden');
        scrollThirdLevelUnder.classList.add('hidden');
    }
    if (counter >= 4 && counter != 7) {
        scrollThirdLevelUnder.classList.remove('hidden');
    }
    if (counter == 4) {
        scrollThirdLevelOver.classList.add('hidden');
        scrollFifthLevelOver.classList.add('hidden');
        scrollFifthLevelUnder.classList.add('hidden');
    }
    if (counter == 5) {
        scrollFifthLevelOver.classList.remove('hidden');
        scrollFifthLevelUnder.classList.add('hidden');
    }
    if (counter >= 6) {
        scrollFifthLevelUnder.classList.remove('hidden');
    }
    if (counter == 6) {
        scrollFifthLevelOver.classList.add('hidden');
        scrollSeventhLevelOver.classList.add('hidden');
    }
    if (counter == 7) {
        scrollThirdLevelUnder.classList.add('hidden');
        scrollSeventhLevelOver.classList.remove('hidden');
    }
    if (counter == 8) {
        scrollSeventhLevelOver.classList.add('hidden');
        scrollNinthLevelUnrolled.classList.add('hidden');
    }
    if (counter == 9) {
        scrollNinthLevelUnrolled.classList.remove('hidden');
        rightEntrance.classList.add('hidden');
    }
    if (counter == 10) {
        rightEntrance.classList.add('hidden');
        scrollNinthLevelUnrolled.classList.add('hidden');
        scrollEleventhLevelOver.classList.add('hidden');
        scrollEleventhLevelUnder.classList.add('hidden');
    }
    if (counter >= 11) {
        rightEntrance.classList.remove('hidden');
    }
    if (counter == 11) {
        scrollEleventhLevelOver.classList.remove('hidden');
        scrollEleventhLevelUnder.classList.add('hidden');
        reservePlace.classList.add('hidden');
        reserveRepository.classList.add('hidden');
    }
    if (counter >= 12) {
        scrollEleventhLevelUnder.classList.remove('hidden');
    }
    if (counter >= 12 && counter <= 14) {
        reservePlace.classList.remove('hidden');
    }
    if (counter == 12) {
        scrollEleventhLevelOver.classList.add('hidden');
        reserveRepository.classList.add('hidden');
        reserveScrolls.classList.add('hidden');
    }
    if (counter >= 13 && counter <= 14) {
        reserveRepository.classList.remove('hidden');
    }
    if (counter == 13) {
        reserveScrolls.classList.add('hidden');
    }
    if (counter == 14) {
        reserveScrolls.classList.remove('hidden');
    }
    if (counter == 15) {
        reservePlace.classList.add('hidden');
        reserveRepository.classList.add('hidden');
        reserveScrolls.classList.add('hidden');
        arrowRight.classList.remove('disabled');
    }
    if (counter == 16) {
        leftEntrance.classList.add('hidden');
        arrowRight.classList.add('disabled');
    }
}

buttonEntry.addEventListener('click', () => {
    counter = 1;
    switchingLevelUniversal(counter);
});

if (counter == 0) {
    switchingLevelUniversal(counter);
}

if (counter == 1) {
    controlCode.innerHTML = sessionStorage.getItem(`code${counter}Level`);
    switchingLevelUniversal(counter);
}

if (typeof secretObject === 'object' && counter == 1) {
    scrollUp();
    setTimeout(()=>{
        leftEntrance.classList.remove('hidden');
        repository.classList.remove('hidden');
        activateButtonsNext();
    }, timeInterval); 
}

var secretObject = {
    lectus: '',
    amet: '',
    "cursus lacinia sed": '',
    consectetur: '',
    arcu: '',
    augue: '',
    ornare: '',
    eget: '',
    eleifend: '',
    justo: '',
};

var reserveEntrance;

if (counter == 2) {
    controlCode.innerHTML = `secretObject = {${sessionStorage.getItem(`code${counter}Level`)}}`
    switchingLevelUniversal(counter);
}

if (secretObject.lectus === 'Tortor, urna' && secretObject.amet === 'Ipsum sed'&& counter == 2) {
    scrollUp();
    setTimeout(()=>{
        scrollSecondLevelUnder.classList.remove('hidden');
        activateButtonsNext();
    }, timeInterval);
}

if (counter == 3) {
    controlCode.innerHTML = `secretObject = {lectus: 'Tortor, urna',
    amet: 'Ipsum sed', ${sessionStorage.getItem(`code${counter}Level`)}}`;
    switchingLevelUniversal(counter);
}
if (secretObject["cursus lacinia sed"] === 'Leo, dui' && counter == 3) {
    scrollUp();
    setTimeout(()=>{
        scrollThirdLevelUnder.classList.remove('hidden');
        activateButtonsNext();
    }, timeInterval);   
}
let codeUser_3 = `secretObject = {lectus: 'Tortor, urna', amet: 'Ipsum sed', "cursus lacinia sed": 'Leo, dui'};`

if (counter == 4) {
    setTimeout(()=>{
        controlCode.innerHTML = `${codeUser_3} ${sessionStorage.getItem(`code${counter}Level`)}`;       
    }, 200);
    switchingLevelUniversal(counter);
}
let reg4 = /alert\s*\(\s*secretObject.amet\s*\)/;
let valueInput4 = sessionStorage.getItem(`code${counter}Level`);

if (reg4.test(valueInput4) && counter == 4) {
    scrollUp();
    activateButtonsNext();  
}

if (counter == 5) {
    controlCode.innerHTML = `${codeUser_3} ${sessionStorage.getItem(`code${counter}Level`)}`;     
    switchingLevelUniversal(counter);
}
if (secretObject.consectetur === 'Accumsan et' && secretObject.arcu === 'Mattis id' && secretObject.augue === 'Ut. Est' && counter == 5) {
    scrollUp();
    setTimeout(()=>{
        scrollFifthLevelUnder.classList.remove('hidden');
        activateButtonsNext();
    }, timeInterval);  
}
let codeUser_5 = `secretObject.consectetur =  'Accumsan et'; secretObject.arcu =  'Mattis id'; secretObject.augue =  'Ut. Est';`

if (counter == 6) {
    controlCode.innerHTML = `${codeUser_3} ${codeUser_5} ${sessionStorage.getItem(`code${counter}Level`)}`;
        switchingLevelUniversal(counter);
}
if ("cursus lacinia sed" in secretObject === false && counter == 6) {
    scrollUp();
    setTimeout(()=>{
        scrollThirdLevelUnder.classList.add('hidden');
        activateButtonsNext();
    }, timeInterval);  
}
let codeUser_6 = `delete secretObject["cursus lacinia sed"];`

if (counter == 7) {
    controlCode.innerHTML = `${codeUser_3} ${codeUser_5} ${codeUser_6} ${sessionStorage.getItem(`code${counter}Level`)}`;
    switchingLevelUniversal(counter);
}
if (secretObject.ornare === 'Dictum morbi' && counter == 7) {
    scrollUp();
    setTimeout(()=>{
        scrollThirdLevelUnder.classList.remove('hidden');
        activateButtonsNext();
    }, timeInterval);
}
let codeUser_7 = `secretObject[nameScroll] = 'Dictum morbi';`;

if (counter == 8) {
    setTimeout(()=>{
        controlCode.innerHTML = `${codeUser_3} ${codeUser_5} ${codeUser_6} ${codeUser_7} ${sessionStorage.getItem(`code${counter}Level`)}`;
    }, 200);
    switchingLevelUniversal(counter);
}

let reg8 = /alert\s*\(\s*(['"])pellentesque\1\s+in\s+secretObject\s*\)/;
let valueInput8 = sessionStorage.getItem(`code${counter}Level`);

if (reg8.test(valueInput8) && counter == 8) {
    scrollUp();
    activateButtonsNext();
}

let reg9 = /console.log\s*\(\s*key\s*\)/;
let valueInput9 = sessionStorage.getItem(`code${counter}Level`);

if (counter == 9) {
    setTimeout(()=>{
        controlCode.innerHTML = ` ${codeUser_3} ${codeUser_5} ${codeUser_6} ${codeUser_7}
                if (reg9.test(valueInput9)) {
                    let ctxUnrolledScroll = document.getElementById('layer-unrolled-scroll-ninth-level').getContext('2d');
                    ctxUnrolledScroll.font = "16px Fredoka One";
                    let x = 360;
                    let y = 110;
                for (var key in secretObject) {
                    ${sessionStorage.getItem(`code${counter}Level`)}
                    ctxUnrolledScroll.fillText(key, x-=1, y+=15);
                    };
                }
            `;
    }, 500);
    switchingLevelUniversal(counter);
}

if (reg9.test(valueInput9) && counter == 9) {
    scrollUp();
    activateButtonsNext();
}

reserveEntrance = secretObject;

if (counter == 10) {
        controlCode.innerHTML = `${codeUser_3} ${codeUser_5} ${codeUser_6} ${codeUser_7} ${sessionStorage.getItem(`code${counter}Level`)}`;
        switchingLevelUniversal(counter);
}
if (counter == 10 && reserveEntrance.lectus === 'Tortor, urna') {
    scrollUp();
    setTimeout(()=>{
        rightEntrance.classList.remove('hidden');
        activateButtonsNext();
    }, timeInterval); 
}
let codeUser_10 = ` var reserveEntrance = secretObject;`

if (counter == 11) {
    controlCode.innerHTML = `${codeUser_3} ${codeUser_5} ${codeUser_6} ${codeUser_7} ${codeUser_10} ${sessionStorage.getItem(`code${counter}Level`)}`;
    switchingLevelUniversal(counter);
}
if (counter == 11 && reserveEntrance.eget === 'Molestie sit' && reserveEntrance.eleifend === 'Sed dapibus' && reserveEntrance.justo === 'Integer sapien') {
    scrollUp();
    setTimeout(()=>{
        scrollEleventhLevelUnder.classList.remove('hidden');
        activateButtonsNext();
    }, timeInterval); 
}
let codeUser_11 = `reserveEntrance.eget = 'Molestie sit'; reserveEntrance.eleifend = 'Sed dapibus'; reserveEntrance.justo = 'Integer sapien';`

if (counter == 12) {
    controlCode.innerHTML = sessionStorage.getItem(`code${counter}Level`);
    switchingLevelUniversal(counter);
}
if (counter == 12 && typeof reserveObject === 'object') {
    scrollUp();
    setTimeout(()=>{
        reserveRepository.classList.remove('hidden');
        activateButtonsNext();
    }, timeInterval);
}
let codeUser_12 = `var reserveObject = {};`

var reserveObject = {
    lectus: '',
    amet: '',
    consectetur: '',
    arcu: '',
    augue: '',
    ornare: '',
    eget: '',
    eleifend: '',
    justo: '',
};

if (counter == 13) {
    controlCode.innerHTML = `${codeUser_3} ${codeUser_5} ${codeUser_6} ${codeUser_7} ${codeUser_10} ${codeUser_11} ${codeUser_12}
    for (var key in secretObject) {
    ${sessionStorage.getItem(`code${counter}Level`)};
    }
    `;
    switchingLevelUniversal(counter);
}
if (counter == 13 && reserveObject.eget === 'Molestie sit' && reserveObject.eleifend === 'Sed dapibus' && reserveObject.justo === 'Integer sapien') {
    scrollUp();
    setTimeout(()=>{
        reserveScrolls.classList.remove('hidden');
        activateButtonsNext();
    }, timeInterval); 
}
let codeUser_13 = `for (var key in secretObject){reserveObject[key] = secretObject[key];}`

if (counter == 14) {
    setTimeout(()=>{
        controlCode.innerHTML = `${codeUser_3} ${codeUser_5} ${codeUser_6} ${codeUser_7} ${codeUser_10} ${codeUser_11} ${codeUser_12} ${codeUser_13}
            ${sessionStorage.getItem(`code${counter}Level`)}`;
    }, 200);
    switchingLevelUniversal(counter);
}

let reg14_1 = /alert\s*\(\s*reserveObject\s*\=\=\s*secretObject\s*\)/;
let valueInput14_1 = sessionStorage.getItem(`code${counter}Level`);

let reg14_2 = /alert\s*\(\s*reserveEntrance\s*\=\=\s*secretObject\s*\)/;
let valueInput14_2 = sessionStorage.getItem(`code${counter}Level`);

if (reg14_1.test(valueInput14_1) || reg14_2.test(valueInput14_2)) {
    scrollUp();
    activateButtonsNext();
}

if (counter == 15) {
    controlCode.innerHTML = `${codeUser_3} ${codeUser_5} ${codeUser_6} ${codeUser_7} ${codeUser_10} ${codeUser_11}
        ${sessionStorage.getItem(`code${counter}Level`)}`;
    switchingLevelUniversal(counter);
}
if (secretObject === null || typeof secretObject !== 'object') {
    scrollUp();
    setTimeout(()=>{
        leftEntrance.classList.add('hidden');
        activateButtonsNext();
    }, timeInterval);
}
let codeUser_15 = `secretObject = null;`

if (counter == 16) {
    controlCode.innerHTML = `${codeUser_3} ${codeUser_5} ${codeUser_6} ${codeUser_7} ${codeUser_10} ${codeUser_11} ${codeUser_15}
        ${sessionStorage.getItem(`code${counter}Level`)}`;
    switchingLevelUniversal(counter);        
}
if (counter == 16 && (reserveEntrance === null || typeof reserveEntrance !== 'object')) { 
    scrollUp();
    setTimeout(()=>{
        rightEntrance.classList.add('hidden');
        finalAnimation.classList.remove('hidden');
        drawFinalAnimation();
    }, timeInterval);
    
    setTimeout(() =>{
        repository.classList.add('hidden');
        scrollSecondLevelUnder.classList.add('hidden');
        scrollThirdLevelUnder.classList.add('hidden');
        scrollFifthLevelUnder.classList.add('hidden');
        scrollEleventhLevelUnder.classList.add('hidden');
    }, 1800);
}

let buttonEnter = document.querySelector('#enter')

buttonEnter.addEventListener('click', (event) => {
        let code = enteredText.value;
        sessionStorage.setItem(`code${counter}Level`, code);
        sessionStorage.setItem('counter', counter);
        location.reload(); 
});

let switchButtonNext = () => {
    if (!buttonNext.classList.contains('disabled')) {
        counter++;
        switchingLevelUniversal(counter);  
    }
};

buttonNext.addEventListener('click', switchButtonNext);
buttonNextOver.addEventListener('click', switchButtonNext);

arrowRight.addEventListener('click', () => {
    if (counter < 16) {
        counter++ ;
        switchingLevelUniversal(counter); 
    } 
});

arrowLeft.addEventListener('click', () => {
    counter-- ;
    switchingLevelUniversal(counter);  
});

buttonReset.addEventListener('click', () => {
    sessionStorage.setItem('counter', 1);
    location.reload(); 
});