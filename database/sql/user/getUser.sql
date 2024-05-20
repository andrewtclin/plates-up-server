-- retrieve user information
DROP PROCEDURE IF EXISTS GetUser;

CREATE PROCEDURE GetUser(IN p_username VARCHAR(255))
BEGIN
    SELECT user_id, username, email, lastname, firstname
    FROM users
    WHERE username = p_username;
END;
