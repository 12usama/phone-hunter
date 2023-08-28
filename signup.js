document.getElementById('btn-submit').addEventListener('click', function(){
    const userNameField = document.getElementById('username');
    const userName = userNameField.value;
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    if(email === 'usamaalam3999@gmail.com' && password === 'secret'){
        window.location.href = 'index.html';
    }
    else{
        alert('Invalid email or password');
    }
})