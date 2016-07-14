{
  angular.module('meganote', [
    'ui.router',
    'ngFlash',
    'textAngular',
    'meganote.notes',
    'meganote.notesForm',
    'meganote.signUp',
    'meganote.signIn',
    'meganote.users'
  ])
    .run(run)
    .config(config);

  config.$inject = ['$urlRouterProvider'];
  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/notes/');
  }
  run.$inject = ['$rootScope', '$state'];
  function run($rootScope, $state){
    $rootScope.$on('$stateChangeError', ()=>{
      $state.go('sign-up');
    });
  }
}
