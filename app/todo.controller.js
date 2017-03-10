(function() {
    'use strict';

    angular
        .module('app')
        .controller('TodoController', TodoController);

    TodoController.$inject = [];

    /* @ngInject */
    function TodoController() {
        var vm = this;


        vm.items = [];

        vm.sort = [];

        vm.priorities = [
            ['High', 3, "alert alert-danger"],
            ['Medium', 2, "alert alert-warning"],
            ['Low', 1, "alert alert-info"]
        ];

        vm.addItem = function() {
            vm.items.push([vm.newItem, vm.priority[1], vm.priority[2]])
            vm.newItem = '';
        }
    }
})();
