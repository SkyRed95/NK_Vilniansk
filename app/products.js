angular.module("ProdApp", ['ngRateIt'])
    .controller("TitlesCtrl", function ($scope, $http) {
        var url = "//localhost:3000";
        $http.get(url + "/api/products")
            .then(function (data) {
                $scope.titles = data.data;
            })
        $scope.id = function id(idProduct) {
            var reviewsAPI = url + "/api/reviews/" + idProduct;
            $http.get(reviewsAPI)
                .then(function (data) {
                    $scope.reviews = data.data;
                })
        }
        $scope.setActive = function (titles) {
            $scope.activeMenu = titles
        }
        $scope.postReview = function (idProduct, author_review, text_review, rate_review) {
            var reviewAPI = url + "/api/reviews/";
            var data = {
                id_prod: idProduct,
                author: author_review,
                rate: rate_review,
                text: text_review
            }
            $http.post(reviewAPI, data)
                .then(function () {
                    $http.get(reviewAPI + idProduct)
                        .then(function (data) {
                            $scope.reviews = data.data;
                        })
                })
        }
    });