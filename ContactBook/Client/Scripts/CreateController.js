(function (app) {

    var CreateController = function ($scope, $location, contactService) {

        $scope.message = null;

        $scope.contact = {
            Id: null,
            Name: null,
            Age: null,
            Address: null
        };

        $scope.save = function (contact) {
            contactService.create(contact)
                .then(function (response) {
                    $scope.message = null;
                    $location.path("/list");
                })
                .catch(function (response) {
                    $scope.message = response.statusText;
                });
        };
    };

    CreateController.$inject = ["$scope", "$location", "contactService"];

    app.controller("CreateController", CreateController);

}(angular.module("ContactBook")));