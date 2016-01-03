'use strict';

/* Controllers */

var balanceApp= angular.module('balanceApp', []);

//menu controller
balanceApp.controller('MainMenuCtrl', function($scope){
  $scope.menuItems = [
    {'name': 'Главная', 'class': 'active fl-left', 'tab': 'home'},
    {'name': 'Мы умеем', 'class': 'fl-left', 'tab': 'we-can'},
    {'name': '', 'class': 'divider fl-left', 'tab': ''},
    {'name': 'Оборудование', 'class': 'fl-left', 'tab': 'production'},
    {'name': 'Контакты', 'class': 'fl-left', 'tab': 'contacts'}
  ];
});