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
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    if (navigator.geolocation) {
      console.log("Getting Position...");
        navigator.geolocation.getCurrentPosition(function(position){
          console.log("Got Pos!");
          var geocoder = new google.maps.Geocoder();
          var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          geocoder.geocode({'latLng': latLng}, function(result, status){
            if(status === google.maps.GeocoderStatus.OK){
              console.log("RES: ", result);
              $rootScope.$apply(function(){
                console.log(result[0].formatted_address);
                $rootScope.position = result[0].formatted_address;
              });
            }
          });
        })
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
  });

});

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

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
    });
});


app.controller('SOSController', function($scope, $ionicNavBarDelegate, $rootScope) {
  console.log("In SosController");
  
});

app.controller('CompressionController', function($scope, $ionicNavBarDelegate, $rootScope) {
  console.log("In CanvasController");
  $rootScope.countdownStartTime = Date.now();
  
});
