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


example.controller("ExampleController", function($scope, $ionicLoading, $cordovaMedia){
	var my_media = new Media(src,mediaStatusCallback, null,null);
	 
	$scope.play = function(src){
		$cordovaMedia.play(my_media);
		
	}
	$scope.pause = function(src){
		$cordovaMedia.pause(my_media);
	}
		var mediaStatusCallback = function(status){
		if(status==1) {
		$ionicLoading.show({template: 'Loading...'});
				}else {
				$ionicLoading.hide();
				}
		}
});
