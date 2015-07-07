(function(){
    "use strict";
    angular.module("nasaNews").factory("pipesNewsSource", ["$http", nasaNewsSource]);

    function nasaNewsSource($http){
        var PIPE_TMPLT_URL = "http://pipes.yahoo.com/pipes/pipe.run?_id=${pipeId}&_render=json";

        var getNews = function(pipeId){
            return $http.get(PIPE_TMPLT_URL.replace('${pipeId}', pipeId));
        };

        return {getNews : getNews};
    }
}());
