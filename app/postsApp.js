var app = angular.module("PostsApp", []),
    url = "//localhost:3000",
    postsAPI = url + "/posts/";

app.controller("AllPostsCtrl", function ($scope, $http) {
    $http.get(postsAPI)
        .then(function (data) {
            $scope.titles = data.data;
        })
    $scope.id = function id(idPost) {
        $http.get(postsAPI + idPost)
            .then(function (data) {
                $scope.posts = data.data;
            })
    }
});
app.controller("PostCtrl", function ($scope, $http) {
    $http.get(postsAPI + idPost)
        .then(function (data) {
            $scope.titles = data.data;
        })
})