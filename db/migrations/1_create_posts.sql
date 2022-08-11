DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title VARCHAR(200),
    name VARCHAR(50),
    post VARCHAR(1000)
);