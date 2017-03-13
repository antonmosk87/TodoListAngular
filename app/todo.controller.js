(function() {
    'use strict';

    angular
        .module('app')
        .controller('TodoController', TodoController);

    TodoController.$inject = [];

    /* @ngInject */
    function TodoController() {
        var vm = this;


        vm.sortField = 'name';

        vm.items = [];


        vm.priorities = [{
                type: 'High',
                number: 3,
                style: "alert alert-danger"
            },
            {
                type: 'Medium',
                number: 2,
                style: "alert alert-warning"
            },
            {
                type: 'Low',
                number: 1,
                style: "alert alert-info"
            }
        ];

        vm.addItem = function() {
            vm.items.push(vm.newItem)
            vm.newItem = '';
        }

    }
})();
