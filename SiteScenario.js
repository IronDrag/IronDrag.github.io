console.log("All systems successful run!");

var myApp = {
	loading: true,	
	gfThx: false,
	message: 'Tost text',
	tost: (function *gText(){
		yield 'Hello user ;)';
		yield 'Tost message';
		return 'Good bye!';
	})(),	
	portfolio:{		
		choise: {
			All: true,
			Design: false,
			Model: false,
			Web: false
		},
		items:[
			{ id:1, tag: "Design", title: "Logo", color: "#597372", labels: [ "Design", "Vector", "Logo" ] },
			{ id:2, tag: "Model", title: "Train", color: "#D39F8A", labels: [ "Model", "Low-poly", "Train" ] },
			{ id:3, tag: "Web", title: "Site", color: "#DAD1C2", labels: [ "Web", "Codding", "Site" ] },
			{ id:4, tag: "Web", title: "Web-dev", color: "#193441", labels: [ "Web", "CRM", "App" ] },
			{ id:5, tag: "Design", title: "Design", color: "#FF7F66", labels: [ "Design", "Web", "Site" ] },
			{ id:6, tag: "Model", title: "Car", color: "#91AA9D", labels: [ "Model", "Muscle", "Car" ] }			
		]
	} 
  };

Vue.component("gallery",{
	data(){
		return {
			
		}
	},
	props: [],	
	template: 	"<div>"+
					"<slot></slot>"+
				"</div>"
});
Vue.component("gallery-filter",{
	inject: ["filterHandler"],
	props: ['fTag','filtchoise'],
	template: 	"<ul class=\"Galery_ctrl\">"+
					"<slot></slot>"+
				"</ul>"
});
Vue.component("filter-item",{
	inject: ["filterHandler"],	
	props: ['fTag','filtchoise'],		
	template: 	"<li v-bind:class=\"{ _active: filtchoise }\" v-on:click.exact=\"filterHandler(fTag)\" v-on:click.shift.exact=\"filterHandler(fTag,true)\" >"+
					"{{ fTag }}"+
				"</li>"
});
Vue.component("gallery-item",{		
	props: ['item'],
	template: 	"<article class=\"Galery__item\" v-for=\"item in portfolio.items\" v-show=\"portfolio.choise[item.tag] || portfolio.choise.All\" v-bind:key=\"item.id\" v-bind:style=\"{ backgroundColor: item.color }\">"+
					"<div>"+
						"<h3>{{ item.title }}</h3>"+
						"<ul class=\"Tag-list\">"+
							"<li v-for=\"label in item.labels\" >{{ label }}</li>"+
						"</ul>"+
					"</div>"+
				"</article>"
});

var app = new Vue({
  el: '#mySite',
  data: myApp,
  methods: {	
	hello(t){
		this.message = this.tost.next().value;
		t.target.classList.remove("pointer");
	},
	filterCount(tost){			
		for (const item in this.portfolio.choise) {						
		  if(this.portfolio.choise[item] && item != tost) return true;		  
		}		
		return false;
	},	
	filterHandler(item,modK){
			if(item == "All"){
				this.portfolio.choise = { All:true, Design: false, Model: false, Web: false };
				return true;												
			}

			this.portfolio.choise.All = false;

			if(!modK) {				
				let tost = { All:false, Design: false, Model: false, Web: false };
				tost[item] = true;
				this.portfolio.choise = tost;		
				return true;
			} else {
				if(this.portfolio.choise.All == false && this.portfolio.choise[item] == true && this.filterCount(item)){								
					this.portfolio.choise[item] = false;
					return true;						
				} else {					
					this.portfolio.choise[item] = true;
					return true;
				}	
			}
		}
	},
	watch: {
		choise(tost){
			for (const item in this.portfolio.choise) {						
				if(this.portfolio.choise[item] && item != tost) return true;		  
			  }		
			  return false;
		}
	},
	provide: function(){
		return {
			filterHandler: this.filterHandler
		};
	}
});

document.body.style.overflow = "hidden";

document.addEventListener("DOMContentLoaded",function(){
	let ovrlScrn = document.querySelector(".overlay-screen");
	setTimeout(function(){ ovrlScrn.style.opacity = 0; },2000); 
	 setTimeout(function(){ 
		 ovrlScrn.style.display = "none"; 
		 document.body.style.overflowY = "auto";
	},3000);   	 
});

document.querySelector(".gform").addEventListener("submit",function(){	
	setTimeout(function(){
		console.dir(this);
		this.reset();}.bind(this),1000);
	gtag('event', 'contact');		
	app.gfThx = true;
});

document.querySelector("#hidden_iframe").addEventListener("load",function(){if(app.gfThx) {
    /*window.location='/';*/ 
    setTimeout(function(){ app.gfThx = false; },10000); 
}});



