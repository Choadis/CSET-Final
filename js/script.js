var d = new Date();
var days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
var months = ["JANUARY", "FEBUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
$(document).ready(() => {
  $('.date').text(days[d.getDay()]+", "+months[d.getMonth()]+" "+ d.getDate()+", "+d.getFullYear());
});