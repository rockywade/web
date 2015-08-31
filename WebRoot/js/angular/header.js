

var mainApp = angular.module('mainApp',['ui.router','mainApp.directive','mainApp.filter','mainApp.service','localytics.directives']);
	//var mainApp = angular.module('mainApp');
	mainApp.controller('resource',function($scope){
		$scope.showLoading = false;
	    $scope.rb = _rb;
	    $scope.rd = _rd;
	    $scope.base_path = base_path;
	    $scope.loadurl = "../common/uploadwaiting.html";
	    $scope.$on('$stateChangeError', 
	    		function(event, toState, toParams, fromState, fromParams, error){ 
	    	if(error.status==551){
	    		//window.location = base_path+"/login/";
	    	}
	    });
	    
	    $("#loading").bind("ajaxStart", function(event,jqxhr){ //使用bind
//	    	console.log(event);
	    	$scope.showLoading = true;
	    	$scope.$$phase||$scope.$apply();
	    }).ajaxStop(function(event){  //直接使用ajaxComplete
//	    	console.log(event);
	    	$scope.showLoading = false;
	    	$scope.$$phase||$scope.$apply();
	    });
	});
//if(navigator.appName == "Microsoft Internet Explorer"&&navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0"){
//	mainApp.config(function($sceProvider) {
//		  // Completely disable SCE to support IE7.
//		  $sceProvider.enabled(false);
//		});
//}