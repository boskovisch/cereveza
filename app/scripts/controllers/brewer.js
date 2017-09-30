(function () {
  'use strict';

  angular
    .module('cerevezaApp')
    .controller('BrewerCtrl', BrewerCtrl);

  BrewerCtrl.$inject = [];

  function BrewerCtrl() {
    var vm = this;

    vm.brewerModel = {};
    vm.saveBrewer = saveBrewer;

    init();

    function init(){

    }

    function saveBrewer(form) {

    }

  }

})();
