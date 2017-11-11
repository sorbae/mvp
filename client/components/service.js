angular.module('pic-em')
  .service('connectToServer', function($http) {
    this.getPhotos = () => {
      return $http.get('http://localhost:8080/hello')
    }
  })
