-- create new progress
DROP PROCEDURE IF EXISTS NewProgress;

CREATE PROCEDURE NewProgress(IN p_exercise_id INT, IN p_user_id INT, IN p_weights INT)
BEGIN
    INSERT INTO progresses (exercise_id, user_id, weights)
    VALUES (p_exercise_id, p_user_id, p_weights);
END;
