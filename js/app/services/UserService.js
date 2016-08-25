function UserService($http) {
  this.getUser = function () {
    return $http.get('http://0.0.0.0:8882/rest/user')
  }

  this.updateUser = function() {
    return $http.post('http://0.0.0.0:8882/rest/user', {first_name: 'First', last_name: 'Last', email: 'qwe@asd.rty'});
  }
}

angular
	.module('app')
	.service('UserService', UserService);
