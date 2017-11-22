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
var d = new Date();
var days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"];
var months = ["JANUARY", "FEBUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
$(document).ready(() => {
  $('.date').text(days[d.getDay()]+", "+months[d.getMonth()]+" "+ d.getDay()+", "+d.getFullYear());
});