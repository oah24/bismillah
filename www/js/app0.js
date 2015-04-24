// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var example = angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
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
})

.controller('PlayerCtrl', function($scope, $ionicPlatform, $cordovaMedia, $cordovaFile) {
  var directory = '/android_asset/www/mp3';
  var filename = '114.mp3';
  var media;  

  $scope.play = function() {
    return $ionicPlatform.ready(function() {})
    .then(function() {
      return $cordovaFile.checkFile(directory + '/' + filename);
    })
    .then(function(file) {
      media = $cordovaMedia.newMedia(file.nativeURL);
      $cordovaMedia.play(media);
    });
  };

  $scope.pause = function() {
    if (media)
    {
      $cordovaMedia.pause(media);
    }
  };

  $scope.rewind = function() {
    if (media)
    {
      $cordovaMedia.getCurrentPosition(media).then(function(res) {
      var mediaPosition = res - 15;
      var mediaInMilli = mediaPosition*1000;
      media.seekTo(mediaInMilli);
      });
    }
  };

  $scope.fastForward = function() {
    if (media)
    {
      $cordovaMedia.getCurrentPosition(media).then(function(res) {
      var mediaPosition = res + 15;
      var mediaInMilli = mediaPosition*1000;
      media.seekTo(mediaInMilli);
      });
    }
  };
}
