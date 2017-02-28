import angular from 'angular';

class SignupController {
  constructor($state, locationService, userService) {
    let vm = this;

    vm.name = 'signup';

    vm.setCity = function(item) {
      vm.selectedCity = item.name;
      vm.model.location.city = item.id;
    };
    vm._cities = [];
    vm.getCities = function(value) {
      if(!vm.model.location.country || !vm.model.location.state) {
        return [];
      }

      if(!vm._cities.length) {
        locationService.getCities(vm.model.location.country, vm.model.location.state).then(function(cities) {
          vm._cities = cities.map(function(item) {
            return { name: item.attributes.city, id: item.id };
          });
        });
      }

      return vm._cities
    }
    vm.selectedCity = '';

    vm.setState = function(item) {
      vm.selectedCity = '';
      vm.model.location.city = null;
      vm._cities = [];
      vm.selectedState = item.name;
      vm.model.location.state = item.id;
    };
    vm._states = [];
    vm.getStates = function(value) {
      if(!vm.model.location.country) {
        return [];
      }

      if(!vm._states.length) {
        locationService.getStates(vm.model.location.country).then(function(states) {
          vm._states = states.map(function(item) {
            return { name: item.attributes.state, id: item.id };
          });
        });
      }
      return vm._states
    }
    vm.selectedState = '';

    vm.setCountry = function(item) {
      vm.selectedCity = '';
      vm.model.location.city = null;
      vm.selectedState = '';
      vm.model.location.state = null;
      vm._cities = [];
      vm._states = [];
      vm.selectedCountry = item.name;
      vm.model.location.country = item.id;
    };
    vm._countries = [];
    vm.getCountries = function(value) {
      if(!vm._countries.length) {
        locationService.getCountries().then(function(countries) {
          vm._countries = countries.map(function(item) {
            return { name: item.attributes.country, id: item.id };
          });
        });
      }
      return vm._countries
    }
    vm.selectedCountry = '';

    vm.openDatePopup = function() {
      vm.datePopup.opened = true;
    }
    vm.datePickerOptions = {
      showWeeks: false

    };
    vm.datePopup = {
      opened: false
    };

    vm.currencies = [
      {name: 'USD', title: 'USD'},
      {name: 'EUR', title: 'EUR'}
    ];

    vm.model = {
      email: 'hi@deividaspetraitis.lt',
      username: 'username',
      password: 'password',
      password_confirmation: 'password',
      personal_code: 123,
      currency: 'USD',
      gender: 'male',
      first_name: 'first name',
      last_name: 'last name',
      date_of_birth: new Date('1992-05-28'),
      location: {
          country: 4,
          state: 164,
          city: 6414
      },
      address: 'Address 1-12',
      phone_number: {
          code: '123',
          number : '00000000'
      },
      security_question: 'security question',
      security_answer: 'security answer',
      accept_terms: true
    };

    function handleErrors(errors) { //TODO helper
      var errorText = '';
      errors.forEach(function(error) {
        error.detail.forEach(function(errorMessage) {
          errorText += `${errorMessage}\n`;
        });
      });
      alert(errorText);
    }

    vm.signup = function() {
      var data = angular.copy(vm.model);
      data.date_of_birth = data.date_of_birth.toISOString().replace(/T.*/, '');
      userService.register(data).then(function(response) {
        alert('success');
        $state.go('activation', {userId: response.data.id});
      }).catch(function(response) {
        handleErrors(response.data.errors);
      });
    }
  }
}

SignupController.$inject = ['$state', 'LocationService', 'UserService'];

export default SignupController;
