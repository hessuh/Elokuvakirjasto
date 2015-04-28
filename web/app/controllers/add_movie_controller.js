MovieApp.controller('AddMovieController', function($scope, $routeParams, FirebaseService){

	$scope.addMovie = function(movie) {
        FirebaseService.addMovie(movie);
        //sortMovies();
	}



});