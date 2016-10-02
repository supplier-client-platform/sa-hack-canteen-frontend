(function () {
    'use strict';

    angular.module('coreApp')
        .controller('OrderController', OrderController);

    function OrderController($scope, REST, $rootScope, $http, $state, $timeout, $document, DTOptionsBuilder, ngGPlacesAPI, $uibModal, $log, BootsrapService, $stateParams, $filter, CommonService, ngToast, $base64) {
        console.log("order called");
        var vm = this;

        vm.orders = [];
        construct();

        vm.orderD = [];

        vm.show = show;
        vm.update = update;

        function construct() {
            $http.get(REST.services.orderSpec).success(function (data) {
                vm.orders = data.orders;
                console.log(data);
            });
        }

        function show(id) {
            $http.get(REST.services.orderDetails + id).success(function (data) {

                console.log(data);
                vm.orderD = [];
            });
        }


        function update(id, status) {
            $http.post(REST.services.orderUpdate + id, { status: status }).success(function (data) {
                console.log(data);
                swal("success", "", "seccess");
            });
        }

    }

})();