$(function(){
  $("#container").on("click",".highlighted", function(){
  	$(this).find("p").toggleClass("price");
  });
 var stylingItem = $(".newstyle").css({
  	"height": "200px",
  	"width": "200px",
  	"background-color": "gray",
  	"margin": "0 auto"
  });
 stylingItem.toggle(3000);

});