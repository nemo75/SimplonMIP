"use strict";
var app = new senna.App();
    app.setBasePath('/');
    app.addSurfaces(['content', 'bandeau']);
    app.addRoutes(new senna.Route(/\w+\.html/, senna.HtmlScreen));