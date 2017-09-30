(function () {
  'use strict';

  angular
    .module('cerevezaApp')
    .controller('ReservationCtrl', ReservationCtrl);

  ReservationCtrl.$inject = [];

  function ReservationCtrl() {
    var vm = this;

    vm.reservationModel = {};
    vm.saveReservation = saveReservation;

    init();

    function init(){

    }

    function saveReservation(form) {

    }

  }

})();
