(function (app) {

    var contactService = function ($http, contactApiUrl) {

        var getAll = function () {
            return $http.get(contactApiUrl);
        };

        var getById = function (id) {
            return $http.get(contactApiUrl + id);
        };

        var create = function (contact) {
            return $http.post(contactApiUrl, contact);
        };

        var update = function (contact) {
            return $http.put(contactApiUrl + contact.Id, contact);
        };

        var destroy = function (contact) {
            return $http.delete(contactApiUrl + contact.Id);
        };

        return {
            getAll: getAll,
            getById: getById,
            create: create,
            update: update,
            delete: destroy
        };
    };

    contactService.$inject = ["$http", "contactApiUrl"];

    app.factory("contactService", contactService);

}(angular.module("ContactBook")));