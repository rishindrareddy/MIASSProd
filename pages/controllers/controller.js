var myApp = angular.module('myApp', ['ngRoute']);
angular.module('myApp', ['ngPassword']);

myApp.config(function ($routeProvider) {
  $routeProvider

    .when('/dashboard', {
    templateUrl: '/dashboard.html',
    controller: 'controller'
  })

  .when('/tables', {
    templateUrl: 'pages/tables.html',
    controller: 'controller'
  })

  .when('/forms', {
    templateUrl: 'pages/forms.html',
    controller: 'controller'
  })

.when('/landing', {
    templateUrl: '/landing.html',
    controller: 'controller'
  })
.when('/login', {
    templateUrl: '/login.html',
    controller: 'controller'
  })
.when('/register',{
	templateUrl:'/register.html'	
})

/*
  .otherwise({
    redirectTo: '/login'
	// redirectTo: '/login'
	
  });
*/
});



myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from  angular controller");
	
/*
var refresh= function(){	
		$http.get('/contactlist').success(function(response) {
		
		console.log("i got my data");
		$scope.contactlist = response;
		$scope.contact = "";
		});
	};
	
refresh();	
*/




	
	$scope.addContact = function(){
		console.log($scope.contact);
		$http.post('/contactlist', $scope.contact).success(function(response){
		console.log(response);
		refresh();
	});
	};
	
	$scope.remove = function(id)
	{
	console.log(id);
	$http.delete('/contactlist/' + id).success(function(response) {
	refresh();
	});
	};
	
	$scope.edit = function(id)
	{
	console.log(id);
	$http.get('/contactlist/' + id).success(function(response) {
	$scope.contact=response;
	});
	};

$scope.update = function()
	{
	console.log($scope.contact._id);
	$http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response) {
refresh();
})	
	};
	
$scope.deselect = function() {
$scope.contact = "";
}	
	
	}]);