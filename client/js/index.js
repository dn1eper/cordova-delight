HOST = "http://192.168.0.101:80/server/";

app.controller('post', ($scope, $http) => {
    var post_id = 0;

    $scope.Next = () => $http.get(
        HOST + 'post.php?post_id='+ (++post_id), {
        headers: {'Access-Control-Allow-Origin' : "*"}} )
    .then(res => $scope.post = res.data,
        err => console.error(err));

    $scope.Previous = () => $http.get(HOST + 'post.php?post_id='+ (--post_id), {
        headers: {'Access-Control-Allow-Origin' : "*"}} )
    .then(res => $scope.post = res.data,
        err => console.error(err));
});

/*
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
*/

document.addEventListener('deviceready', onLoad, false);
//document.addEventListener('onload', onLoad, false);
