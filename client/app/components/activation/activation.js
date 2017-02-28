import angular from 'angular';
import uiRouter from 'angular-ui-router';
import activationComponent from './activation.component';

let activationModule = angular.module('activation', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('activation', {
      url: '/activation/:userId',
      component: 'activation'
    });
})

.component('activation', activationComponent)

.name;

export default activationModule;
