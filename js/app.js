"use strict";
var app = new senna.App();
    app.setBasePath('/');
    app.addSurfaces('content');
    app.addRoutes(new senna.Route(/\w+\.html/, senna.HtmlScreen));