(function(){
    "use strict";
    angular.module("nasaNews").controller("NewsController", ["pipesNewsSource", NewsController]);

    function NewsController(pipesNewsSource){
        var NASA_PIPE_ID = "e9a2e77dffb3205d035c4e311d77bbe6";
        var vm = this;
        vm.errors = [];

        pipesNewsSource
            .getNews(NASA_PIPE_ID)
            .then(
                function(response){
                    vm.pipe = response.data.value;
                },
                function(){
                    vm.errors.push("Sorry, error retrieving data. Please, try again later.");
                });

        vm.togglePostDescription = function(newsPost){
            newsPost.show = !newsPost.show;
        };
    }
}());
