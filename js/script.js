$(document).ready(() => {
  $('.list').on('click', () =>{
    $('.list').css('color', '#2fcfba');
    $('.calendar').css('color', 'black');
    $('#scheduleGraph').hide();
    $('#scheduleList').show();
  })
  $('.calendar').on('click', () =>{
    $('.calendar').css('color', '#2fcfba');
    $('.list').css('color', 'black');
    $('#scheduleGraph').show();
    $('#scheduleList').hide();
  })
});
