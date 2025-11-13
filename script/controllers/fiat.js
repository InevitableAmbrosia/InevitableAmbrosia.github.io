function fiat(){
	cars = [];
	nodes.forEach(function(node){
		const car = node.quotation.substr(0,1);
		cars.push(car)
	})
	
	checkGod();
	checkFiat();
	checkSaint();




	console.log(cars)			
	
	

	nodes.forEach(function(node){
		implementQuotation(node);
	})
}

var god = false;
var fiatLord = false;

function checkGod(){
	nodes.sort((a, b) => {
		return fiat_saint_complete.indexOf(a.quotation.substr(0,1)) - fiat_saint_complete.indexOf(b.quotation.substr(0,1));
	});
	var vehicle = "";
	nodes.forEach(function(node){
		var car = node.quotation.substr(0,1);
		vehicle += car;

		
	})
	if(vehicle.includes("GD")){
		god = true;
		return true;
	}
	else
		return false;
}

function checkFiat(){
	if(!god){
		nodes.sort((a, b) => {
			return fiat_complete.indexOf(a.quotation.substr(0,1)) - fiat_complete.indexOf(b.quotation.substr(0,1));
		});
		var vehicle = "";
		nodes.forEach(function(node){
			var car = node.quotation.substr(0,1);
			vehicle += car;

			
		})
		if(vehicle.includes("FIAT")){
			fiatLord = true;
			return true;
		}
		else
			return false;
	}
}

function checkSaint(){
	if(!god && !fiatLord){
		nodes.sort((a, b) => {
			return saint_complete.indexOf(a.quotation.substr(0,1)) - saint_complete.indexOf(b.quotation.substr(0,1));
		});
		var vehicle = "";
		nodes.forEach(function(node){
			var car = node.quotation.substr(0,1);
			vehicle += car;

			
		})
		console.log(vehicle);
		if(vehicle.includes("SAINT")){
			return true;
		}
		else
			return false;
	}
	
}

