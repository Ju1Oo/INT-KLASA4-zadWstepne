let button = document.getElementById('formButton')
let mail = document.getElementById('email')
let uwagi = document.getElementById('uwagi')

button.addEventListener('click', showAlert)

function showAlert(){
    let alertMessage = mail.value + "\n"+ uwagi.value;
    window.alert(alertMessage);
}