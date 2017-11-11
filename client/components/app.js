angular.module('pic-em', [])
  .component('app', {
    controller: function() {
    },

    template: `
      <div>
        <photo-display></photo-display>
        <photo-collection><photo-collection/>
      </div>
    `
  })
