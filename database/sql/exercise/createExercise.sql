-- create new exercise
DROP PROCEDURE IF EXISTS CreateExercise;

CREATE PROCEDURE CreateExercise(IN p_exercise_name VARCHAR(255), IN p_user_id INT)
BEGIN
    INSERT INTO exercises (exercise_name, user_id)
    VALUES (p_exercise_name, p_user_id);
END;
