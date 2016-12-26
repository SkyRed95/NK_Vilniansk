angular.module("ProdApp", ['ngRateIt'])
    .controller("TitlesCtrl", function ($scope, $http) {
        var url = "//localhost:3000";
        $http.get(url + "/api/products")
            .success(function (data) {
                $scope.titles = data;
            })
        $scope.id = function id(idProduct) {
            var reviewsAPI = url + "/api/reviews/" + idProduct;
            $http.get(reviewsAPI)
                .success(function (data) {
                    $scope.reviews = data;
                })
        }
        $scope.setActive = function (titles) {
            $scope.activeMenu = titles
        }

        $scope.postReview = function (idProduct, author_review, text_review, rate_review) {
            var reviewAPI = url + "/api/reviews/";
            $http({
                method: 'POST',
                url: reviewAPI,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: {
                    id_prod: idProduct,
                    author: author_review,
                    rate: rate_review,
                    text: text_review
                }
            }).success(function () {
                $http.get(reviewAPI + idProduct).success(function (data) {
                    $scope.reviews = data;
                })
            })
        }
    });