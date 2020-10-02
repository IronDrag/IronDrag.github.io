console.log("All systems successful run!");


document.addEventListener("DOMContentLoaded",function(){
 let ovrlScrn = document.querySelector(".overlay-screen");
 ovrlScrn.style.opacity = 0;
 setTimeout(function(){ ovrlScrn.style.display = "none"; },2000);
 
});
