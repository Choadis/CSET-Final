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
  // JQ for the 'New Home Address'
  $('#editHAddress').on('click', () =>{
    $('#alert').addClass('alert');
    $('.enterNewHAddress').show();
  });
  $('#submitHAddress').on('click', () =>{
    var hAddress = $('#hAddress').val();
    if (hAddress.length > 1) {
    $('.enterNewHAddress').hide();
    $('.hAddressPopup').show();
  } else {
    $('input[type=text]').effect('shake');
  }
});
// JQ for the 'New School Address'
  $('#editSAddress').on('click', () =>{
    $('#alert').addClass('alert');
    $('.enterNewSAddress').show();
  });
  $('#submitSAddress').on('click', () =>{
    var sAddress = $('#sAddress').val();
    if (sAddress.length > 1) {
    $('.enterNewSAddress').hide();
    $('.sAddressPopup').show();
  } else {
    $('input[type=text]').effect('shake');
  }
  });
