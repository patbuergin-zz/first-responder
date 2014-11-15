// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
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
    });
});
