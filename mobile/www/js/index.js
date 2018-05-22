HOST = "http://192.168.1.12/server/";

document.addEventListener('deviceready', function() {
    
    var app = angular.module('myCordovaApp', []);
    var post_id = 0;

    app.controller('post', ($scope, $http) => {
        $scope.Next = () => $http.get(HOST + 'post.php?post_id='+ (++post_id))
        .then(res => $scope.post = res.data,
            err => console.error(err));
        
        $scope.Previous = () => $http.get(HOST + 'post.php?post_id='+ (--post_id))
        .then(res => $scope.post = res.data,
            err => console.error(err));
    });

    document.getElemebtById('next-button').bind('click', Next);
    document.bind('swiperight', Next);
    document.bind('swipeleft', Previous);

}, false);
    
