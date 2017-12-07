$(document).ready(() => {
  // Email alert //
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
    $('input[type=text]').effect('shake')
    $('.text1').show();
  }
  })
  $('#doneButton').on('click', () =>{
    $('#alert').removeClass('alert');
    $('.emailPopUp').hide();
  })
// Alt Phone alert //
  $('#editAltPhone').on('click', () =>{
  $('#alert').addClass('alert');
  $('.enterAltPhone').show();
})
$('#submitPhone').on('click', () =>{
  var phone = $('#altPhone').val();
  var verifyPhone = $('#verifyAltPhone').val();
  if (phone === verifyPhone){
  $('.enterAltPhone').hide();
  $('#altPhoneInput').text(verifyPhone);
  $('.enterAltPhone').hide();
  $('#alert').removeClass('alert');
} else {
  $('input[type=text]').effect('shake')
  $('.text1').show();
};
});

})
