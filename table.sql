CREATE TABLE priority (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
)

CREATE TABLE todo (
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    priority_id SERIAL references priority
)
