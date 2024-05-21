DROP PROCEDURE IF EXISTS DeleteExercise;

CREATE PROCEDURE DeleteExercise(IN p_exercise_id INT, IN p_user_id INT)
BEGIN
    DELETE FROM exercises WHERE user_id = p_user_id AND exercise_id = p_exercise_id;
END;
