-- retrieve progress information
DROP PROCEDURE IF EXISTS GetProgress;

CREATE PROCEDURE GetProgress(IN p_user_id INT)
BEGIN
    SELECT *
    FROM progresses
    WHERE user_id = p_user_id;
END;
