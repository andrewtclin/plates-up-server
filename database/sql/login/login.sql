DROP PROCEDURE IF EXISTS UserLogin;

CREATE PROCEDURE UserLogin(IN p_username VARCHAR(255))
BEGIN
    SELECT password_hash FROM users WHERE username = p_username;
END;
