DROP PROCEDURE IF EXISTS UpdateExercise;

CREATE PROCEDURE UpdateExercise(
    IN p_exercise_id INT, IN p_exercise_name VARCHAR(255), IN p_user_id INT
)
BEGIN
    UPDATE exercises
    SET
        exercise_name = p_exercise_name
    WHERE user_id = p_user_id AND exercise_id = p_exercise_id;
END;
