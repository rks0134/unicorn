const settings = {
	async: true,
	crossDomain: true,
	url: 'https://distance-calculator.p.rapidapi.com/distance/simple?lat_1=47.373535&long_1=8.541109&lat_2=42.335321&long_2=-71.023516&unit=miles&decimal_places=2',
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'X-RapidAPI-Key': '29f8b12035msh5872cfa40f2b860p194015jsn1793c2231c42',
		'X-RapidAPI-Host': 'distance-calculator.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
