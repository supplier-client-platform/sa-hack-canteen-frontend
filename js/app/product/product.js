(function () {
    'use strict';

    angular.module('coreApp')
        .controller('ProductController', ProductController);

    function ProductController($scope, $rootScope, $http, $state, $timeout, $document, DTOptionsBuilder, ngGPlacesAPI, $uibModal, $log, BootsrapService, $stateParams, $filter, CommonService, ngToast, $base64) {
        console.log("prodcut called");

    }

})();