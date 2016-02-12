d3.json('https://www.quandl.com/api/v3/datasets/YAHOO/INDEX_DJI.json?auth_token=24rBLFWEzMszg2McQ3wz&start_date=2015-02-10', function (data) {
	var canvas = d3.select("body").append("svg")
		.attr("width", 50000)
		.attr("height", 8000)

	canvas.selectAll("rect")
		.data(data.dataset.data)
		.enter()
			.append("rect")
			.attr("width", function(d){ console.log(d[3]); return d[3] - 15300; })
			.attr("height", 30)
			.attr("y", function(d, i){ return i * 31;})
			.attr("fill","blue");

	canvas.selectAll("text")
		.data(data.dataset.data)
		.enter()
			.append("text")
			.attr("fill","yellow")
			.attr("y" , function(d,i){ return i * 31; })
			.text(function (d) {return d[0]; });
});