let errorSignIn = document.querySelector('#error8');

const getCounter = (event) => {
    
    let inputPassword = document.querySelector('#password-in').value; 
    let inputEmail = document.querySelector('#e-mail-in').value;

    fetch(USERS_URL).then(
        response => {
            return response.json();
        }
    ).then(
        data => {
            
                if (data.some(item => {return (item.password  == inputPassword && item.mail  == inputEmail)})) {
                    data.forEach(elem => {
                        if (elem.password == inputPassword) {
                            sessionStorage.setItem('userId', elem.id);
                            console.log(sessionStorage.getItem('userId'));
                            sessionStorage.setItem('nameUser', elem.nameUser);
                            sessionStorage.setItem('country', elem.country);
                            sessionStorage.setItem('town', elem.town);
                            sessionStorage.setItem('mail', elem.mail);
                            sessionStorage.setItem('password', elem.password);
                            sessionStorage.setItem('counter', elem.counter);
                            location.reload(); 
                        }  
                    })
                } 
                if (data.every(item => {return (item.password != inputPassword || item.mail  != inputEmail)})) {
                    errorSignIn.style.display = 'block';
                }
        }
    )  
}

