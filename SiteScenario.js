console.log("All systems successful run!");

var app = new Vue({
  el: '#mySite',
  data: {
	gfThx: false,
	message: 'Hello user ;)',
	portfolio: [
		{ title: "Logo", color: "#597372" },
		{ title: "3D model", color: "#D39F8A" },
		{ title: "Site", color: "#DAD1C2" }
	]
  }
});

document.addEventListener("DOMContentLoaded",function(){
	let ovrlScrn = document.querySelector(".overlay-screen");
 
	setTimeout(function(){ ovrlScrn.style.opacity = 0; },2000); 
 	setTimeout(function(){ ovrlScrn.style.display = "none"; },5000); 
});

document.querySelector(".gform").addEventListener("submit",function(){	
	app.gfThx = true;
});

document.querySelector("#hidden_iframe").addEventListener("load",function(){if(app.gfThx) {
    /*window.location='/';*/ 
    setTimeout(function(){ app.gfThx = false; },10000); 
}});



