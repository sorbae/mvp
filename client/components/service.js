angular.module('pic-em')
  .service('connectToServer', function($http) {

    this.getPhoto = () => $http.get('http://localhost:8080/dailyPic')
    this.getCollection = () => $http.get('http://localhost:8080/usercollection')
    this.addToCollection = (photo) => $http.post('http://localhost:8080/usercollection', {data: photo})
    this.removeFromCollection = (photoId) => $http.put('http://localhost:8080/usercollection', {data: photoId})

})
