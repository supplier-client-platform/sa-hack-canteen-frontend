(function () {
    'use strict';

    angular.module('coreApp')
        .controller('OrderController', OrderController);

    function OrderController($scope, $rootScope, $http, $state, $timeout, $document, DTOptionsBuilder, ngGPlacesAPI, $uibModal, $log, BootsrapService, $stateParams, $filter, CommonService, ngToast, $base64) {
        console.log("order called");

    }

})();