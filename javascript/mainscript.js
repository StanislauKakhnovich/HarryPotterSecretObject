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


let switchingLevel = () => {
    instruction.innerHTML = '';
    instruction.innerHTML = levels[counter].instructions[languageRender];
    before.innerText = '';
    before.innerText = levels[counter].before;
    after.innerText = '';
    after.innerText = levels[counter].after;
    currentLevel.innerText = counter;
    enteredText.innerHTML = '';
}

let switchingZeroLevel = () => {
    switchingLevel();
    levelScroller.classList.add('hidden');
    registrationField.classList.remove('hidden');
    editor.classList.add('hidden');
    sessionStorage.removeItem('codeFirstLevel');
    arrowLeft.classList.add('disabled');
}

let switchingFirstLevel = () => {
    switchingLevel();
    formSignUp.classList.add('hidden');
    formSignIn.classList.add('hidden');
    levelScroller.classList.remove('hidden');
    registrationField.classList.add('hidden');
    editor.classList.remove('hidden');
    enteredText.style.height = '48px';
    leftEntrance.classList.add('hidden');
    repository.classList.add('hidden');
    buttonNext.classList.add('disabled');
    arrowLeft.classList.remove('disabled');
    sessionStorage.removeItem('codeSecondLevel');
    enteredText.innerHTML = sessionStorage.getItem('codeFirstLevel');
    scrollSecondLevelOver.classList.add('hidden');
    scrollSecondLevelUnder.classList.add('hidden');
}

buttonEntry.addEventListener('click', () => {
    counter = 1;
    switchingFirstLevel();
});

let switchingSecondLevel = () => {
    switchingLevel();
    leftEntrance.classList.remove('hidden');
    repository.classList.remove('hidden');
    scrollSecondLevelOver.classList.remove('hidden');
    scrollSecondLevelUnder.classList.add('hidden');
    scrollThirdLevelOver.classList.add('hidden');
    scrollThirdLevelUnder.classList.add('hidden');
    enteredText.style.height = '72px';
    buttonNext.classList.add('disabled');
    arrowLeft.classList.remove('disabled');
    sessionStorage.removeItem('codeFirstLevel');
    sessionStorage.removeItem('codeThirdLevel');
    enteredText.innerHTML = sessionStorage.getItem('codeSecondLevel');
}

let switchingThirdLevel = () => {
    switchingLevel();
    leftEntrance.classList.remove('hidden');
    repository.classList.remove('hidden');
    scrollSecondLevelOver.classList.add('hidden');
    scrollSecondLevelUnder.classList.remove('hidden');
    scrollThirdLevelOver.classList.remove('hidden');
    scrollThirdLevelUnder.classList.add('hidden');
    enteredText.style.height = '48px';
    buttonNext.classList.add('disabled');
    arrowLeft.classList.remove('disabled');
    sessionStorage.removeItem('codeSecondLevel');
    sessionStorage.removeItem('codeFourthLevel');
    enteredText.innerHTML = sessionStorage.getItem('codeThirdLevel');
}

let switchingFourthLevel = () => {
    switchingLevel();
    leftEntrance.classList.remove('hidden');
    repository.classList.remove('hidden');
    scrollSecondLevelUnder.classList.remove('hidden');
    scrollThirdLevelOver.classList.add('hidden');
    scrollThirdLevelUnder.classList.remove('hidden');
    scrollFifthLevelOver.classList.add('hidden');
    scrollFifthLevelUnder.classList.add('hidden');
    enteredText.style.height = '48px';
    buttonNext.classList.add('disabled');
    arrowLeft.classList.remove('disabled');
    sessionStorage.removeItem('codeThirdLevel');
    sessionStorage.removeItem('codeFifthLevel');
    enteredText.innerHTML = sessionStorage.getItem('codeFourthLevel');
}

let switchingFifthLevel = () => {
    switchingLevel();
    leftEntrance.classList.remove('hidden');
    repository.classList.remove('hidden');
    scrollSecondLevelUnder.classList.remove('hidden');
    scrollThirdLevelUnder.classList.remove('hidden');
    scrollFifthLevelOver.classList.remove('hidden');
    scrollFifthLevelUnder.classList.add('hidden');
    enteredText.style.height = '168px';
    buttonNext.classList.add('disabled');
    arrowLeft.classList.remove('disabled');
    sessionStorage.removeItem('codeFourthLevel');
    sessionStorage.removeItem('codeSixthLevel');
    enteredText.innerHTML = sessionStorage.getItem('codeFifthLevel');
}

let switchingSixthLevel = () => {
    switchingLevel();
    leftEntrance.classList.remove('hidden');
    repository.classList.remove('hidden');
    scrollSecondLevelUnder.classList.remove('hidden');
    scrollThirdLevelUnder.classList.remove('hidden');
    scrollFifthLevelOver.classList.add('hidden');
    scrollFifthLevelUnder.classList.remove('hidden');
    scrollSeventhLevelOver.classList.add('hidden');
    enteredText.style.height = '48px';
    buttonNext.classList.add('disabled');
    arrowLeft.classList.remove('disabled');
    sessionStorage.removeItem('codeFifthLevel');
    sessionStorage.removeItem('codeSeventhLevel');
    enteredText.innerHTML = sessionStorage.getItem('codeSixthLevel');
}

let switchingSeventhLevel = () => {
    switchingLevel();
    leftEntrance.classList.remove('hidden');
    repository.classList.remove('hidden');
    scrollSecondLevelUnder.classList.remove('hidden');
    scrollThirdLevelUnder.classList.add('hidden');
    scrollFifthLevelUnder.classList.remove('hidden');
    scrollSeventhLevelOver.classList.remove('hidden');
    enteredText.style.height = '72px';
    buttonNext.classList.add('disabled');
    arrowLeft.classList.remove('disabled');
    sessionStorage.removeItem('codeSixthLevel');
    sessionStorage.removeItem('codeEighthLevel');
    enteredText.innerHTML = sessionStorage.getItem('codeSeventhLevel');
}

let switchingEighthLevel = () => {
    switchingLevel();
    leftEntrance.classList.remove('hidden');
    repository.classList.remove('hidden');
    scrollSecondLevelUnder.classList.remove('hidden');
    scrollThirdLevelUnder.classList.remove('hidden');
    scrollFifthLevelUnder.classList.remove('hidden');
    scrollSeventhLevelOver.classList.add('hidden');
    scrollNinthLevelUnrolled.classList.add('hidden');
    enteredText.style.height = '24px';
    buttonNext.classList.add('disabled');
    arrowLeft.classList.remove('disabled');
    sessionStorage.removeItem('codeSeventhLevel');
    sessionStorage.removeItem('codeNinthLevel');
    enteredText.innerHTML = sessionStorage.getItem('codeEighthLevel');
}

let switchingNinthLevel = () => {
    switchingLevel();
    leftEntrance.classList.remove('hidden');
    repository.classList.remove('hidden');
    scrollSecondLevelUnder.classList.remove('hidden');
    scrollThirdLevelUnder.classList.remove('hidden');
    scrollFifthLevelUnder.classList.remove('hidden');
    scrollNinthLevelUnrolled.classList.remove('hidden');
    rightEntrance.classList.add('hidden');
    enteredText.style.height = '24px';
    buttonNext.classList.add('disabled');
    arrowLeft.classList.remove('disabled');
    sessionStorage.removeItem('codeEighthLevel');
    sessionStorage.removeItem('codeTenthLevel');
    enteredText.innerHTML = sessionStorage.getItem('codeNinthLevel');
}

let switchingTenthLevel = () => {
    switchingLevel();
    leftEntrance.classList.remove('hidden');
    repository.classList.remove('hidden');
    rightEntrance.classList.add('hidden');
    scrollSecondLevelUnder.classList.remove('hidden');
    scrollThirdLevelUnder.classList.remove('hidden');
    scrollFifthLevelUnder.classList.remove('hidden');
    scrollNinthLevelUnrolled.classList.add('hidden');
    scrollEleventhLevelOver.classList.add('hidden');
    scrollEleventhLevelUnder.classList.add('hidden');
    enteredText.style.height = '48px';
    buttonNext.classList.add('disabled');
    arrowLeft.classList.remove('disabled');
    sessionStorage.removeItem('codeNinthLevel');
    sessionStorage.removeItem('codeEleventhLevel');
    enteredText.innerHTML = sessionStorage.getItem('codeTenthLevel');
}

let switchingEleventhLevel = () => {
    switchingLevel();
    leftEntrance.classList.remove('hidden');
    repository.classList.remove('hidden');
    rightEntrance.classList.remove('hidden');
    scrollSecondLevelUnder.classList.remove('hidden');
    scrollThirdLevelUnder.classList.remove('hidden');
    scrollFifthLevelUnder.classList.remove('hidden');
    scrollEleventhLevelOver.classList.remove('hidden');
    scrollEleventhLevelUnder.classList.add('hidden');
    reservePlace.classList.add('hidden');
    reserveRepository.classList.add('hidden');
    enteredText.style.height = '144px';
    buttonNext.classList.add('disabled');
    arrowLeft.classList.remove('disabled');
    sessionStorage.removeItem('codeTenthLevel');
    sessionStorage.removeItem('codeTwelfthLevel');
    enteredText.innerHTML = sessionStorage.getItem('codeEleventhLevel');
}

let switchingTwelfthLevel = () => {
    switchingLevel();
    leftEntrance.classList.remove('hidden');
    repository.classList.remove('hidden');
    rightEntrance.classList.remove('hidden');
    scrollSecondLevelUnder.classList.remove('hidden');
    scrollThirdLevelUnder.classList.remove('hidden');
    scrollFifthLevelUnder.classList.remove('hidden');
    scrollEleventhLevelOver.classList.add('hidden');
    scrollEleventhLevelUnder.classList.remove('hidden');
    reservePlace.classList.remove('hidden');
    reserveRepository.classList.add('hidden');
    reserveScrolls.classList.add('hidden');
    enteredText.style.height = '24px';
    buttonNext.classList.add('disabled');
    arrowLeft.classList.remove('disabled');
    sessionStorage.removeItem('codeEleventhLevel');
    sessionStorage.removeItem('codeThirteenthLevel');
    enteredText.innerHTML = sessionStorage.getItem('codeTwelfthLevel');
}

let switchingThirteenthLevel = () => {
    switchingLevel();
    leftEntrance.classList.remove('hidden');
    repository.classList.remove('hidden');
    rightEntrance.classList.remove('hidden');
    scrollSecondLevelUnder.classList.remove('hidden');
    scrollThirdLevelUnder.classList.remove('hidden');
    scrollFifthLevelUnder.classList.remove('hidden');
    scrollEleventhLevelOver.classList.add('hidden');
    scrollEleventhLevelUnder.classList.remove('hidden');
    reservePlace.classList.remove('hidden');
    reserveRepository.classList.remove('hidden');
    reserveScrolls.classList.add('hidden');
    enteredText.style.height = '48px';
    buttonNext.classList.add('disabled');
    arrowLeft.classList.remove('disabled');
    sessionStorage.removeItem('codeTwelfthLevel');
    sessionStorage.removeItem('codeFourteenthLevel');
    enteredText.innerHTML = sessionStorage.getItem('codeThirteenthLevel');
}

let switchingFourteenthLevel = () => {
    switchingLevel();
    leftEntrance.classList.remove('hidden');
    repository.classList.remove('hidden');
    rightEntrance.classList.remove('hidden');
    scrollSecondLevelUnder.classList.remove('hidden');
    scrollThirdLevelUnder.classList.remove('hidden');
    scrollFifthLevelUnder.classList.remove('hidden');
    scrollEleventhLevelOver.classList.add('hidden');
    scrollEleventhLevelUnder.classList.remove('hidden');
    reservePlace.classList.remove('hidden');
    reserveRepository.classList.remove('hidden');
    reserveScrolls.classList.remove('hidden');
    enteredText.style.height = '48px';
    buttonNext.classList.add('disabled');
    arrowLeft.classList.remove('disabled');
    sessionStorage.removeItem('codeThirteenthLevel');
    sessionStorage.removeItem('codeFifteenthLevel');
    enteredText.innerHTML = sessionStorage.getItem('codeFourteenthLevel');
}

let switchingFifteenthLevel = () => {
    switchingLevel();
    leftEntrance.classList.remove('hidden');
    repository.classList.remove('hidden');
    rightEntrance.classList.remove('hidden');
    scrollSecondLevelUnder.classList.remove('hidden');
    scrollThirdLevelUnder.classList.remove('hidden');
    scrollFifthLevelUnder.classList.remove('hidden');
    scrollEleventhLevelOver.classList.add('hidden');
    scrollEleventhLevelUnder.classList.remove('hidden');
    reservePlace.classList.add('hidden');
    reserveRepository.classList.add('hidden');
    reserveScrolls.classList.add('hidden');
    enteredText.style.height = '24px';
    buttonNext.classList.add('disabled');
    arrowLeft.classList.remove('disabled');
    arrowRight.classList.remove('disabled');
    sessionStorage.removeItem('codeFourteenthLevel');
    sessionStorage.removeItem('codeSixteenthLevel');
    enteredText.innerHTML = sessionStorage.getItem('codeFifteenthLevel');
}

let switchingSixteenthLevel = () => {
    switchingLevel();
    leftEntrance.classList.remove('hidden');
    repository.classList.remove('hidden');
    rightEntrance.classList.remove('hidden');
    scrollSecondLevelUnder.classList.remove('hidden');
    scrollThirdLevelUnder.classList.remove('hidden');
    scrollFifthLevelUnder.classList.remove('hidden');
    scrollEleventhLevelOver.classList.add('hidden');
    scrollEleventhLevelUnder.classList.remove('hidden');
    reservePlace.classList.add('hidden');
    reserveRepository.classList.add('hidden');
    reserveScrolls.classList.add('hidden');
    leftEntrance.classList.add('hidden');
    enteredText.style.height = '24px';
    buttonNext.classList.add('disabled');
    arrowLeft.classList.remove('disabled');
    arrowRight.classList.add('disabled');
    sessionStorage.removeItem('codeFifteenthLevel');
    enteredText.innerHTML = sessionStorage.getItem('codeSixteenthLevel');
}

if (counter == 0) {
    switchingZeroLevel();
}

if (counter == 1) {
    controlCode.innerHTML = sessionStorage.getItem('codeFirstLevel');
    switchingFirstLevel();
}
if (typeof secretObject === 'object') {
    leftEntrance.classList.remove('hidden');
    repository.classList.remove('hidden');
    buttonNext.classList.remove('disabled');
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
    controlCode.innerHTML = `secretObject = {${sessionStorage.getItem('codeSecondLevel')}}`;
    switchingSecondLevel();
}
if (secretObject.lectus === 'Tortor, urna hac libero, sed o' && secretObject.amet === 'Ipsum sed vitae consectetur du') {
    scrollSecondLevelUnder.classList.remove('hidden');
    buttonNext.classList.remove('disabled');
}

if (counter == 3) {
    controlCode.innerHTML = `secretObject = {lectus: 'Tortor, urna hac libero, sed o',
    amet: 'Ipsum sed vitae consectetur du', ${sessionStorage.getItem('codeThirdLevel')}}`;
    switchingThirdLevel();
}
if (secretObject["cursus lacinia sed"] === 'Leo, dui habitasse velit in am') {
    scrollThirdLevelUnder.classList.remove('hidden');
    buttonNext.classList.remove('disabled');
}


if (counter == 4) {
    setTimeout(()=>{
        controlCode.innerHTML = ` 
            secretObject = {
                lectus: 'Tortor, urna hac libero, sed o',
                amet: 'Ipsum sed vitae consectetur du',
                "cursus lacinia sed": 'Leo, dui habitasse velit in am'
            };${sessionStorage.getItem('codeFourthLevel')}`;
        
    }, 200);
    switchingFourthLevel();
}
let reg4 = /alert\s*\(\s*secretObject.amet\s*\)/;
let valueInput4 = sessionStorage.getItem('codeFourthLevel');

if (reg4.test(valueInput4)) {
    buttonNext.classList.remove('disabled');
}

if (counter == 5) {
    controlCode.innerHTML = `secretObject = {
        lectus: 'Tortor, urna hac libero, sed o',
        amet: 'Ipsum sed vitae consectetur du',
        "cursus lacinia sed": 'Leo, dui habitasse velit in am'
    };${sessionStorage.getItem('codeFifthLevel')}`;
    switchingFifthLevel();
}
if (secretObject.consectetur === 'Accumsan et. Sed non sed orci, nisi sed' && secretObject.arcu === 'Mattis id dictum. Justo nulla fauci' && secretObject.augue === 'Ut. Est. Dapibus in sed morbi tortor, vita') {
    scrollFifthLevelUnder.classList.remove('hidden');
    buttonNext.classList.remove('disabled');
}

if (counter == 6) {
    controlCode.innerHTML = `
        secretObject = {
            lectus: 'Tortor, urna hac libero, sed o',
            amet: 'Ipsum sed vitae consectetur du',
            "cursus lacinia sed": 'Leo, dui habitasse velit in am',
            consectetur: 'Accumsan et. Sed non sed orci, nisi sed',
            arcu: 'Mattis id dictum. Justo nulla fauci',
            augue: 'Ut. Est. Dapibus in sed morbi tortor, vita',
        };${sessionStorage.getItem('codeSixthLevel')}`;
    buttonNext.classList.remove('disabled');  
    switchingSixthLevel();
}
if ("cursus lacinia sed" in secretObject === false) {
    scrollThirdLevelUnder.classList.add('hidden');
    buttonNext.classList.remove('disabled');
}

if (counter == 7) {
    controlCode.innerHTML = `
    secretObject = {
        lectus: 'Tortor, urna hac libero, sed o',
        amet: 'Ipsum sed vitae consectetur du',
        consectetur: 'Accumsan et. Sed non sed orci, nisi sed',
        arcu: 'Mattis id dictum. Justo nulla fauci',
        augue: 'Ut. Est. Dapibus in sed morbi tortor, vita',
    };${sessionStorage.getItem('codeSeventhLevel')}`;
    switchingSeventhLevel();
}
if (secretObject.ornare === 'Dictum morbi et. Aenean aenean sed vi') {
    scrollThirdLevelUnder.classList.remove('hidden');
    buttonNext.classList.remove('disabled');
}

if (counter == 8) {
    setTimeout(()=>{
        controlCode.innerHTML = ` 
            secretObject = {
                lectus: 'Tortor, urna hac libero, sed o',
                amet: 'Ipsum sed vitae consectetur du',
                consectetur: 'Accumsan et. Sed non sed orci, nisi sed',
                arcu: 'Mattis id dictum. Justo nulla fauci',
                augue: 'Ut. Est. Dapibus in sed morbi tortor, vita',
                ornare: 'Dictum morbi et. Aenean aenean sed vi',
            };${sessionStorage.getItem('codeEighthLevel')}`;
        
    }, 200);
    switchingEighthLevel();
}

let reg8 = /alert\s*\(\s*(['"])pellentesque\1\s+in\s+secretObject\s*\)/;
let valueInput8 = sessionStorage.getItem('codeEighthLevel');

if (reg8.test(valueInput8)) {
    buttonNext.classList.remove('disabled');
}

let reg9 = /console.log\s*\(\s*key\s*\)/;
let valueInput9 = sessionStorage.getItem('codeNinthLevel');

if (counter == 9) {
    setTimeout(()=>{
        controlCode.innerHTML = ` 
            secretObject = {
                lectus: 'Tortor, urna hac libero, sed o',
                amet: 'Ipsum sed vitae consectetur du',
                consectetur: 'Accumsan et. Sed non sed orci, nisi sed',
                arcu: 'Mattis id dictum. Justo nulla fauci',
                augue: 'Ut. Est. Dapibus in sed morbi tortor, vita',
                ornare: 'Dictum morbi et. Aenean aenean sed vi',
            };
                
                console.log(valueInput9);
                if (reg9.test(valueInput9)) {
                    let ctxUnrolledScroll = document.getElementById('layer-unrolled-scroll-ninth-level').getContext('2d');
                    ctxUnrolledScroll.font = "16px Fredoka One";
                    let x = 360;
                    let y = 110;
                for (var key in secretObject) {
                    ${sessionStorage.getItem('codeNinthLevel')}
                    ctxUnrolledScroll.fillText(key, x-=1, y+=15);
                    };
                }
            `;
       
    }, 200);
    switchingNinthLevel();
}

if (reg9.test(valueInput9)) {
    buttonNext.classList.remove('disabled');
}


reserveEntrance = secretObject;

if (counter == 10) {
        controlCode.innerHTML = ` 
            secretObject = {
                lectus: 'Tortor, urna hac libero, sed o',
                amet: 'Ipsum sed vitae consectetur du',
                consectetur: 'Accumsan et. Sed non sed orci, nisi sed',
                arcu: 'Mattis id dictum. Justo nulla fauci',
                augue: 'Ut. Est. Dapibus in sed morbi tortor, vita',
                ornare: 'Dictum morbi et. Aenean aenean sed vi',
            };${sessionStorage.getItem('codeTenthLevel')} 
            `;
    switchingTenthLevel();
}
if (counter == 10 && reserveEntrance.lectus === 'Tortor, urna hac libero, sed o') {
    rightEntrance.classList.remove('hidden');
    buttonNext.classList.remove('disabled');
}


if (counter == 11) {
    controlCode.innerHTML = `secretObject = {
                lectus: 'Tortor, urna hac libero, sed o',
                amet: 'Ipsum sed vitae consectetur du',
                consectetur: 'Accumsan et. Sed non sed orci, nisi sed',
                arcu: 'Mattis id dictum. Justo nulla fauci',
                augue: 'Ut. Est. Dapibus in sed morbi tortor, vita',
                ornare: 'Dictum morbi et. Aenean aenean sed vi',
    };${sessionStorage.getItem('codeEleventhLevel')}`;
    switchingEleventhLevel();
}
if (reserveEntrance.eget === 'Molestie sit nec vulputate habitasse pla' && reserveEntrance.eleifend === 'Sed dapibus quis, sit velit vestibul' && reserveEntrance.justo === 'Integer sapien consectetur sodales int') {
    scrollEleventhLevelUnder.classList.remove('hidden');
    buttonNext.classList.remove('disabled');
}

if (counter == 12) {
    controlCode.innerHTML = sessionStorage.getItem('codeTwelfthLevel');
    switchingTwelfthLevel();
}
if (typeof reserveObject === 'object') {
    reserveRepository.classList.remove('hidden');
    buttonNext.classList.remove('disabled');
}

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
    controlCode.innerHTML = `secretObject = {
                lectus: 'Tortor, urna hac libero, sed o',
                amet: 'Ipsum sed vitae consectetur du',
                consectetur: 'Accumsan et. Sed non sed orci, nisi sed',
                arcu: 'Mattis id dictum. Justo nulla fauci',
                augue: 'Ut. Est. Dapibus in sed morbi tortor, vita',
                ornare: 'Dictum morbi et. Aenean aenean sed vi',
                eget: 'Molestie sit nec vulputate habitasse pla',
                eleifend: 'Sed dapibus quis, sit velit vestibul',
                justo: 'Integer sapien consectetur sodales int',
    };
    for (var key in secretObject) {
    ${sessionStorage.getItem('codeThirteenthLevel')};
    }
    `;
    switchingThirteenthLevel();
}
if (reserveObject.eget === 'Molestie sit nec vulputate habitasse pla' && reserveObject.eleifend === 'Sed dapibus quis, sit velit vestibul' && reserveObject.justo === 'Integer sapien consectetur sodales int') {
    reserveScrolls.classList.remove('hidden');
    buttonNext.classList.remove('disabled');
}


if (counter == 14) {
    setTimeout(()=>{
        controlCode.innerHTML = ` 
        secretObject = {
            lectus: 'Tortor, urna hac libero, sed o',
            amet: 'Ipsum sed vitae consectetur du',
            consectetur: 'Accumsan et. Sed non sed orci, nisi sed',
            arcu: 'Mattis id dictum. Justo nulla fauci',
            augue: 'Ut. Est. Dapibus in sed morbi tortor, vita',
            ornare: 'Dictum morbi et. Aenean aenean sed vi',
            eget: 'Molestie sit nec vulputate habitasse pla',
            eleifend: 'Sed dapibus quis, sit velit vestibul',
            justo: 'Integer sapien consectetur sodales int',
            };
        reserveObject = {
            lectus: 'Tortor, urna hac libero, sed o',
            amet: 'Ipsum sed vitae consectetur du',
            consectetur: 'Accumsan et. Sed non sed orci, nisi sed',
            arcu: 'Mattis id dictum. Justo nulla fauci',
            augue: 'Ut. Est. Dapibus in sed morbi tortor, vita',
            ornare: 'Dictum morbi et. Aenean aenean sed vi',
            eget: 'Molestie sit nec vulputate habitasse pla',
            eleifend: 'Sed dapibus quis, sit velit vestibul',
            justo: 'Integer sapien consectetur sodales int',
            };
        reserveEntrance = secretObject;
            ${sessionStorage.getItem('codeFourteenthLevel')}`;
    }, 200);
    switchingFourteenthLevel();
}

let reg14_1 = /alert\s*\(\s*reserveObject\s*\=\=\s*secretObject\s*\)/;
let valueInput14_1 = sessionStorage.getItem('codeFourteenthLevel');

let reg14_2 = /alert\s*\(\s*reserveEntrance\s*\=\=\s*secretObject\s*\)/;
let valueInput14_2 = sessionStorage.getItem('codeFourteenthLevel');

if (reg14_1.test(valueInput14_1) || reg14_2.test(valueInput14_2)) {
    buttonNext.classList.remove('disabled');
}

if (counter == 15) {
    controlCode.innerHTML = `
        secretObject = {
            lectus: 'Tortor, urna hac libero, sed o',
            amet: 'Ipsum sed vitae consectetur du',
            consectetur: 'Accumsan et. Sed non sed orci, nisi sed',
            arcu: 'Mattis id dictum. Justo nulla fauci',
            augue: 'Ut. Est. Dapibus in sed morbi tortor, vita',
            ornare: 'Dictum morbi et. Aenean aenean sed vi',
            eget: 'Molestie sit nec vulputate habitasse pla',
            eleifend: 'Sed dapibus quis, sit velit vestibul',
            justo: 'Integer sapien consectetur sodales int',
        };
        reserveEntrance = secretObject;
        ${sessionStorage.getItem('codeFifteenthLevel')}`;
    
    switchingFifteenthLevel();
}
if (secretObject === null || typeof secretObject !== 'object') {
    leftEntrance.classList.add('hidden');
    buttonNext.classList.remove('disabled');
}

if (counter == 16) {
    controlCode.innerHTML = `
    reserveEntrance = {
            lectus: 'Tortor, urna hac libero, sed o',
            amet: 'Ipsum sed vitae consectetur du',
            consectetur: 'Accumsan et. Sed non sed orci, nisi sed',
            arcu: 'Mattis id dictum. Justo nulla fauci',
            augue: 'Ut. Est. Dapibus in sed morbi tortor, vita',
            ornare: 'Dictum morbi et. Aenean aenean sed vi',
            eget: 'Molestie sit nec vulputate habitasse pla',
            eleifend: 'Sed dapibus quis, sit velit vestibul',
            justo: 'Integer sapien consectetur sodales int',
        };
        ${sessionStorage.getItem('codeSixteenthLevel')}`;
    
    switchingSixteenthLevel();            //
}
if (reserveEntrance === null || typeof reserveEntrance !== 'object') { 
    rightEntrance.classList.add('hidden');
    finalAnimation.classList.remove('hidden');
    drawFinalAnimation();
  
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
    if (counter == 1) {
        let code = enteredText.value;
        sessionStorage.setItem('codeFirstLevel', code);
        sessionStorage.setItem('counter', 1);
        location.reload(); 
    }
    if (counter == 2) {
        let code = enteredText.value;
        sessionStorage.setItem('codeSecondLevel', code);
        sessionStorage.setItem('counter', 2);
        location.reload(); 
    }
    if (counter == 3) {
        let code = enteredText.value;
        sessionStorage.setItem('codeThirdLevel', code);
        sessionStorage.setItem('counter', 3);
        location.reload(); 
    }
    if (counter == 4) {
        let code = enteredText.value;
        sessionStorage.setItem('codeFourthLevel', code);
        sessionStorage.setItem('counter', 4);
        location.reload(); 
    }
    if (counter == 5) {
        let code = enteredText.value;
        sessionStorage.setItem('codeFifthLevel', code);
        sessionStorage.setItem('counter', 5);
        location.reload(); 
    }
    if (counter == 6) {
        let code = enteredText.value;
        sessionStorage.setItem('codeSixthLevel', code);
        sessionStorage.setItem('counter', 6);
        location.reload(); 
    }
    if (counter == 7) {
        let code = enteredText.value;
        sessionStorage.setItem('codeSeventhLevel', code);
        sessionStorage.setItem('counter', 7);
        location.reload(); 
    }
    if (counter == 8) {
        let code = enteredText.value;
        sessionStorage.setItem('codeEighthLevel', code);
        sessionStorage.setItem('counter', 8);
        location.reload(); 
    }
    if (counter == 9) {
        let code = enteredText.value;
        sessionStorage.setItem('codeNinthLevel', code);
        sessionStorage.setItem('counter', 9);
        location.reload(); 
    }
    if (counter == 10) {
        let code = enteredText.value;
        sessionStorage.setItem('codeTenthLevel', code);
        sessionStorage.setItem('counter', 10);
        location.reload(); 
    }
    if (counter == 11) {
        let code = enteredText.value;
        sessionStorage.setItem('codeEleventhLevel', code);
        sessionStorage.setItem('counter', 11);
        location.reload(); 
    }
    if (counter == 12) {
        let code = enteredText.value;
        sessionStorage.setItem('codeTwelfthLevel', code);
        sessionStorage.setItem('counter', 12);
        location.reload(); 
    }
    if (counter == 13) {
        let code = enteredText.value;
        sessionStorage.setItem('codeThirteenthLevel', code);
        sessionStorage.setItem('counter', 13);
        location.reload(); 
    }
    if (counter == 14) {
        let code = enteredText.value;
        sessionStorage.setItem('codeFourteenthLevel', code);
        sessionStorage.setItem('counter', 14);
        location.reload(); 
    }
    if (counter == 15) {
        let code = enteredText.value;
        sessionStorage.setItem('codeFifteenthLevel', code);
        sessionStorage.setItem('counter', 15);
        location.reload(); 
    }
    if (counter == 16) {
        let code = enteredText.value;
        sessionStorage.setItem('codeSixteenthLevel', code);
        sessionStorage.setItem('counter', 16);
        location.reload(); 
    }
})


buttonNext.addEventListener('click', () => {
    if (!buttonNext.classList.contains('disabled') && counter == 1) {
        counter++;
        switchingSecondLevel();
    }
    if (!buttonNext.classList.contains('disabled') && counter == 2) {
        counter++;
        switchingThirdLevel();
    }
    if (!buttonNext.classList.contains('disabled') && counter == 3) {
        counter++;
        switchingFourthLevel();
    }
    if (!buttonNext.classList.contains('disabled') && counter == 4) {
        counter++;
        switchingFifthLevel();
    }
    if (!buttonNext.classList.contains('disabled') && counter == 5) {
        counter++;
        switchingSixthLevel();
    }
    if (!buttonNext.classList.contains('disabled') && counter == 6) {
        counter++;
        switchingSeventhLevel();
    }
    if (!buttonNext.classList.contains('disabled') && counter == 7) {
        counter++;
        switchingEighthLevel();
    }
    if (!buttonNext.classList.contains('disabled') && counter == 8) {
        counter++;
        switchingNinthLevel();
    }
    if (!buttonNext.classList.contains('disabled') && counter == 9) {
        counter++;
        switchingTenthLevel();
    }
    if (!buttonNext.classList.contains('disabled') && counter == 10) {
        counter++;
        switchingEleventhLevel();
    }
    if (!buttonNext.classList.contains('disabled') && counter == 11) {
        counter++;
        switchingTwelfthLevel();
    }
    if (!buttonNext.classList.contains('disabled') && counter == 12) {
        counter++;
        switchingThirteenthLevel();
    }
    if (!buttonNext.classList.contains('disabled') && counter == 13) {
        counter++;
        switchingFourteenthLevel();
    }
    if (!buttonNext.classList.contains('disabled') && counter == 14) {
        counter++;
        switchingFifteenthLevel();
    }
    if (!buttonNext.classList.contains('disabled') && counter == 15) {
        counter++;
        switchingSixteenthLevel();
    }  
});

arrowRight.addEventListener('click', () => {

    if (counter < 16) counter++ ;
    
    sessionStorage.setItem('testCounter', counter);

    if (counter == 1){
        
        switchingFirstLevel();
    }
    if(counter == 2){
        
        switchingSecondLevel(); 
    }
    if(counter == 3){
        
        switchingThirdLevel(); 
    }
    if(counter == 4){
        
        switchingFourthLevel(); 
    }
    if(counter == 5){
        
        switchingFifthLevel(); 
    }
    if(counter == 6){
        
        switchingSixthLevel(); 
    }
    if(counter == 7){
        
        switchingSeventhLevel(); 
    }
    if(counter == 8){
        
        switchingEighthLevel(); 
    }
    if(counter == 9){
        
        switchingNinthLevel(); 
    }
    if(counter == 10){
        
        switchingTenthLevel(); 
    }
    if(counter == 11){
        
        switchingEleventhLevel(); 
    }
    if(counter == 12){
        
        switchingTwelfthLevel(); 
    }
    if(counter == 13){
        
        switchingThirteenthLevel();
    }
    if(counter == 14){
        
        switchingFourteenthLevel();
    }
    if(counter == 15){
        
        switchingFifteenthLevel();
    }
    if(counter == 16){
       
        switchingSixteenthLevel();
    }
});

arrowLeft.addEventListener('click', () => {
    counter-- ;
    sessionStorage.setItem('testCounter', counter);
    
    if(counter == 0){
        
        switchingZeroLevel(); 
    }
    
    if(counter == 1){
        switchingFirstLevel(); 
    }
    if(counter == 2){
        switchingSecondLevel(); 
    }
    if(counter == 3){
        switchingThirdLevel(); 
    }
    if(counter == 4){
        switchingFourthLevel(); 
    }
    if(counter == 5){
        switchingFifthLevel(); 
    }
    if(counter == 6){
        switchingSixthLevel(); 
    }
    if(counter == 7){
        switchingSeventhLevel(); 
    }
    if(counter == 8){
        switchingEighthLevel(); 
        controlCode.innerHTML = '';
        sessionStorage.setItem('counter', 8);
        location.reload(); 
    }
    if(counter == 9){
        switchingNinthLevel();
    }
    if(counter == 10){
        switchingTenthLevel();
    }
    if(counter == 11){
        switchingEleventhLevel();
    }
    if(counter == 12){
        switchingTwelfthLevel(); 
    }
    if(counter == 13){
        switchingThirteenthLevel();
    }
    if(counter == 14){
        switchingFourteenthLevel();
    }
    if(counter == 15){
        switchingFifteenthLevel();
    }
});


buttonReset.addEventListener('click', () => {
    sessionStorage.setItem('counter', 1);
    location.reload(); 
});

