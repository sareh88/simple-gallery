//this example from my course list (JavaScript for Web Designers -3-working with forms)


// select the select menu and save it as var because we need to use it alot
var state = document.querySelector("#s-state");

// here we need to be sure that the page is downloaded and redy
document.addEventListener("DOMContentLoaded",function() {
// add event when we click the button and activatie (estimateTotal)
     document.querySelector("#cart-hplus").addEventListener("submit",estimateTotal);
// select the btn and save it as a variable
     var btnEstimate = document.querySelector("#btn-estimate");
     btnEstimate.disabled = true;
// add event for the select menu 
    state.addEventListener("change",function(){
           if (state.value == "" ) {
     	      btnEstimate.disabled = true;
         } else {
     	      btnEstimate.disabled = false;
         }

    })
 // setInterval() function we used it to make the time update 
 var currentTime = document.querySelector("#current-time");
 var currentDate = document.querySelector("#current-date");

 setInterval(updateTime, 1000);

 function updateTime() {
 	var d = new Date();

 	var hours = d.getHours();
 	var minutes = d.getMinutes();
 	var second = d.getSeconds();
// for the month we need to make a helper function to show us the months in names not in number
// we called it formatmonth 	
 	var month = formatMonth(d.getMonth());
 	var date = d.getDate();
 	if (minutes < 10){
 		minutes = "0" + minutes;
 	}

 	  currentTime.innerHTML = hours + ":" + minutes + ":" + second ; 
 	  currentDate.innerHTML = month  + " " + date ; 
 	}
//in this formatmonth we need to make sure is the number of month is beteen 0-11
// because in javascript january is the 0 month.
 function formatMonth (m){
    m = parseInt(m,10);
    if (m < 0) {
    	m = 0;
    }else if (m > 11) {
      m = 11;
    }
// we make a var = string of month names and return it to [m] so every number of the months will take a name 
 var monthNames = [
     'january','february','March','April','May','Jun','July','Augest','Sebruary',
     'October','Nuvember','December'
 ];

   return monthNames[m];
   }
});


function estimateTotal(event){
 event.preventDefault();
 
 if ( state.value === "") {
 	state.focus();
 }
 // we need to used parseIn()function to convert the value from string to number;
 // number 10 here is the max number we got from the string;
 // here we used || 0 to insure not got an "" empty string if the customer did't put a value;
 let itemBall = parseInt(document.querySelector("#txt-q-bball").value,10) || 0;
 let itemJersey = parseInt(document.querySelector("#txt-q-jersey").value,10) || 0;
 let itemPower = parseInt(document.querySelector("#txt-q-power").value,10) || 0;
 let minerealWater = parseInt(document.querySelector("#txt-water").value,10) || 0;
 let shippingState = state.value;
 let shippingMethod = document.querySelector("[type = 'radio']:checked").value;
 
 var totalQty = itemBall + itemJersey + itemPower + minerealWater;
 var shippingCostPer ;
 var shippingCost ;
 var taxFactor = 1;
 var totalItemOrice = (90 * itemBall) + (25 * itemJersey) + (30 * itemPower) + (4 * minerealWater);
 
 if (shippingState == "CA") {
 	taxFactor = 1.075;
 }else if (shippingState == "WA") {
    taxFactor = 1.065;
 }
  switch (shippingMethod) {
  	case 'usps' :
  	  shippingCostPer = 2;
  	  break;
  	case 'ups' :
  	  shippingCostPer = 3;
  	  break;
  	default :
  	shippingCostPer = 0;
  	break;    

  }

shippingCost = shippingCostPer * totalQty;
// we used  the function: toFixed(2) here to show 2 numper in cent like 123.44$ if we don't use 2 no cent will show; 
var estimate = "$" + ((totalItemOrice * taxFactor) + shippingCost).toFixed(2);


 document.querySelector('#text-estimate').value = estimate;

var results = document.querySelector("#results");

results.innerHTML = "total items: " + totalQty + "." +"<br>";
results.innerHTML += "total shipoing cost: $" + shippingCost.toFixed(2) + "<br>";
// we make her ((taxtfactor -1)*100) to conver tax from 1.075 to 7.5% 
results.innerHTML += " Tax: " + ((taxFactor - 1) * 100).toFixed(2) + "% (" + shippingState + ")";




}
//------------Google Maps API------//
//var mapsApiKey = AIzaSyAYg1EgqhyecWvaN36fGi_7yq0XJT4wGss;

var map;
function initMap() {
  let  myLocation = {lat: 52.4893692, lng: 13.3886518};
        map = new google.maps.Map(document.getElementById('map'), {
            'center' : myLocation ,
            'zoom' : 14
          
   });

  let popup = '<h1>bergmannstreet 5</h1>'
      popup += '<p>Berlin, Germany</p>'
      

    var infowindow = new google.maps.InfoWindow({
          content: popup
        });
          
    var marker = new google.maps.Marker({
          position: myLocation,
          map: map,
          title: 'deveugees!'
        });
     marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

 }
