angular.module('pic-em')
  .component('photoCollection', {
    bindings: {
      collection: '<',
      removeFromCollection: '<'
    },

    controller: function() {
      console.log(this);
    },

    template: `
      <div class="container collection-entries">
        <collection-entry entry="entry" ng-repeat="entry in $ctrl.collection" remove="$ctrl.removeFromCollection"></collection-entry>
      </div>
    `
  })
