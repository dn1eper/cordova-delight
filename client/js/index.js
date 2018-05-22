const HOST = "http://192.168.1.8:80/";
//const HOST = "http://localhost:80/"

var app = angular.module('app', []);

app.controller('post', ($scope, $http) => {
    var post_id = 0;

    $scope.Next = () => {
        $http.get(
            HOST + 'post.php?post_id='+ (++post_id), {
            headers: {'Access-Control-Allow-Origin' : "*"}} )
        .then(res => {
                if (res.data.length == 0) post_id--;
                else $scope.post = res.data;
            },
            err => console.error(err));
    };
    $scope.Next();

    $scope.Previous = () => {
        if (post_id <= 1) return;
        $http.get(
            HOST + 'post.php?post_id='+ (--post_id), {
            headers: {'Access-Control-Allow-Origin' : "*"}} )
        .then(res => $scope.post = res.data,
            err => console.error(err));
    };
});


function onLoad() {
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


document.addEventListener('deviceready', onLoad, false);
//onLoad();