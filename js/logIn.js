$(document).ready(() => {
  $('#logInButton').on('click', () =>{
    var email = $('#email').val();
    var password = $('#password').val();
    var check = email.slice(-19);
    if (check === '@stevenscollege.edu' && password.length > 1){
    window.location.href = 'landing.html'
  };
    if (check != '@stevenscollege.edu' || password.length < 1){
    $('#emailForm').effect('shake')
    alert('Incorrect Email address or password');
  };
})
})
