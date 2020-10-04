console.log("All systems successful run!");


document.addEventListener("DOMContentLoaded",function(){
	let ovrlScrn = document.querySelector(".overlay-screen");
 
	setTimeout(function(){ ovrlScrn.style.opacity = 0; },2000); 
 setTimeout(function(){ ovrlScrn.style.display = "none"; },5000); 
});

document.querySelector("#hidden_iframe").onload = (if(submitted) {
    /*window.location='/';*/
    let thxForm = document.querySelector('.thx-form'); 
    thxForm.classList.toggle('thx-form__on'); 
    setTimeout(function(){ thxForm.classList.toggle('thx-form__on');},10000); 
});
