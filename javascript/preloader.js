let leftField = document.querySelector('#sidebar');
let rightField = document.querySelector('#view');
let preloaderHarry = document.querySelector('#preloader');

let preloaderIn = () => {
    leftField.classList.add('hidden');
    rightField.classList.add('hidden');
    preloaderHarry.classList.remove('hidden');
}

let preloaderOff = () => {
    leftField.classList.remove('hidden');
    rightField.classList.remove('hidden');
    preloaderHarry.classList.add('hidden');
}

if (sessionStorage.getItem('counter') === null) {
    var counter = 0;
} else {
    var counter = sessionStorage.getItem('counter');
}

if (counter < 1){
    preloaderIn();
    window.addEventListener('load', ()=>{
         setTimeout(preloaderOff, 400);
    });
}

