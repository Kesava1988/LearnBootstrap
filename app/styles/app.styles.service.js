/**
 * Created by kesava on 10/24/2015.
 */
/**
 * Bootstrap required jQuery to handle dropdowns and collapse menu animations.
 * Since we decided to not use jQuery in this project, this service will have
 * the implementations for those.
 */

(function()
{
    'use strict';

    angular
        .module('bootstrap')
        .service('styleService',styleServiceFn);

    function styleServiceFn()
    {}

})()