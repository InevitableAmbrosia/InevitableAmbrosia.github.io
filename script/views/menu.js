$(document).ready(function(){

	menu.thinkers.forEach(function(item){
		const li = document.createElement("li");
		const a = document.createElement("a");
		$(a).text(item)
		$(a).addClass("ANCHOR")
		$(a).addClass("vehicle")
		$(a).attr("href" , "#vehicle?path=" + item)
 		$(li).append(a)
 		$(".thinkers_menu").append(li)
	})
	menu.sutras.forEach(function(item){
		const li = document.createElement("li");
		const a = document.createElement("a");
		$(a).text(item)
		$(a).addClass("ANCHOR")
		$(a).addClass("vehicle")
		$(a).attr("href" , "#vehicle?path=" + item)
 		$(li).append(a)
 		$(".sutras_menu").append(li)
	})
	menu.buddhist_glossary.forEach(function(item){
		const li = document.createElement("li");
		const a = document.createElement("a");
		$(a).text(item)
		$(a).addClass("ANCHOR")
		$(a).addClass("vehicle")
		$(a).attr("href" , "#vehicle?path=" + item)
 		$(li).append(a)
 		$(".buddhist_menu").append(li)
	})
	menu.hermetic_glossary.forEach(function(item){
		const li = document.createElement("li");
		const a = document.createElement("a");
		$(a).text(item)
		$(a).addClass("ANCHOR")
		$(a).addClass("vehicle")
		$(a).attr("href" , "#vehicle?path=" + item)
 		$(li).append(a)
 		$(".hermetic_menu").append(li)
	})

	$(".nav_a").click(function(e){
		e.preventDefault();
		$(this).prev().toggle();
		$(this).prev().prev().toggle();
		$(this).next().slideToggle();

	})

	/* MOBILE */
	$("#ham").click(function(e){
		e.preventDefault();
		$(".mobile_menu").fadeToggle();
	})

	
})
