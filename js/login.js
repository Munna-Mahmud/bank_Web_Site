document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //get email and password
    if (userEmail == 'sontan@bap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html'

    }

});



