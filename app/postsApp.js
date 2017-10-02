angular.module("PostsApp", [])
    .controller("TitlesCtrl", function ($scope, $http) {
        var url = "//localhost:3000",
            postsAPI = url + "/posts/";

        $http.get(postsAPI)
            .then(function (data) {
                $scope.titles = data.data;
            })
        $scope.setActive = function (titles) {
            $scope.activeMenu = titles
        }
    });