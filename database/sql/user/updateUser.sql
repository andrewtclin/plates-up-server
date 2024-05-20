DROP PROCEDURE IF EXISTS UpdateUser;

CREATE PROCEDURE UpdateUser(
    IN p_username VARCHAR(255),
    IN p_firstname VARCHAR(255),
    IN p_lastname VARCHAR(255),
    IN p_email VARCHAR(255),
    IN p_password_hash VARCHAR(255)
)
BEGIN
    UPDATE users
    SET
        firstname = p_firstname,
        lastname = p_lastname,
        email = p_email,
        password_hash = p_password_hash
    WHERE username = p_username;
END;
