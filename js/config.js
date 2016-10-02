function config($stateProvider, $urlRouterProvider, ngGPlacesAPIProvider, $httpProvider, $mdThemingProvider) {


    $urlRouterProvider.otherwise("/app/product");
    $stateProvider

        .state("login", {
            url: '/login',
            abstract: false,
            views: {
                "main": {
                    templateUrl: 'pages/login/login.main.html',
                    controller: 'LoginController as lc'
                }
            }
        })
        .state("layout", {
            url: '/app',
            abstract: false,
            views: {
                "main": {
                    templateUrl: 'pages/layout.html',
                }
            }
        })
        .state("layout.product", {
            url: '/product',
            abstract: false,
            views: {
                "content": {
                    templateUrl: 'pages/products/product-list.html',
                    controller: 'ProductController as vm'

                }
            }
        })
        .state("layout.order", {
            url: '/orders',
            abstract: false,
            views: {
                "content": {
                    templateUrl: 'pages/orders/order-list.html',
                    controller: 'OrderController as vm'

                }
            }
        });



    ngGPlacesAPIProvider.setDefaults({
        radius: 5000,
        sensor: false,
        latitude: null,
        longitude: null,
        types: ['police'],
        map: null,
        elem: null,
        nearbySearchKeys: ['formatted_address', 'icon', 'geometry', 'name', 'reference', 'vicinity'],
        placeDetailsKeys: ['geometry', 'scope', 'formatted_address', 'formatted_phone_number',
            'reference', 'website'
        ],
        nearbySearchErr: 'Unable to find nearby places',
        placeDetailsErr: 'Unable to find place details'

    });

    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";



    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    /*
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};

*/

    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('blue');

}


angular
    .module('coreApp')
    .config(config)
    .run(function ($rootScope, $state, $base64, CommonService, uiSelectConfig, $templateCache) {
        $rootScope.loginInd = 0;
        $rootScope.$state = $state;

        $rootScope.loginInd = 0;



        $rootScope.loginInd = 0;
        $rootScope.userId = "";
        $rootScope.auth = "";
        //$base64.encode('ANURANGA:SRILANKAN');
        console.log("auth", $rootScope.auth);



        $state.go('login');

        uiSelectConfig.theme = 'select2';

    });