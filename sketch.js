// declare arrays
var verbs = ["scared.","alone.","being judged.","nervous."]; // verbs for I am..
var adjectives = ["stupid.","ugly.","worthless.","boring.","a fuck up.",]; // adjectives for I am..
var response = ["fine.","okay.","not a freak.","not crazy."]; // response to negative comments

function setup() {
	createCanvas(windowWidth,windowHeight); // creates canvas to window size
	background(0); // bg is black
	textAlign(CENTER,CENTER); //text align is centered
}

function draw() {
	frameRate(5); // framerate is slowed
	textSize(50); // text size is set
	fill(255); // fill is white
	noStroke(); // text has no stroke
	var randoVerb = int(random(verbs.length)); // generate random number according to number of verbs
	var randoAdjective = int(random(adjectives.length)); // generate random number according to number of adjectives
	var randoResponse = int(random(response.length)); // generate random number according to number of responses
	
	// randomize Xs and Ys for positioning text
	var randomX = int(random(width));
	var randomY = int(random(height));
	var randomX2 = int(random(width));
	var randomY2 = int(random(height));
	var randomX3 = int(random(width));
	var randomY3 = int(random(height));
	
	var fullString2 = "I am... " + verbs[randoVerb]; // declare string variable 2
	text(fullString2,randomX,randomY); // output string 2 in random position
	stroke(0); // stroke is black
	strokeWeight(5); // stroke weight is 5px
	var fullString3 = "I am... " + adjectives[randoAdjective]; // declare string variable 3
	text(fullString3,randomX2,randomY2); // output string 3 in random position
	fill(255,0,0); // fill is red
	var fullString4 = "I am... " + response[randoResponse]; // declare string variable 4
	text(fullString4,randomX3,randomY3); // output string 4 in random position
	noStroke(); // no stroke
	textSize(100); // text is 100 in size
	fill(0); // fill is black
	var fullString= "I have anxiety..."; // declare string variable 1
  	text(fullString,width/2,height/2); // output string in center


	// pop-up
	//if(millis()>5 || millis()<10){
	//textSize(12);
	//fill(255);
	//rect(width-370,(height-190),140,45);
	
	//fill(0);
	//text("Wait for it.",width-300,height-170);
	//}
	//else {
	//no output
	//}
}