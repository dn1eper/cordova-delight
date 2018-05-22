<?php

require_once 'db/model.php';

if (isset($_GET["post_id"])) {
    $post_id = $_GET["post_id"];    
    $model = new Model();
    $model->like_post($post_id);
    // TODO: send json status => OK | ERROR
}