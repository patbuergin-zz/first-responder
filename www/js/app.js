// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform, $rootScope) {

  $rootScope.position  = null;

  $rootScope.countdownStartTime = null;

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    /*if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }*/
    if(window.StatusBar) {
      StatusBar.style(1);
    }

    if (navigator.geolocation) {
      console.log("Getting Position...");
      navigator.geolocation.getCurrentPosition(function(position){
        console.log("Got Pos!");
        var geocoder = new google.maps.Geocoder();
        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        geocoder.geocode({'latLng': latLng}, function(result, status){
          $rootScope.$apply(function(){
            if(status === google.maps.GeocoderStatus.OK){
              console.log(result[0].formatted_address);
              $rootScope.position = result[0].formatted_address;
            } else if (status === google.maps.GeocoderStatus.ERROR){
              console.log("Error retreiving Address from API");
              $rootScope.position = "Beschreiben Sie ihre Position";
            }
          });
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  });

});

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('consciousness', {
      url: '/',
      templateUrl: 'templates/consciousness.html'
    })
    .state('shake', {
      url: '/shake',
      templateUrl: 'templates/shake.html'
    })
    .state('stretch', {
      url: '/stretch',
      templateUrl: 'templates/stretch.html'
    })
    .state('breath', {
      url: '/breath',
      templateUrl: 'templates/breath.html'
    })
    .state('sos', {
      url: '/sos',
      templateUrl: 'templates/sos.html'
    })
    .state('compression', {
      url: '/compression',
      templateUrl: 'templates/compression.html'
    })
    .state('compression-guide', {
      url: '/compression-guide',
      templateUrl: 'templates/compression-guide.html'
    })
    .state('lateral', {
      url: '/lateral',
      templateUrl: 'templates/lateral.html'
    })
    .state('unconscious', {
      url: '/unconscious',
      templateUrl: 'templates/unconscious.html'
    })
    .state('awake', {
      url: '/awake',
      templateUrl: 'templates/awake.html'
    })
    .state('responsive', {
      url: '/responsive',
      templateUrl: 'templates/responsive.html'
    });
});


app.controller('ConsciousnessController', function($scope, $ionicNavBarDelegate, $rootScope) {

});
app.controller('SOSController', function($scope, $ionicNavBarDelegate, $rootScope) {
  console.log("In SosController");

});

app.controller('CompressionController', function($scope, $ionicNavBarDelegate, $rootScope) {
  console.log("In CanvasController");
  $rootScope.countdownStartTime = Date.now();

});

app.controller('LateralController', function($scope, $ionicNavBarDelegate, $rootScope) {
  console.log("In LateralController");

});

app.controller('CompressionGuideController', function($scope, $ionicNavBarDelegate, $rootScope) {
  $scope.audio = audio;
  $scope.radius = 0;
  $scope.opacity = 1;
  //var myMedia = new Media("sound/bass.ogg");
  window.setInterval(function() {
    var cDT = new Date(Date.now() - $rootScope.countdownStartTime);
    var cDM = cDT.getMinutes();
    var cDS = cDT.getSeconds();
    $scope.countdownMin = cDT.getMinutes();
    $scope.countdownSec = cDT.getSeconds();
    if (cDS < 10) {
      $scope.countdownSec = "0" + cDS;
    } else {
      $scope.countdownSec = cDS;
    }

    if (cDM < 10) {
      $scope.countdownMin = "0" + cDM;
    } else {
      $scope.countdownMin = cDM;
    }

    $scope.$apply(function(){
      $scope.radius = ($scope.radius + 20) % 200;
      $scope.opacity = (200 - $scope.radius) / 200;
      if ($scope.radius == 0){ //&& myMedia != null){
        //myMedia.stop();
        //myMedia.play();
        $scope.audio.pause();
        $scope.audio.currentTime = 0;
        $scope.audio.play();
      }
    });
  }, 600 / 10);
});
