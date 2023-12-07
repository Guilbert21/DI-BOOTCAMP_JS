-- CREATE TABLE movies(
-- movie_id SERIAL,
-- movie_title VARCHAR (50) NOT NULL,
-- movie_story TEXT,
-- actor_playing_id INTEGER,
-- PRIMARY KEY (movie_id),
-- FOREIGN KEY (actor_playing_id) REFERENCES actors (actor_id)
-- );

-- INSERT INTO movies (movie_title, movie_story, actor_playing_id) VALUES
--     ( 'Good Will Hunting', 
--     'Written by Affleck and Damon, the film follows 20-year-old South Boston janitor Will Hunting',
--     (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon')),
--     ( 'Oceans Eleven', 
--     'American heist film directed by Steven Soderbergh and written by Ted Griffin.', 
--     (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon'));

-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- INNER JOIN movies
-- ON actors.actor_id = movies.actor_playing_id;

-- INSERT INTO actors (first_name, last_name, birthdate, number_oscars) VALUES (
-- 	'Matt', 'Damon', '1975-04-06', 4);

-- DELETE FROM movies WHERE movie_id = 4;
-- ALTER TABLE producers
-- DROP COLUMN movie_story;
-- SELECT * FROM producers;

-- SELECT * FROM movies INNER JOIN actors ON movies.actor_playing_id = actors.actor_id;

-- CREATE TABLE producers(
-- producers_id SERIAL,
-- name VARCHAR (50) NOT NULL,
-- movie_story TEXT,
-- producers_playing_id INTEGER,
-- PRIMARY KEY (producers_id),
-- FOREIGN KEY (producers_playing_id) REFERENCES movies (movie_id)
-- );

-- INSERT INTO producers (name, producers_playing_id) VALUES
--     ( 'James Cameron', 
--     (SELECT movie_id from movies WHERE movie_title = 'Oceans Eleven'));

-- SELECT * FROM producers INNER JOIN movies ON producers.producers_playing_id= movies.movie_id;