var	firstLoad = true;

$(document).ready(function(){
	ANCHOR.route(ANCHOR.page() ? ("#" + ANCHOR.page() + (ANCHOR.page() === "vehicle" ? "?path=" + ANCHOR.getParams().path : "")) : "#white_lotus")
	initializePages();

})

$(document).on("ANCHOR", function(){
	$(".mobile_menu").hide();
	if(!firstLoad){
		initializePages();
	}
	firstLoad = false;
		
})

function initializePages(){
	switch(ANCHOR.page()){
		case "vehicle" :

			initializeVehicle();
			break;
		case "white_lotus":
			console.log("SWITCH")

			initializeWhiteLotus();
		default :
			break;
	}
}