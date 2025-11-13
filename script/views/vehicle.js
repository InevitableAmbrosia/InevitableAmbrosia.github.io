function initializeVehicle(){
	//page heading
	$(".page_heading").text(ANCHOR.getParams().path)
	refreshNodes();
	$("#quotations_container").empty();
	//quotations
	nodeIndexes = []
	graph.rels.forEach(function(rel){
		//descartes
		if(ANCHOR.page() === "vehicle" && ANCHOR.getParams() && rel.pages.indexOf(ANCHOR.getParams().path) > -1){
			var start = rel.start;
			var end = rel.end;
			var node_start = graph.nodes.find(node => node.index === start);
			var node_end = graph.nodes.find(node => node.index === end);
			if(notQuoted(node_start.index)){
				pushNode(node_start)
				pushIndex(node_start.index)

			}
			if(notQuoted(node_end.index)){
				pushNode(node_end);
				pushIndex(node_end.index);
			}

		}
	})
	fiat();
}

function implementQuotation(node){
	var div = document.createElement("div");
	$(div).addClass("quotation_div")
	

	var p = document.createElement("p");
	$(p).addClass("quotation")
	$(p).html(node.quotation)
	var src = document.createElement("p");
	$(src).addClass("src");
	$(src).text(" -- " + node.src);
	$(div).append(p);
	$(div).append("<br>")
	$(div).append(src);
	$("#quotations_container").append(div);
	
}


