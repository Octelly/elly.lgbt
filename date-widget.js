function currentTime() {
	var date = new Date(); /* creating object of Date class */

	document.getElementById("clock").innerHTML = strftime('%H:%M:%S|%A %d.%m.|%b %Y'); /* adding time to the div */
	setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}
  
currentTime(); /* calling currentTime() function to initiate the process */