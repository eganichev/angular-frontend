let LocationService = function ($http) {
  let headers = {Accept: 'application/vnd.api+json'}

  let getCountries = () => {
    return $http.get('//api.kayzor.com/v1/iso3166/countries', {headers}).then(function(response){
      return response.data.data;
    });
  };

  let getStates = (countryId) => {
    return $http.get(`//api.kayzor.com/v1/iso3166/countries/${countryId}/states`, {headers}).then(function(response){
      return response.data.data;
    });
  };

  let getCities = (countryId, stateId) => {
    return $http.get(`//api.kayzor.com/v1/iso3166/countries/${countryId}/states/${stateId}/cities`, {headers}).then(function(response){
      return response.data.data;
    });
  };

  return { getCountries, getStates, getCities };
};

LocationService.$inject = ['$http'];

export default LocationService;
