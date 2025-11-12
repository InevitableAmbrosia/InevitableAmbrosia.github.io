function initializeVehicle(){
	//page heading
	$(".page_heading").text(ANCHOR.getParams().path)
	refreshNodes();
	$("#quotations_container").empty();
	//quotations
	graph.rels.forEach(function(rel){
		//descartes
		console.log(rel)
		if(ANCHOR.page() === "vehicle" && ANCHOR.getParams() && rel.pages.indexOf(ANCHOR.getParams().path) > -1){
			var start = rel.start;
			var end = rel.end;
			var node_start = graph.nodes.find(node => node.index === start);
			var node_end = graph.nodes.find(node => node.index === end);
			if(notQuoted(node_start.index)){
				implementQuotation(node_start);
			}
			console.log(node_end.index)
			if(notQuoted(node_end.index)){
				implementQuotation(node_end);
			}

		}
	})
}

function implementQuotation(node){
	var div = document.createElement("div");
	$(div).addClass("quotation_div")
	var str = document.createElement("span");
	$(str).addClass("highT");
	$(str).text(node.quotation.substr(0,1))
	var p = document.createElement("p");
	$(p).addClass("quotation")
	$(p).html(node.quotation.substr(1, node.quotation.length - 1))
	var src = document.createElement("span");
	$(src).addClass("src");
	$(src).text(" -- " + node.src);
	$(div).append(str);
	$(div).append(p);
	$(div).append("<br><br><br><br><br><br><br>")
	$(div).append(src);
	$("#quotations_container").append(div);
	pushNode(node.index);
}


