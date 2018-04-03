(function (app) {

    var EditController = function ($scope, $http, $routeParams, $location, contactService) {

        $scope.message = null;

        var id = $routeParams.id;

        contactService.getById(id)
            .then(function (response) {
                $scope.message = null;
                $scope.contact = response.data;
            })
            .catch(function (response) {
                $scope.message = response.statusText;
            });

        $scope.save = function (contact) {
            contactService.update(contact)
                .then(function (response) {
                    $location.path("/list");
                })
                .catch(function (response) {
                    $scope.message = response.statusText;
                });
        };
    };

    EditController.$inject = ["$scope", "$http", "$routeParams", "$location", "contactService"];

    app.controller("EditController", EditController);

}(angular.module("ContactBook")));