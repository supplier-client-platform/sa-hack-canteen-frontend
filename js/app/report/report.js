(function () {
    'use strict';

    angular.module('coreApp')
        .controller('ReportController', ReportController);

    function ReportController($scope, REST, $rootScope, $http, $state, $timeout, $document, DTOptionsBuilder, ngGPlacesAPI, $uibModal, $log, BootsrapService, $stateParams, $filter, CommonService, ngToast, $base64) {
        console.log("report called");

        var vm = this;

        var img = "https://www.youmagine.com/assets/placeholder-4232c9c79bc795997e7c7d4457b3725ee5f0fb55197114169a60a534105902fb.png";
        vm.products = [];
        vm.editStatus = "save";
        vm.editStatusEvent = editStatusEvent;


        vm.add = add;
        vm.remove = remove;
        vm.edit = edit;
        construct();

        $scope.product = {
            img_url: img,
            name: "",
            price: ""
        }

        function editStatusEvent(param) {
            vm.editStatus = "save";
            $scope.product = {
                img_url: img,
                name: "",
                price: ""
            }
        }

        function add() {
            var url = (vm.editStatus == "save") ? REST.services.productAdd : REST.services.productEdit + $scope.product.id;
            $http.post(url, $scope.product).success(function (data) {
                console.log(data);
                construct();
                $("#myModal").modal('hide');
            });
        }
        function remove(id) {
            swal({ title: "Are you sure?", text: "You will not be able to recover this imaginary file!", type: "warning", showCancelButton: true, confirmButtonColor: "#DD6B55", confirmButtonText: "Yes, delete it!", closeOnConfirm: false },
                callBack);

            function callBack() {
                $http.get(REST.services.productRemove + id).success(function (data) {
                    console.log(data);
                    construct();
                    swal("Deleted!", "Your imaginary file has been deleted.", "success");
                });
            }
        }

        function edit(obj) {
            vm.editStatus = "edit";
            $scope.product = obj;

        }

        function construct() {
            $http.get(REST.services.productList).success(function (data) {

                vm.products = data.products;
                console.log("products", vm.products);
            });
        }


    }

})();