// Create a controller (attached to this module), and inject the studentFactory in it.
myApp.controller('studentsController', ['$scope', 'studentFactory', function ($scope, studentFactory){
    //  initialize an empty array so $scope.students maintains a consistent data type
    $scope.students = [];
    // run the getStudents method and set $scope data in the callback
    studentFactory.getStudents(function (data){
        $scope.students = data;
    })
}])
