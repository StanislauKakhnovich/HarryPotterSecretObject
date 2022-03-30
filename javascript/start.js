let languageUser = window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage;
let languageRender;



if (sessionStorage.getItem('languageRender') == null){

    if (languageUser == 'ru' || languageUser == 'ru-RU') {
        languageRender = 'ru';
        sessionStorage.setItem('languageRender', languageRender);
    }
    
    if (languageUser != 'ru-RU' && languageUser != 'ru') {
        languageRender = 'en';
        sessionStorage.setItem('languageRender', languageRender);
    }
}



let bottomEn = document.querySelector('#en');
let bottomRu = document.querySelector('#ru');

bottomEn.addEventListener('click', () => {
    languageRender = 'en';
    sessionStorage.setItem('languageRender', languageRender);
    sessionStorage.setItem('counter', counter);
    location.reload(); 
})

bottomRu.addEventListener('click', () => {
    languageRender = 'ru';
    sessionStorage.setItem('languageRender', languageRender);
    sessionStorage.setItem('counter', counter);
    location.reload(); 
})

languageRender = sessionStorage.getItem('languageRender');

let switchingLanguageButton = () =>{
    buttonsLanguage.forEach((elem) =>{
        document.querySelector(elem['id']).innerText = elem[languageRender];

    })
}

switchingLanguageButton();

let buttonSignUp = document.querySelector('#btn-sign-up');
let formSignUp = document.querySelector('.form-sign-up');


buttonSignUp.addEventListener('click', () => {
    formSignUp.classList.remove('hidden');
    formSignIn.classList.add('hidden');
   
});

let buttonSignIn = document.querySelector('#btn-sign-in');
let formSignIn = document.querySelector('.form-sign-in');

buttonSignIn.addEventListener('click', () => {
    formSignIn.classList.remove('hidden');
    formSignUp.classList.add('hidden');
});


