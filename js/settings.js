$(document).ready(() => {
  $('#editEmail').on('click', () =>{
  $('#alert').addClass('alert');
  $('.enterNewEmail').show();
  })
  $('#submitEmail').on('click', () =>{
    var email = $('#email').val();
    var verify = $('#verify').val();
    if (email === verify && email.length > 1){
    $('.enterNewEmail').hide();
    $('.emailPopUp').show();
    $('#altEmail').text(verify);
  } else {
    $('.text1').show();
  }
  })
  $('#doneButton').on('click', () =>{
    $('#alert').removeClass('alert');
    $('.emailPopUp').hide();
  })
})
