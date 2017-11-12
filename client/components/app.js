angular.module('pic-em', [])
  .component('app', {
    controller: function(connectToServer) {

      this.picOfTheDay = ''
      this.userCollection = [];

      this.getPhoto = () => {
        connectToServer.getPhoto()
        .then(photo => this.picOfTheDay = JSON.parse(photo.data))
        .catch(err => console.error('Get request error: ', err));
      }

      this.getUserCollection = () => {
        connectToServer.getCollection()
        .then(collection => this.userCollection = collection.data)
        .catch(err => console.log('Get request error: ', err))
      }

      this.addToCollection = photo => {
        connectToServer.addToCollection(photo)
        .then(response => this.userCollection.push(response.data))
        .catch(err => console.log('Could not add to user collection: ', err))
      }

      this.removeFromCollection = photoId => {
        connectToServer.removeFromCollection(photoId)
        .then(response => this.getUserCollection())
      }

      this.$onInit = () => {
        this.getPhoto();
        this.getUserCollection();
      }
    },

    template: `
      <div class="site">
        <div class="header">
          Pic'Em!
        </div>
        <photo-display class="container picOfTheDay" display="$ctrl.picOfTheDay" add-to-collection="$ctrl.addToCollection"></photo-display>
        <photo-collection class="container collection" collection="$ctrl.userCollection" remove-from-collection="$ctrl.removeFromCollection"></photo-collection>
      </div>
    `
  })
