angular.module('pic-em', [])
  .component('app', {
    controller: function(connectToServer) {

      this.picOfTheDay = ''
      this.userCollection = [];

      this.getPhotos = function() {
        connectToServer.getPhotos()
        .then(photo => console.log(JSON.parse(photo)))
        .catch(err => console.error(err));
      }

    },

    template: `
      <div>
        <button ng-click="$ctrl.getPhotos()">derp</button>
        <photo-display></photo-display>
        <photo-collection><photo-collection/>
      </div>
    `
  })
