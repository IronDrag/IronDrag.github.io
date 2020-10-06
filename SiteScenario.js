console.log("All systems successful run!");

var app = new Vue({
  el: '#mySite',
  data: {
	gfThx: false,
	message: 'Hello user ;)',
	choise: { All: true, Design: false, Model: false, Web: false },
	portfolio: [
		{ id:1, tag: "Design", title: "Logo", color: "#597372" },
		{ id:2, tag: "Model", title: "Train", color: "#D39F8A"},
		{ id:3, tag: "Web", title: "Site", color: "#DAD1C2" },
		{ id:4, tag: "Web", title: "Web-dev", color: "#193441" },
		{ id:5, tag: "Design", title: "Design", color: "#FF7F66" },
		{ id:6, tag: "Model", title: "Car", color: "#91AA9D" }
	]
  },
  computed: {
	  
  },
  methods: {
	filterCount: function(tost){			
		for (const item in this.choise) {						
		  if(this.choise[item] && item != tost) return true;		  
		}		
		return false;
	},	
	filterHandler: function(ev,item,modK){
			if(item == "All") {
				this.choise = { All:true, Design: false, Model: false, Web: false };								
			}

			this.choise.All = false;
			//console.dir(ev.path[0].classList.add("f__active"));
			
			if(this.choise.All == false && this.choise[item] == true && this.filterCount(item)){
				ev.path[0].classList.remove("f__active");				
				this.choise[item] = false;
			} else {
				ev.path[0].classList.add("f__active");
				this.choise[item] = true;
			}			

			if(modK) {
				console.log(item,"Shift");
			}
		}
	}
});

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



