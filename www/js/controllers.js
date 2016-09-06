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

.controller('PlaylistsCtrl', function($scope,$http,$state) {
  // lita de usuarios
  $scope.playlists ={};
  $scope.UserData = {};
  $http.get('http://www.wrsolucoesinformatica.com/server.php?ident=listUser'
        ).then(function (response){
               $scope.playlists = response.data.listUsuario;
        }); 
     
  // Salvar usuario via Post
  $scope.doSalvar = function() {
      $http({
              method: 'POST',
              url: 'http://www.wrsolucoesinformatica.com/server.php?ident=addUser',
              data:{
                TX_NOME: $scope.UserData.TX_NOME,
                TX_LOGIN: $scope.UserData.TX_LOGIN,
                TX_SENHA: $scope.UserData.TX_SENHA,
                TX_EMAIL: $scope.UserData.TX_EMAIL
            },
              headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }
        ).then(function (response){
              $scope.UserData = {};
              $state.go('app.playlists');
              // console.log(response.data);
        });

       

  }   
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
