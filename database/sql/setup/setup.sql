-- create plates-up db
CREATE DATABASE IF NOT EXISTS `plates_up`;
USE `plates_up`;

-- drop user table if exists
DROP TABLE IF EXISTS users;

-- create user table
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    lastname VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- create plan table
CREATE TABLE exercises (
    exercise_id INT AUTO_INCREMENT PRIMARY KEY,
    exercise_name VARCHAR(255) NOT NULL UNIQUE,
    user_id INT NOT NULL
);

-- create progress table
CREATE TABLE progresses (
    progress_id INT AUTO_INCREMENT PRIMARY KEY,
    exercise_id INT NOT NULL,
    user_id INT NOT NULL,
    weights INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);