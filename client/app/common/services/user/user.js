import angular from 'angular';
import UserService from './user.service';

let userServiceModule = angular.module('userServices', [])

.service('UserService', UserService)

.name;

export default userServiceModule;
