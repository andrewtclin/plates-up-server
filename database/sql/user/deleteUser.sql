DROP PROCEDURE IF EXISTS DeleteUser;

CREATE PROCEDURE DeleteUser(IN p_username VARCHAR(255))
BEGIN
    DELETE FROM users WHERE username = p_username;
END;
