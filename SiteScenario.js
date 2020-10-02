console.log("All systems successful run!");


document.addEventListener("DOMContentLoaded",function(){
 let ovrlScrn = document.querySelector(".overlay-screen");
 setTimeout(function(){ ovrlScrn.style.opacity = 0; },3000);
 
 setTimeout(function(){ ovrlScrn.style.display = "none"; },5000);
 
});
