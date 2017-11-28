$(document).ready(() => {
  $('#startButton').on('click', () => {
    $('.coursesStart').addClass('none');
    $('.coursesBox').toggle('none');
  });
  $('#nextButton').on('click', () => {
    $('.coursesBox').toggle('none');
    $('.ddSection').removeClass('none');
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
});
