"use strict";
$(document).ready(function(){

/* Initialisation de senna */

	var app = new senna.App();
	    app.setBasePath('/');
	    app.addSurfaces('content');
	    app.addRoutes(new senna.Route(/\w+\.html/, senna.HtmlScreen));

/* Récupération des informations pour le trombinoscope */

	$.getJSON('https://s.idsympa.com/u-13.json', function(data){
		var template = $("#template").html();
		console.log(template)
		var info = Mustache.to_html(template, data);
		$('.perso').html(info);
	});
});
	


