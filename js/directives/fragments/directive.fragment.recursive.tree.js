define(["factory.helper.recursive.tree"], function(factory){

    angular.module("App").factory('RecursionHelper', factory);

    return function(RecursionHelper){

	return {
	    restrict: "E",
	    scope: {family: '='},
	    templateUrl: "templates/fragments/fragment.layer.tree.html",
	    compile: function(element) {
		return RecursionHelper.compile(element);
	    }
	};
    
    };  
});