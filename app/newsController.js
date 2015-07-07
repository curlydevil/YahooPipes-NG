(function(){
    "use strict";
    angular.module("nasaNews").controller("NewsController", ["nasaNewsSource", NewsController]);

    function NewsController(nasaNewsSource){
        var vm = this;

        nasaNewsSource
            .getNews()
            .then(
                function(response){
                    vm.pipe = response.data.value;
                    vm.pipe.newsCount = response.data.count;
                },
                function(){
                    vm.pipe.title = "Sorry, error retrieving data. Please, try again later."
                });

        vm.togglePostDescription = function($index){
            vm.pipe.items[$index].show = !vm.pipe.items[$index].show;
        };
    }
}());
