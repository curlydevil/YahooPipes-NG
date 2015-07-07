(function(){
    "use strict";
    angular.module("nasaNews").factory("nasaNewsSource", ["$http", nasaNewsSource]);

    function nasaNewsSource($http){
        var pipeUrl = "http://pipes.yahoo.com/pipes/pipe.run?_id=e9a2e77dffb3205d035c4e311d77bbe6&_render=json";

        var getNews = function(){
            return $http.get(pipeUrl);
        }

        return {getNews : getNews};
    }
}());
