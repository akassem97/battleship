window.onload = function() {
	var audio = document.getElementsByTagName("audio")[1];
	var audio2 = document.getElementsByTagName("audio")[2];
	audio.volume = .5;
	audio2.volume = .5;
	slide();
	if (document.cookie.length != 0) {
		var audio = document.getElementsByTagName("audio")[1].volume;
		var audio2 = document.getElementsByTagName("audio")[2].volume;
		var backgroundM = document.getElementById("backgroundMusic").volume;
		var nameValueArray = document.cookie.split("=");
		
		audio.volume = nameValueArray[1];
		audio2.volume = nameValueArray[3];
		backgroundM.volume = nameValueArray[5];
	}
};

function createCookie(){
	var audio = document.getElementsByTagName("audio")[1].volume;
	var audio2 = document.getElementsByTagName("audio")[2].volume;
	var backgroundM = document.getElementById("backgroundMusic").volume;
	
	document.cookie = "audio=" + audio + ";audio2=" + audio2 + ";backgroundM=" + backgroundM + ";expires=Fri, 5 Aug 2020 01:00:00 UTC;";
}

function playclip() {

	var audio = document.getElementsByTagName("audio")[1];
	audio.play();

};

function onePlayer() {

	var audio = document.getElementsByTagName("audio")[2];
	var y = document.getElementById("options");
	y.style.display = "none";
	var z = document.getElementById("scores");
	z.style.display = "none";
	var a = document.getElementById("shipWindow");
	a.style.display = "block";
	var b = document.getElementById("divGrid2");
	b.style.display = "block";
	/*var x = document.getElementById("wholeGrid");
	x.style.display = "block";*/
	var start = document.getElementById("nameForm");
	start.style.display = "none";
	audio.play();

};

function options() {

	var audio = document.getElementsByTagName("audio")[2];
	var y = document.getElementById("options");
	var x = document.getElementById("optionsButton");
	x.style.display = "none";
	var w = document.getElementById("scoresButton");
	w.style.display = "none";
	var titleClass = document.getElementsByClassName("title")[0];
	var start = document.getElementById("start");
	var z = document.getElementById("close");
	start.style.display = "none";
	y.style.display = "block";
	z.style.display = "block";
	titleClass.style.display = "none";
	audio.play();
};

function hideOptions() {

	var x = document.getElementById("optionsButton");
	var w = document.getElementById("scoresButton");
	var z = document.getElementById("close");
	var audio = document.getElementsByTagName("audio")[2];
	var y = document.getElementById("options");
	var titleClass = document.getElementsByClassName("title")[0];
	var start = document.getElementById("start");
	x.style.display = "block";
	w.style.display = "block";
	start.style.display = "block";
	titleClass.style.display = "block";
	y.style.display = "none";
	z.style.display = "none";
	audio.play();
};

function scores() {

	var audio = document.getElementsByTagName("audio")[2];
	var x = document.getElementById("wholeGrid");
	x.style.display = "none";
	var y = document.getElementById("options");
	y.style.display = "none";
	var a = document.getElementById("shipWindow");
	a.style.display = "none";
	var z = document.getElementById("scores");
	z.style.display = "block";
	var b = document.getElementById("divGrid2");
	b.style.display = "none";
	var start = document.getElementById("nameForm");
	start.style.display = "none";
	audio.play(); //282.10.45.124

};

function musicToggle(cb) {

	/*alert("Clicked, new value = " + cb.checked);*/
	var audio = document.getElementById("backgroundMusic");

	if (cb.checked == true){
		audio.volume = 0;
	}
	else if (cb.checked == false){
		audio.volume = 1;
	}

};

function nameBox() {
	if (document.getElementById('fname').value == "") {
		alert("please enter name");
		return false;
	}
}

function soundFXToggle(cb) {

	var audio = document.getElementsByTagName("audio")[1];
	var audio2 = document.getElementsByTagName("audio")[2];

	if (cb.checked == true){
		audio.volume = 0;
		audio2.volume = 0;
	}
	else if (cb.checked == false){
		audio.volume = .5;
		audio2.volume = .5;
	}
};

function start() {

/*alert("Hi");*/
	var audio2 = document.getElementsByTagName("audio")[2];
	audio2.play();

	var show = document.getElementsByTagName("main")[0];
	show.style.display = "block";

	var mainTag = document.getElementsByTagName("main")[0];
	mainTag.style.animationName = "fadeIn";
};

function slide() {
	var titleClass = document.getElementsByClassName("title")[0];
	titleClass.style.animationName = "slide";
};

function shipSubmit() {
	var divGrid2 = document.getElementById("divGrid2");
	divGrid2.style.display = "none";
	var shipWindow = document.getElementById("shipWindow");
	shipWindow.style.display = "none";
	var audio = document.getElementsByTagName("audio")[2];
	var x = document.getElementById("wholeGrid");
	x.style.display = "block";
	audio.play();
}

/*
function exit() {

	var audio = document.getElementsByTagName("audio")[2];
	var x = document.getElementById("exit");
	x.style.display = "none";
	var x = document.getElementById("wholeGrid");
	x.style.display = "none";
	var y = document.getElementById("options");
	y.style.display = "none";
	var z = document.getElementById("scores");
	z.style.display = "none";
	audio.play();

};*/



