(function (app) {

    var DetailsController = function ($scope, $routeParams, contactService) {

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
    };

    DetailsController.$inject = ["$scope", "$routeParams", "contactService"];

    app.controller("DetailsController", DetailsController);

}(angular.module("ContactBook")));