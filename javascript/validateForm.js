let nameUser = document.querySelector('#name');
let country = document.querySelector('#country');
let town = document.querySelector('#town');
let emailUp = document.querySelector('#e-mail-up');
let emailIn = document.querySelector('#e-mail-in');
let passwordUp = document.querySelector('#password-up');
let passwordIn = document.querySelector('#password-in');



let emptyField = function(){
    if(this.value.trim() == '') {
       this.nextElementSibling.style.display = 'inline-block';
       this.focus();
       } else {
       this.nextElementSibling.style.display = 'none';
       }  
};

let maxSizeString = function() {
    if(this.value.length > 30) {
        this.nextElementSibling.nextElementSibling.style.display = 'inline-block';
        this.focus();
    } else {
        this.nextElementSibling.nextElementSibling.style.display = 'none';
    }
};

nameUser.addEventListener('blur', emptyField);
nameUser.addEventListener('blur', maxSizeString);

country.addEventListener('blur', emptyField);
country.addEventListener('blur', maxSizeString);

town.addEventListener('blur', emptyField);
town.addEventListener('blur', maxSizeString);

emailUp.addEventListener('blur', emptyField);
emailUp.addEventListener('blur', maxSizeString);

passwordUp.addEventListener('blur', emptyField);
passwordUp.addEventListener('blur', maxSizeString);

emailIn.addEventListener('blur', emptyField);
emailIn.addEventListener('blur', maxSizeString);

passwordIn.addEventListener('blur', emptyField);
passwordIn.addEventListener('blur', maxSizeString);


validateEmailUp = () => {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let address = emailUp.value;
    if(reg.test(address) == false) {
        emailUp.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'inline-block';
        emailUp.focus();
        return false;
    } else {
        emailUp.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'none';
        return true;
    }
 }

emailUp.addEventListener('blur', validateEmailUp);

minSizePasswordUp = () => {
    if (passwordUp.value.length < 4){
        passwordUp.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'inline-block';
        passwordUp.focus();
        return false;
    } else {
        passwordUp.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'none';
        return true;
    }
}

passwordUp.addEventListener('blur', minSizePasswordUp);


formSignUp.addEventListener('submit', function (event) {
    event.preventDefault();
    let arrInput = formSignUp.querySelectorAll('input');
    let arrInputValue = [];
    arrInput.forEach((elem) => {
    arrInputValue.push(elem.value.trim());
    })

    if ( arrInputValue.every((elem) => {return (elem != '' && elem.length <= 30)})  && validateEmailUp() && minSizePasswordUp()) {
        postForm();
    }
    arrInput.forEach((elem) => {
        if(elem.value.trim() == '') {
            elem.nextElementSibling.style.display = 'inline-block';  
        } else {
                elem.nextElementSibling.style.display = 'none';
            }    
    })
    arrInput.forEach((elem) => {
        if(elem.value.length > 30) {
            elem.nextElementSibling.nextElementSibling.style.display = 'inline-block';  
        } else {
                elem.nextElementSibling.nextElementSibling.style.display = 'none';
            }  
    });
})


validateEmailIn = () => {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let address = emailIn.value;
    if(reg.test(address) == false) {
        emailIn.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'inline-block';
        emailUp.focus();
        return false;
    } else {
        emailIn.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'none';
        return true;
    }
 }

 emailIn.addEventListener('blur', validateEmailIn);


 formSignIn.addEventListener('submit', function (event) {
    event.preventDefault();
    let arrInput = formSignIn.querySelectorAll('input');
    let arrInputValue = [];
    arrInput.forEach((elem) => {
    arrInputValue.push(elem.value.trim());
    })

    if ( arrInputValue.every((elem) => {return (elem != '' && elem.length <= 30)})  && validateEmailIn()) {
        getCounter();
    }
    arrInput.forEach((elem) => {
        if(elem.value.trim() == '') {
            elem.nextElementSibling.style.display = 'inline-block';  
        } else {
                elem.nextElementSibling.style.display = 'none';
            }       
    })
    arrInput.forEach((elem) => {
        if(elem.value.length > 30) {
            elem.nextElementSibling.nextElementSibling.style.display = 'inline-block';  
        } else {
                elem.nextElementSibling.nextElementSibling.style.display = 'none';
            }  
    });
})
