

const postCounter = async () => {

    let userId = sessionStorage.getItem('userId');
    let nameUserData = sessionStorage.getItem('nameUser');
    let countryData = sessionStorage.getItem('country');
    let townData = sessionStorage.getItem('town');
    let mailData = sessionStorage.getItem('mail');
    let passwordData = sessionStorage.getItem('password');

    const settings = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nameUser": nameUserData,
            "country": countryData,
            "town": townData,
            "mail": mailData,
            "password": passwordData,
            "counter": counter

        })
    }

    try{
        const fetchRes = await fetch(`${USERS_URL}/${userId}`, settings);
        const data = await fetchRes.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}

buttonNext.addEventListener('click', postCounter);

