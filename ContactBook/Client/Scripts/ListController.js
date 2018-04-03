(function (app) {

    var ListController = function ($scope, contactService) {
        $scope.message = null;

        contactService.getAll()
            .then(function (response) {
                $scope.message = null;
                $scope.contacts = response.data;
            })
            .catch(function (response) {
                $scope.message = response.statusText;
            });
    };

    ListController.$inject = ["$scope", "contactService"];

    app.controller("ListController", ListController);
    
}(angular.module("ContactBook")));