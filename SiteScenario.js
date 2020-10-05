console.log("All systems successful run!");

var app = new Vue({
  el: '#mySite',
  data: {
	gfThx: false,
	message: 'Hello user ;)',
	choise: { All: true, Logos: false, Models: false, Sites: false },
	portfolio: [
		{ id:1, tag: "Logos", title: "Logo", color: "#597372" },
		{ id:2, tag: "Models", title: "3D model", color: "#D39F8A" },
		{ id:3, tag: "Sites", title: "Site", color: "#DAD1C2" }
	]
  },
  methods: {
	clearAll: function(list){

			this.choise = { All:true, Logos: false, Models: false, Sites: false };		
			
		},
	filterHandler: function(item,state){
			this.choise.All = false;
			if(this.choise.All == false && this.choise[item] == true){
				this.choise[item] = false;
			} else {
				this.choise[item] = true;
			}			

			if(state) {
				console.log(item,"Shift");
			}
		}
	}
});
/*
new Vue({
	el: '#Portfolio-main',
	data: function () {
	  return {
		choise: { Logo: true, Models: true, Sites: true },
		portfolio: [
			{ tag: "Logo", title: "Logo", color: "#597372" },
			{ tag: "Models", title: "3D model", color: "#D39F8A" },
			{ tag: "Sites", title: "Site", color: "#DAD1C2" }
		]
	  }
	},
	computed: {
		filteredChoise: function(){
			this.choise
		}
	},
	methods: {
		clearAll: function(){
			alert("tost");
			this.choise = { Logo: true, Models: true, Sites: true };
		}
	}
});*/



document.addEventListener("DOMContentLoaded",function(){
	let ovrlScrn = document.querySelector(".overlay-screen");
 
	setTimeout(function(){ ovrlScrn.style.opacity = 0; },2000); 
 	setTimeout(function(){ ovrlScrn.style.display = "none"; },3000); 
});

document.querySelector(".gform").addEventListener("submit",function(){	
	app.gfThx = true;
});

document.querySelector("#hidden_iframe").addEventListener("load",function(){if(app.gfThx) {
    /*window.location='/';*/ 
    setTimeout(function(){ app.gfThx = false; },10000); 
}});



