angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $http, $ionicModal, $timeout,$state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
        // console.log($scope.loginData);
         $http.get('http://www.wrsolucoesinformatica.com/server.php?ident=login&username='+$scope.loginData.username+'&password='+$scope.loginData.password
            ).then(function (response){
              if(response.data.record.auth=='false'){
                $scope.loginData.errMsg ='Usuário ou Senha invalido..';
              }else{
                $state.go('app.playlists')
              }                
        });    
   };

   // Open the login modal
  $scope.logout = function() {
    $state.go('login');
  };

})

.controller('PlaylistsCtrl', function($scope,$http) {
  $http.get('http://www.wrsolucoesinformatica.com/server.php?ident=listUser'
        ).then(function (response){
               $scope.playlists = response.data.listUsuario;
               Console.log(response.data.listUsuario);           
        });    
  
  
  // $scope.playlists = [
  //   { title: 'Reggae', id: 1 },
  //   { title: 'Chill', id: 2 },
  //   { title: 'Dubstep', id: 3 },
  //   { title: 'Indie', id: 4 },
  //   { title: 'Rap', id: 5 },
  //   { title: 'Cowbell', id: 6 },
  //   { title: 'Reggae', id: 7 },
  //   { title: 'Chill', id: 8 },
  //   { title: 'Dubstep', id: 9 },
  //   { title: 'Indie', id: 10 },
  //   { title: 'Rap', id: 11 },
  //   { title: 'Cowbell', id: 12 },
  //   { title: 'Chill', id: 13 },
  //   { title: 'Dubstep', id: 14 },
  //   { title: 'Indie', id: 15 },
  //   { title: 'Rap', id: 16 },
  //   { title: 'Cowbell', id: 17 }
  // ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
