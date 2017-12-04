var d = new Date();
var days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
var months = ["JANUARY", "FEBUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
$(document).ready(() => {
 	$('.date').text(days[d.getDay()]+", "+months[d.getMonth()]+" "+ d.getDate()+", "+d.getFullYear());
 	$('#alert').on('click', () =>{
    	remove();
	});
 	$('.return').on('click', () =>{
    	remove();
	});
 	$('#logOut').on('click', () =>{
    	$('#alert').addClass('alert');
    	$('.logout').show();
	});
});
function remove() {
	$('#alert').removeClass('alert');
    $('.help1').hide();
    $('.help2a').hide();
    $('.help2b').hide();
    $('.help2c').hide();
    $('.help2d').hide();
    $('.logout').hide();
    $('.forgot').hide();
    $('.forgot2').hide();
    $('.forgot3').hide();
    $('.forgot4').hide();
    $('.emailPopUp').hide();
    $('.enterNewEmail').hide();
};
