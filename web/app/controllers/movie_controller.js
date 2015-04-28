MovieApp.controller('MovieController', function($scope, FirebaseService){

  $scope.movies = FirebaseService.getMovies();



	$scope.removeMovie = function(movie) {
		FirebaseService.removeMovie(movie);
	}

});