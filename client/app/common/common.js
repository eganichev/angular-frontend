import angular from 'angular';
import Navbar from './directives/navbar/navbar';
import Sidebar from './directives/sidebar/sidebar';

import LocationService from './services/location/location';
import UserService from './services/user/user';

import User from './user/user';

let commonModule = angular.module('app.common', [
  Navbar,
  Sidebar,
  LocationService,
  UserService,
  User
])

.name;

export default commonModule;
