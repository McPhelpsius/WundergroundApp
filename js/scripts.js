document.addEventListener('DOMContentLoaded', function(){

	var forecastTemplateSource = document.getElementById('forecast-display').innerHTML,
		forecastTemplate = Handlebars.compile(forecastTemplateSource),
		errorTemplateSource = document.getElementById('error-display').innerHTML,
		errorTemplate = Handlebars.compile(errorTemplateSource),
		forecastForm = document.getElementById('submitZipcode'),
		context,
		display;
		
	forecastForm.onsubmit = function(e){
		e.preventDefault();

		var zip = document.getElementById('zip').value;

		$.ajax({
			url: 'http://api.wunderground.com/api/12449b9ce63b889e/forecast/q/'+zip+'.json',
			data: 'JSON',
			beforeSend: function(){
				$('#loader-overlay').show();
			}
		}).done(function(data){
			try{
				display = forecastTemplate(data.forecast.simpleforecast);
				document.getElementsByTagName('body')[0].className = data.forecast.simpleforecast.forecastday[0].conditions.toLowerCase();
			}
			catch (e){
				display = errorTemplate(data.response);
			}
			finally{
				$('#loader-overlay').hide();
				console.log(data);
			}
			
			document.getElementById('forecast-target').innerHTML = display;
		});

		
	};

});