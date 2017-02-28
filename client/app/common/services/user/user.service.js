let UserService = function ($http) {
  let headers = {
    Accept: 'application/vnd.api+json',
    "Content-Type": 'application/vnd.api+json'
  }

  let register = (user) => {
    return $http.post('//api.kayzor.com/v1/users?include=roles,permissions', {
      data: {
        type: "users",
        attributes: user
      }
    }, {headers}).then(function(response){
      return response.data;
    });
  };

  let activate = (userId, code) => {
    return $http.patch(`//api.kayzor.com/v1/users/${userId}/activation/${code}`, {
      data: {
        type: "activation",
        id: userId,
        attributes: {
          completed: "true"
        }
      }
    }, {headers}).then(function(response){
      return response.data;
    });
  };

  return { register, activate };
};

UserService.$inject = ['$http'];

export default UserService;
