const HOST = "http://192.168.1.8:80/";

var app = angular.module('app', []);

app.controller('post', ($scope, $http) => {
    var post_id = 0;

    $scope.NextPage = () => {
        $http.get(
            HOST + 'post.php?post_id=' + (++post_id), {
            headers: {'Access-Control-Allow-Origin' : "*"}} )
        .then(res => {
                if (res.data.length == 0) post_id--;
                else {
                    $scope.post = res.data;
                    $scope.GetComments();
                    $scope.hideErrorMessage();
                }
            },
            err => console.error(err));
        
    };

    $scope.PreviousPage = () => {
        if (post_id <= 1) return;
        else post_id -= 2;
        $scope.NextPage();
    };

    $scope.GetComments = () => {
        $http.get(
            HOST + 'comments.php?post_id=' + post_id, {
            headers: {'Access-Control-Allow-Origin' : "*"}} )
        .then(res => $scope.comments = res.data,
            err => console.error(err));
    };

    $scope.AddComment = () => {
        var text = commentArea.value;
        if (text.length > 4) {
            $scope.hideErrorMessage();
            $http.post(
                HOST + 'addcomment.php', {
                "post_id": post_id,
                "text": text
                }, {
                headers: {'Access-Control-Allow-Origin' : "*"}} )
            .then(res => { 
                // TODO: recive adding status
                $scope.GetComments();
                commentArea.value = "";
            },
                err => console.error(err));
        }
        else {
            commentErrorMessage.innerHTML = "Your comment must be at least five characters long";
            commentErrorMessage.setAttribute('style', 'display:block;');
        }
    }

    $scope.hideErrorMessage = () => {
        commentErrorMessage.setAttribute('style', 'display:none;');
    }

    $scope.NextPage();
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