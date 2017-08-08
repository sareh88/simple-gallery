const testWrapper = document.querySelector("#test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0 , 0 , 0, 0];
var interval=false;
var timerRunning = false;

// Add  zero to the minute part and second part when its smaller than 10:
function addZero(time) {
 if (time <= 9) {
 	time = "0" + time;
  }
  return time; 

}

// Run a standard minute/second/hundredths timer:
function runTimer() {
   theTimer.innerHTML = addZero(timer[0]) + ":" + addZero(timer[1]) + ":" + addZero(timer[2]);
   timer[3]++;

   //here we will do a math for a clock
   // notice: we choose in setInterval( ,10) wich mean 10 from 1000 pice of second
   timer[0] = Math.floor((timer[3]/100)/60);
   timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
   timer[2] = Math.floor(timer[3] - (timer[1]*100) - (timer[0] * 60));
}

// Match the text entered with the provided text on the page:
function spellCheck() {

    var textEntered = testArea.value;
    
    if (originText == textEntered ) {
    	clearInterval(interval);
    	interval = true;

      testWrapper.style.borderColor = "green";
       
    }else {
    	testWrapper.style.borderColor = "red";
    }
    
  }





	//var textEnterd = testArea.value;
	//var uncompletText = originText.substring(0,textEnterd.length);

	//if (textEnterd == originText) {
	//	testWrapper.style.borderColor = "green";
//	} //else if (textEnterd == uncompletText) {
      //testWrapper.style.borderColor = "#65ccf3";
	//}

 let test = 0; // this test = 0; to make the timer run a gain after we delete some letter in the box and start a gain; 

// Start the timer:
function start() {
	var textEnterdLength = testArea.value.length;
	if (textEnterdLength === 0 && !timerRunning){
      timerRunning = true;
	    interval = setInterval(runTimer, 10);
      test++;
	}
	
}

// Reset everything:
function reset(){
	clearInterval(interval);
	interval = false;
	timer = [0,0,0,0];
	timerRunning = false;

	
	testArea.value = "";
	theTimer.innerHTML = "00:00:00";
	testWrapper.style.borderColor = "grey";
}

// Event listeners for keyboard input and the reset button:
 testArea.addEventListener("keypress", start, false);
 testArea.addEventListener("keyup", spellCheck, false);
 resetButton.addEventListener("click", reset, false);
          