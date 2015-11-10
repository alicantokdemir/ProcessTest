'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .directive('uploadForm', function () {

  	var linker = function(scope, element, attr){

		scope.previewUrlList = [];
  		
  		element.on('fileuploadalways',function (e, data) {

  			if(data.result){

  				scope.uploaded = true;
  				scope.files = data.result;
  				scope.previewUrlList.push("http://fast.wistia.net/embed/iframe/"+ data.result.hashed_id + "?videoFoam=true");
  			}

  			else{
  				console.error(e);
  			}
  		})
  	};

    return {
    	restrict: 'E',
    	link: linker,
    	templateUrl: 'templates/form.html'
    }
  });
