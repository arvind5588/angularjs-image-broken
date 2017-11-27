var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  $scope.url = "http://fineprintnyc.com/images/blog/history-of-logos/google/google-logo.png";
  
});

app.directive('onError', function() {
  return {
    restrict:'A',
    link: function(scope, element, attr) {
      element.on('error', function() {
        element.attr('src', attr.onError);
      })
    }
  }
})
