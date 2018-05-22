<?php

require_once 'db/model.php';

if (isset($_GET["post_id"])) {
    $post_id = $_GET["post_id"];    
    $model = new Model();
    $post = $model->get_post($post_id);

    echo json_encode($post);
}