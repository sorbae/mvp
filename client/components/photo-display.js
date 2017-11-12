angular.module('pic-em')
  .component('photoDisplay', {
    bindings: {
      display: '<',
      addToCollection: '<'
    },

    controller: function() {
    },

    template: `
      <div class="container display">
        <div>
          <button class="like" ng-click="$ctrl.addToCollection($ctrl.display)"></button>
          <img id="display" ng-src={{$ctrl.display.urls.regular}} />
        </div>
        <div class="description">
          <div class="description-details">
            <a ng-href="{{$ctrl.display.user.portfolio_url}}">{{$ctrl.display.user.name}}</a>
          </div>
          <div class="description-details">
            {{$ctrl.display.description}}
          </div>
        </div>
      </div>
    `

  })
