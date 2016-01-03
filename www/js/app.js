'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);

$(document).ready(function(){
  $('.menu a').on('click', function(e){
    e.preventDefault();
    if(!$(this).parent().hasClass('active')){
      $('.menu li').removeClass('active');
      $(this).parent().addClass('active');
      $('.tabs-wrapper > div').addClass('hidden-tab');
      var tabLink = $(this).attr('href').slice(1);
      $('#' + tabLink).removeClass('hidden-tab');
    }

    google.maps.event.addDomListener(window, 'load', initialize);
  });

  $('.tabs-links-production a').on('click', function(e){
    e.preventDefault();
    if(!$(this).hasClass('active')){
      $('.tabs-links-production a').removeClass('active');
      $(this).addClass('active');
      $('.tabs-container-production > div').addClass('hidden-tab');
      var tabLink = $(this).attr('href').slice(1);
      $('#' + tabLink).removeClass('hidden-tab');
    }

  });
});