angular.module('starter.services', [])

.factory('userFactory', function($http) {
  var URL = "localhost:3000/"
  return {
    login: function doLogin(datos) {
      var consultaLogin = $http({
                            method: 'POST',
                            url: URL+'login',
                            data: datos
                          }).then(function successCallback(response) {
                              return response
                          }, function errorCallback(response) {
                              return response
                          });
      return consultaLogin
    },

    registro: function doRegistro(datos) {
      var consultaRegistro = $http({
                            method: 'POST',
                            url: URL+'users',
                            data: datos
                          }).then(function successCallback(response) {
                              return response
                          }, function errorCallback(response) {
                              return response
                          });
      return consultaLogin
    }
  }

});
