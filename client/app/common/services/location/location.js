import angular from 'angular';
import LocationService from './location.service';

let locationServiceModule = angular.module('location', [])

.service('LocationService', LocationService)

.name;

export default locationServiceModule;
