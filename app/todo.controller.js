(function() {
    'use strict';

    angular
        .module('app')
        .controller('TodoController', TodoController);

    TodoController.$inject = ['todoFactory'];

    /* @ngInject */
    function TodoController(todoFactory) {
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
            todoFactory.create({
            "name": vm.name,
            "priorityNum": vm.priority.number,

            })
            .then(function(data) {
              vm.items.push(data);
            });
        }

        activate();

        function activate() {
          todoFactory
            .getAll()
            .then(function(data){
              vm.items = data;
            });
        }

    }
})();
