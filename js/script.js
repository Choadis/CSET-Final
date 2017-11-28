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
var days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
var months = ["JANUARY", "FEBUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
$(document).ready(() => {
  $('.date').text(days[d.getDay()]+", "+months[d.getMonth()]+" "+ d.getDate()+", "+d.getFullYear());
});
$(document).ready(() => {
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