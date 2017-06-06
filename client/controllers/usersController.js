myApp.controller('usersController', ['$scope', 'usersFactory', '$routeParams', function ($scope, usersFactory, $routeParams){
  // console.log("ROUTE PARAMS: ", $routeParams, $routeParams.show);
  $scope.users = [];
  $scope.show_user = [];
  // CALLBACK:
  function setData(data){
    // console.log("CAllBACK: ", data)
    $scope.users = data;
    $scope.item = {};
  }
  // CALLBACK: SHOW USER
  function setUser(data){
    console.log("CAllBACK setUser: ", data)
    $scope.show_user = data;
  }
  // INDEX: SHOW - FUNCTION
  usersFactory.index(setData);
  // ADD - FUNCTION
  $scope.add = function(){
    // console.log("usersController: ", $scope.item)
    usersFactory.create($scope.item, setData);
    $scope.item = {};
  }
  // REMOVE - FUNCTION
  $scope.remove = function(data){
    // console.log("usersController: ", data._id)
    usersFactory.delete(data._id, setData);
    usersFactory.index(setData);
  }
  // SHOW - FUNCTION
  usersFactory.show($routeParams.show, setUser);
  // console.log("usersController: ", $routeParams.show)

}]);
