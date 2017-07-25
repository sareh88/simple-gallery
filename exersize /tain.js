$(document).ready(function(){
// $("#btn1").on("click",function(){
// 	$("#panel1").fadeToggle(200);
//
// });
//  $("#btn2").on("click",function(){
// 	$("#panel2").fadeToggle(200);
//
// });
// $("#btn3").on("click",function(){
// 	$("#panel3").fadeToggle(200);
//
// });
// $("#btn4").on("click",function(){
// 	$("#panel4").fadeToggle(200);
//
//});
////now on moseover
//$("#btn1").on("mouseover",function(){
// 	$("#panel1").fadeOut(200);
//
// });
//  $("#btn2").on("mouseover",function(){
// 	$("#panel2").fadeIn(200);
//
// });
// $("#btn3").on("mouseover",function(){
// 	$("#panel3").fadeToggle(200);
//
// });
// $("#btn4").on("mouseover",function(){
// 	$("#panel4").fadeToggle(200);
//
//});
//
// to clean your code we can do tthis
$('.pannel-button').on('click',function(){
	var panelNr = $(this).attr('data-panelId');

	panelNr.fadeToggle();

});


});