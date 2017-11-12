angular.module('pic-em')
  .component('collectionEntry', {
    bindings: {
      entry: '<',
      remove: '<'
    },

    template: `
      <div class="thumbnail">
        <button ng-click="$ctrl.remove($ctrl.entry.id)">x</button>
        <a ng-href="{{$ctrl.entry.url}}" class="link"><img ng-src="{{$ctrl.entry.thumbnail}}"></a>
      </div>
    `
  })
