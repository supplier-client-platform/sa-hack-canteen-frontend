angular.module('coreApp')
    .service('BootsrapService', function ($uibModal) {
        var self = this;

        self.modal = function (modalObj) {

            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: modalObj.url,
                controller: modalObj.controller || '',
                size: modalObj.size || 'lg',
                scope: modalObj.scope || '',
                resolve: modalObj.resolve || {}
                /*{
                    items: function (){
                        return $scope.items;
                    } 
                } */
            });

            return modalInstance;

        }

    })
    .service('CommonService', function ($http, $q, $rootScope, ngToast, $mdToast) {

        this.saving = function () {

            var toast = ngToast.create({
                className: 'info  zoomInRight',
                content: ' <strong>Saving... Please Wait. </strong>',
                timeout: 100000,
                animation: 'slide'
            });



            /* var pinTo = "bottom right";
            var toast = $mdToast.simple()
            .textContent('Saving...')
    
            .highlightAction(true)
            .theme("md-primary")
            .capsule(false)
          // Accent is used by default, this just demonstrates the usage.
            .position(pinTo);
    
            $mdToast.show(toast);
            */



            /*  $mdToast.show({
            template: '<md-toast> <span flex> Saving...Please Wait </span>  </md-toast>',
            hideDelay: 60000,
            position: 'bottom right'
            });
            */
            return toast;

        };

        this.saved = function (t, msg) {
            ngToast.dismiss(t);
            var toast = ngToast.create({
                className: 'success  zoomInRight',
                content: ' <strong>Saved Successfully! ' + msg + ' </strong>',
                timeout: 10000,
                dismissButton: true,
                animation: 'slide'
            });


            /* $mdToast.hide();
    
            $mdToast.show({
            template: '<md-toast> <span flex> Success! </span>  </md-toast>',
            hideDelay: 6000,
            position: 'bottom right'
            });
    
            /*var pinTo = "bottom right";
            var toast = $mdToast.simple()
            .textContent('Success!')
            .action('CLOSE')
            .highlightAction(true)
          // Accent is used by default, this just demonstrates the usage.
            .position(pinTo);
    
            $mdToast.show(toast).then(function(response) {
    
            });
            */
            return toast;

        };

        this.error = function (t) {

            ngToast.dismiss(t);
            var toast = ngToast.create({
                className: 'danger  zoomInRight',
                content: ' <strong>Oops! Something went wrong.</strong> Please Call Asela (IT) 0772984626',
                timeout: 100000,
                dismissButton: true,
                animation: 'slide'
            });

            /* var pinTo = "bottom right";
            var toast = $mdToast.simple()
            .textContent('Something went wrong. Please try again')
            .action('CLOSE')
            .highlightAction(true)
          // Accent is used by default, this just demonstrates the usage.
            .position(pinTo);
    
            $mdToast.show(toast).then(function(response) {
               $mdToast.hide();
            });
            */

            /* 
            $mdToast.hide();
    
            $mdToast.show({
            template: '<md-toast> <span flex> Error! Please try again. </span>  </md-toast>',
            hideDelay: 60000,
            position: 'bottom right'
            });
            */
            return toast;


        };



    })
    .service('REST', function (urlConfig) {
        var url = urlConfig.url;
        this.services = {
            productList: url + "api/v1/product/all",
            productAdd: url + "api/v1/product/new",
            productRemove: url + "api/v1/product/delete/",
            productEdit: url + "api/v1/product/update/",

            orderAll: url + "api/v1/order/all",
            orderSpec: url + "api/v1/order/all",
            orderDetails: url + "api/v1/order/items/",
            orderUpdate: url + "api/v1/order/update/"
        };

    });
