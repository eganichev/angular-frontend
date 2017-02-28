class SidebarController {
  constructor($scope, $state) {
    let vm = this;
    vm.name = 'sidebar';

    vm.menu = [
      { title: 'Home', name: 'home', url: '/', icon: 'ion-android-home', isSelected: false },
      { title: 'Sign In', name: 'signin', url: '/signin', icon: 'ion-log-in', isSelected: false },
      { title: 'Sign Up', name: 'signup', url: '/signup', icon: 'ion-person-add', isSelected: false }
    ];

    $scope.currentState = $state;
    $scope.$watch('currentState.current.url', function(newValue, oldValue) {
      vm.menu.forEach((item) => {
        item.isSelected = item.url == newValue;
      });
    });
  }
}

SidebarController.$inject = ['$scope', '$state'];

export default SidebarController;
