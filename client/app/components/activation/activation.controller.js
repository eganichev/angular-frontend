class ActivationController {
  constructor($state, userService) {
    let vm = this;

    vm.name = 'activation';
    vm.code = '';
    console.log($state);
    vm.activate = function() {
      userService.activate($state.params.userId, vm.code).then(function(response) {
        console.log(response);
      }).catch(function(response) {
        console.log(response);
      });
    }
  }
}

ActivationController.$inject = ['$state', 'UserService'];

export default ActivationController;
