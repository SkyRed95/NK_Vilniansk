angular.module("ProdApp", [])
    .controller("TitlesCtrl", function ($scope, $http) {
        var url = "//localhost:3000";
        var productsAPI = url + "/pages/";
        var reviewsAPI = url + "/api/reviews/";
        $http.get(productsAPI)
            .then(function (data) {
                $scope.titles = data.data;
            })
        $scope.id = function id(idProduct) {
            $http.get(reviewsAPI + idProduct)
                .then(function (data) {
                    $scope.reviews = data.data;
                })
        }
        $scope.setActive = function (titles) {
            $scope.activeMenu = titles
        }
        $scope.postReview = function (idProduct, author_review, text_review, rate_review) {
            var data = {
                id_prod: idProduct,
                author: author_review,
                rate: rate_review,
                text: text_review
            }
            $http.post(reviewsAPI, data)
                .then(function () {
                    $http.get(reviewsAPI + idProduct)
                        .then(function (data) {
                            $scope.reviews = data.data;
                        })
                })
        }
    });