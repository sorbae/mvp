angular.module('pic-em')
  .component('collectionEntry', {
    bindings: {
      entry: '<'
    },

    template: `
      <div class="thumbnail">
        <a ng-href="{{$ctrl.entry.url}}"><img ng-src="{{$ctrl.entry.thumbnail}}"></a>
      </div>
    `
  })
