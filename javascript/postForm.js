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

let userId;

const USERS_URL = 'https://play-app-hurry.herokuapp.com/api/play'

const postForm = async () => {

    preloaderIn();
    const data = {};
    const formItems = document.querySelector('.form-sign-up').elements;
    console.log(formItems);

    for (let i=0; i < formItems.length - 1; i++){
        data[formItems[i].name] =  formItems[i].value;
        sessionStorage.setItem(formItems[i].name, formItems[i].value);
    }
    data.counter = 1;
    sessionStorage.setItem('counter', 1);

    

    const settings = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }

    try{
        const response = await fetch (USERS_URL, settings);
        const data = await response.json();
        preloaderOff();
        console.log(data);
        userId = data.id;
        sessionStorage.setItem('id', userId);
        counter = 1;
        switchingFirstLevel();
        
    } catch (e) {
        console.log(e);
    }
}
