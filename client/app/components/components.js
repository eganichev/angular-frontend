import angular from 'angular';
import Home from './home/home';
import SignIn from './signin/signin';
import SignUp from './signup/signup';
import Activation from './activation/activation';

let componentModule = angular.module('app.components', [
  Home,
  SignIn,
  SignUp,
  Activation
])

.name;

export default componentModule;
