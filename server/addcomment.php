<?php

require_once 'db/model.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$data = json_decode( file_get_contents('php://input') );
$post_id = $data->post_id;
$text = $data->text;
$model = new Model();
$model->add_comment($post_id, $text);
// TODO: send json status => OK | ERROR
