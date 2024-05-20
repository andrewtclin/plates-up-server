-- retrieve exercises information
DROP PROCEDURE IF EXISTS GetExercises;

CREATE PROCEDURE GetExercises(IN p_user_id INT)
BEGIN
    SELECT exercise_id, exercise_name
    FROM exercises
    WHERE user_id = p_user_id;
END;
