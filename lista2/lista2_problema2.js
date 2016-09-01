//Width and height
var margin = {top: 10, right: 20, bottom: 10, left: 20};
var width = 900 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

//
var generator  = d3.randomUniform(0, 1);
var colorScale = colorbrewer.Paired[12];
//			
var dataset = [];

function updateDataset(){
    
    var numPoints = 5;
    var newDataset = Array.apply(null, Array(numPoints)).map(function() { return generator(); });
    var totalSum = d3.sum(newDataset);
    newDataset =  newDataset.map(function(d){return d/totalSum;});
    
    dataset = newDataset;
}

function pieChart(probabilities, colors){
    //Codigo do problema 1
}

function renderDataset(){
    //Codigo para fazer insercao/remocao/update de elementos    
    //em algum momento voce provavelmente vai querer chamar algo como:
    //                                      pieChart(dataset,colorScale.slice(0,5))
    
}


function init(){
    //create clickable paragraph
    d3.select("body")
	.append("p")
	.text("Click on me!")
	.on("click", function() {
	    updateDataset();
	    renderDataset();
	});
    
    //Create SVG element
    var svg = d3.select("body")
	.append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    return svg;
}		  		  		  

//
var svg = init();
