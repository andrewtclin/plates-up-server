-- create new user
DROP PROCEDURE IF EXISTS CreateUser;

CREATE PROCEDURE CreateUser(IN p_username VARCHAR(255), IN p_password_hash VARCHAR(255), IN p_email VARCHAR(255), IN p_lastname VARCHAR(255), IN p_firstname VARCHAR(255))
BEGIN
    INSERT INTO users (username, password_hash, email, lastname, firstname)
    VALUES (p_username, p_password_hash, p_email, p_lastname, p_firstname);
END;
