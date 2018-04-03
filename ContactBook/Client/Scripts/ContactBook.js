(function () {
    var app = angular.module("ContactBook", ["ngRoute"]);

    var config = function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/list", { templateUrl: "/client/views/list.html" })
            .when("/create", { templateUrl: "/client/views/create.html" })
            .when("/details/:id", { templateUrl: "/client/views/details.html" })
            .when("/edit/:id", { templateUrl: "/client/views/edit.html" })
            .otherwise({ redirectTo: "/list" });
    };

    config.$inject = ["$routeProvider", "$locationProvider"];

    app.config(config);

    app.constant("contactApiUrl", "/api/contacts/");

}());