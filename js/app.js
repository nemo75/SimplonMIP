"use strict";
/* Initialisation de senna */
$(document).ready(function(){

var app = new senna.App();
    app.setBasePath('/');
    app.addSurfaces(['content', 'bandeau']);
    app.addRoutes(new senna.Route(/\w+\.html/, senna.HtmlScreen));
    senna.Screen.prototype.load = function() {

    	$.getJSON('https://smp.ovh/ppl.json', function(data){
			var template = $("#template").html();
			var info = Mustache.to_html(template, {users:data});
			$('.trombibi').html(info);
		});

    };

});
