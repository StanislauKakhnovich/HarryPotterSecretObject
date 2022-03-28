let userId;

const USERS_URL = 'https://play-app-hurry.herokuapp.com/api/play'

const postForm = async () => {

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
        console.log(data);
        userId = data.id;
        sessionStorage.setItem('id', userId);
        counter = 1;
        switchingFirstLevel();
        
    } catch (e) {
        console.log(e);
    }
}
