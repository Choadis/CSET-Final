$(document).ready(() => {
  $('#logInButton').on('click', () =>{
    var email = $('#email').val();
    var password = $('#password').val();
    var check = email.slice(-19);
    if (check === '@stevenscollege.edu' && password.length > 1){
    window.location.href = 'landing.html'
  };
    if (check != '@stevenscollege.edu' || password.length < 1){
    $('input[type=text]').effect('shake');
    $('input[type=password]').effect('shake');
    $('.mont16').show();
  };
})
  $('.passLink').on('click', () =>{
    $('#alert').addClass('alert');
    $('.forgot').show();
  })
  $('#forgot').on('click', () =>{
    var input = $('#reset1').val();
    var check = false;
    for(i=0; i<input.length; i++) {
      if (input.charAt(i) === '@') {
        check = true;
      }
    }
    if (check === true) {
      $('.forgot').hide();
      $('.forgot2').show();
    } else {
      $('input[type=text]').effect('shake');
      $('input[type=text]').css('border-color', 'red');
      alert('Incorrect Email address');
    }
  })
  $('#forgot2').on('click', () =>{
    var input = $('#street').val();
    if (input === 'Orange Street') {
      $('.forgot2').hide();
      $('.forgot3').show();
    } else {
      $('input[type=password]').effect('shake');
      $('input[type=password]').css('border-color', 'red');
    }
  })
  $('#forgot3').on('click', () =>{
    var input = $('#color').val();
    if (input === 'Maroon') {
      $('.forgot3').hide();
      $('.forgot4').show();
    } else {
      $('input').effect('shake');
      $('input').css('border-color', 'red');
    }
  })
})
