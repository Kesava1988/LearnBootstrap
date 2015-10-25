/**
 * Created by kesava on 10/24/2015.
 */
(function()
{
    'use strict';

    angular
        .module('bootstrap')
        .config(moduleConfig);

    function moduleConfig($routeProvider)
    {
        $routeProvider
            .when('/home',
            {
            })
            .otherwise(
            {
                redirectTo: '/home'
            });
    }
})();