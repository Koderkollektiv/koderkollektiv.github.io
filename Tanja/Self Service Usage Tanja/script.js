var myStyles =[
	{	width: 200,
		name: 'tanja',
		color: 'blue'},

	{	width: 240,
		name: 'Anna',
		color: '#BD39D7'}

];

d3.selectAll('#chart').selectAll('div')
	.data(myStyles)
	.enter().append('div')
	.classed('item', true)
	.text (function (d) {
		return d.name;
	})
	.style ({
		'color': 'white',
		'background' : function (d) {
			return d.color;
		},
		'width' : function(d) {
			return d.width + 'px';
		}


	})

