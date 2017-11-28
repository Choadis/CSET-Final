$(document).ready(() => {
  $('#startButton').on('click', () => {
    $('.coursesStart').addClass('none');
    $('.coursesBox').toggle('none');
  });
  $('#nextButton').on('click', () => {
    if ($('input[name=major]:checked').val() != undefined) {
      $('.coursesBox').toggle('none');
      $('.ddSection').removeClass('none');
    }
  });
  $('#cisCarot').on('click', () => {
    $('#cisDD').toggle('none');
    $('#engDD').addClass('none');
    $('#engDD').css('display', 'none');
  });
  $('#engCarot').on('click', () => {
    $('#engDD').toggle('none');
    $('#cisDD').addClass('none');
    $('#cisDD').css('display', 'none');
  });
  $('.helpButton').on('click', () =>{
    $('#alert').addClass('alert');
    $('.help1').show();
  })
  $('#alert').on('click', () =>{
    $('#alert').removeClass('alert');
    $('.help1').hide();
    $('.help2a').hide();
    $('.help2b').hide();
    $('.help2c').hide();
    $('.help2d').hide();
  })
  $('input[name=1]').on('click', () =>{
    if($('input[name=step1]:checked').val() === "1") {
      $('.help1').hide();
      $('.help2a').show();
    }
    if($('input[name=step1]:checked').val() === "2") {
      $('.help1').hide();
      $('.help2b').show();
    }
    if($('input[name=step1]:checked').val() === "3") {
      $('.help1').hide();
      $('.help2c').show();
    }
  })
  $('input[name=2c]').on('click', () =>{
    $('.help2c').hide();
    $('.help2d').show();
  })
  $('input[name=stop]').on('click', () =>{
    $('#alert').removeClass('alert');
    $('.help1').hide();
    $('.help2a').hide();
    $('.help2b').hide();
    $('.help2c').hide();
    $('.help2d').hide();
  })
});
