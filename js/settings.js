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

// New primary phone number //
$('#editPhone').on('click', () =>{
$('#alert').addClass('alert');
$('.enterPhone').show();
})
$('#submitNewPhone').on('click', () =>{
  var phone = $('#phone').val();
  var verifyPhone = $('#verifyPhone').val();
  if (phone === verifyPhone){
  $('.enterPhone').hide();
  $('#phoneInput').text(verifyPhone);
  $('.enterPhone').hide();
  $('#alert').removeClass('alert');
} else {
  $('input[type=text]').effect('shake')
  $('.text1').show();
};
});

  // JQ for the 'New Home Address'
  $('#editHAddress').on('click', () =>{
    $('#alert').addClass('alert');
    $('.enterNewHAddress').show();
  });
  $('#submitHAddress').on('click', () =>{
    var hAddress = $('#newHAddress').val();
    var city = $('#newHAddressCity').val();
    var apt = $('#newHAddressApt').val();
    if (hAddress.length > 1) {
    $('.enterNewHAddress').hide();
    $('#hAddress').text(hAddress)
    $('#hApt').text(apt)
    $('#hCity').text(city)
    $('#alert').removeClass('alert');
  } if (apt.length < 1){
    $('#hApt').hide();
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
    var sAddress = $('#newSAddress').val();
    var city = $('#newSAddressCity').val();
    var apt = $('#newSAddressApt').val();
    if (sAddress.length > 1) {
    $('.enterNewSAddress').hide();
    $('#sAddress').text(sAddress)
    $('#apt').text(apt)
    $('#city').text(city)
    $('#alert').removeClass('alert');
  } if (apt.length < 1){
    $('#apt').hide();
  } else {
    $('input[type=text]').effect('shake');
  }
  });
  })
