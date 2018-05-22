<?php

class Model {
	private $mysqli;

	function __construct() {
		// Connect to the database
		$this->mysqli = new mysqli("localhost", "root", "", "cordova");
		if ($this->mysqli->connect_error) return false;
		else return true;
	}
	function __destruct() {
		$this->mysqli->close();
    }
	
	function get_post($post_id) {
		return (array)$this->mysqli->query("SELECT * FROM post WHERE post_id = '{$post_id}'")->fetch_object();
	}

	function get_comments($post_id) {
		return $this->mysqli->query("SELECT * FROM comment WHERE post_id = '{$post_id}'")->fetch_all(MYSQLI_ASSOC);
	}

	function add_comment($post_id, $text) {
	return $this->mysqli->query("INSERT INTO comment (post_id, commentText) VALUES ('{$post_id}', '{$text}')");
	}

	function like_post($post_id) {
		return $this->mysqli->query("UPDATE post SET likes=likes+1 WHERE post_id='{$post_id}'");
	}
}
