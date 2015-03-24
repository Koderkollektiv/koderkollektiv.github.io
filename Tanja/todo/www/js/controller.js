// Controller

// In a real-life application, you would typically externalize the server parameters in a config module.

// angular.module('todo', ['ionic'])

angular.module('todo', ['ngResource'])

.factory('Session', function ($resource) {
    return $resource('http://localhost:5000/sessions/:sessionId');
});



.controller('SessionsCtrl', function($scope, Session) {
    $scope.sessions = Session.query();
})