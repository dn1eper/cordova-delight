//const HOST = "http://192.168.1.12/";
const HOST = "localhost/"
var app;

function onLoad() {
    app = angular.module('myCordovaApp', []);
    
    app.controller('post', ($scope, $http) => {
        var post_id = 0;

        $scope.Next = () => $http.get(HOST + 'post.php?post_id='+ (++post_id))
        .then(res => $scope.post = res.data,
            err => console.error(err));
        
        $scope.Previous = () => $http.get(HOST + 'post.php?post_id='+ (--post_id))
        .then(res => $scope.post = res.data,
            err => console.error(err));
    });

    document.addEventListener('swiperight', onSwipeRight, false);
    document.addEventListener('swipeleft', onSwipeLeft, false);
    document.addEventListener('onclick', onClick, false);
}

function onSwipeRight() {
    post.innerHTML = "right";
}

function onSwipeLeft() {
    post.innerHTML = "left";
}

function onClick() {
    post.innerHTML = "click";
}


//document.addEventListener('deviceready', onLoad, false);
document.addEventListener('onload', onLoad, false);
