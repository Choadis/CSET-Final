$(document).ready(() => {
$('#logInButton').on('click', () =>{
    var email = $('#email').val();
    var password = $('#password').val();
    var check = email.slice(-19);
    if (check === '@stevenscollege.edu' && password.length > 1)
    console.log('this is working');
    if (check != '@stevenscollege.edu' || password.length < 1)
    console.log('Incorrect Email address or password');
  })
})
