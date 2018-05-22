DROP DATABASE IF EXISTS cordova;
CREATE DATABASE cordova;
USE cordova;

DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS post;

CREATE TABLE post (
    post_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL DEFAULT 'Untitled',
    htmlText TEXT,
    likes INT UNSIGNED NOT NULL DEFAULT 0
) ENGINE=INNODB;

CREATE TABLE comment (
    post_id INT UNSIGNED NOT NULL,
    commentText TEXT,
    FOREIGN KEY (post_id)
            REFERENCES post(post_id)
) ENGINE=INNODB;

INSERT INTO post (title, htmlText) VALUES ("What is Apache Cordova?", "Apache Cordova, also popularly known as PhoneGap, is a free and open source cross-platform mobile application framework. The framework allows developers to build applications using standard web technologies such as HTML5, CSS and JavaScript. At the same time, it provides JavaScript based APIs that developers can invoke to access device specific APIs such as file system, contacts, media, camera, etc.");
INSERT INTO post (title, htmlText) VALUES ("How does Cordova work?", "Apache Cordova is based on the webview mechanism supported by most of the popular device platforms. Cordova provides a native shell with a webview in which the developer provided web screens are loaded. Most of the Cordova applications are based on the user interface that are single page web applications and the dynamic aspects of the application is handled by appropriate Javascript frameworks along with CSS based styles/themes. Once the application launches, based on the configuration details provided to Cordova, it loads the start-up HTML5 page in the webview and then further interactions are handled within a single webview.");
INSERT INTO post (title, htmlText) VALUES ("Installing Cordova", "Cordova command-line runs on Node.js and is available on NPM. Follow platform specific guides to install additional platform dependencies. Open a command prompt or Terminal, and type npm install -g cordova.");
INSERT INTO post (title, htmlText) VALUES ("Create a project", "Create a blank Cordova project using the command-line tool. Navigate to the directory where you wish to create your project and type cordova create <path>. For a complete set of options, type cordova help create.");
INSERT INTO post (title, htmlText) VALUES ("Add a platform", "After creating a Cordova project, navigate to the project directory. From the project directory, you need to add a platform for which you want to build your app. To add a platform, type cordova platform add <platform name>. For a complete list of platforms you can add, run cordova platform.");

INSERT INTO comment (post_id, commentText) VALUES (1, "wow");
INSERT INTO comment (post_id, commentText) VALUES (1, "cool");
INSERT INTO comment (post_id, commentText) VALUES (2, "i like cordova");
INSERT INTO comment (post_id, commentText) VALUES (1, "awesome");
INSERT INTO comment (post_id, commentText) VALUES (3, "cordova cordova cordova");
INSERT INTO comment (post_id, commentText) VALUES (4, "incredible");
INSERT INTO comment (post_id, commentText) VALUES (5, "cordova the best");