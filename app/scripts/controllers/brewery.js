(function () {
  'use strict';

  angular
    .module('cerevezaApp')
    .controller('BreweryCtrl', BreweryCtrl);

  BreweryCtrl.$inject = [];

  function BreweryCtrl() {
    var vm = this;

    vm.breweryModel = {};
    vm.saveBrewery = saveBrewery;

    init();

    function init(){

    }

    function saveBrewery(form) {

    }

  }

})();
