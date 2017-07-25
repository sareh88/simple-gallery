$(document).ready(function(){
	 
	$("#button").on("click",function(){
		var price = $("<p> the price is 1000$</p>");
		$(this).closest("#container").append(price);
		$(this).remove();

	})
   $("#show").click(function(){
	 $("#new").addClass("color");
	 $("#new").slideUp(3000).slideDown(3000);
	

	});
   $("button").on("click",function(){
   	var location = $(this).closest("#container");
   	var amount = location.data("price");
    var price = $("<span> the price from" + amount + "</span>" );
    location.append(price);
    $(this).remove();


   });
   $("#slide").slideUp(1000).slideDown(3000);

});