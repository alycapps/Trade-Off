-- User Dummy Data
INSERT INTO users (email, password, createdAt, updatedAt) VALUES ("sam@email.com", "test", "0000-00-00 00:00:00", "0000-00-00 00:00:00");
INSERT INTO users (email, password, createdAt, updatedAt) VALUES ("bill@email.com", "test", "0000-00-00 00:00:00", "0000-00-00 00:00:00");
INSERT INTO users (email, password, createdAt, updatedAt) VALUES ("erica@email.com", "test", "0000-00-00 00:00:00", "0000-00-00 00:00:00");

-- UserBios Dummy Data
INSERT INTO userBios (userName, location, bio, createdAt, updatedAt) VALUES ("Sam", "Durham, NC", "Developer interested in all things electronic", "0000-00-00 00:00:00", "0000-00-00 00:00:00");
INSERT INTO userBios (userName, location, bio, createdAt, updatedAt) VALUES ("Bill", "Cary, NC", "Contractor who loves to build", "0000-00-00 00:00:00", "0000-00-00 00:00:00");
INSERT INTO userBios (userName, location, bio, createdAt, updatedAt) VALUES ("Erica", "Durham, NC", "Collector of junk", "0000-00-00 00:00:00", "0000-00-00 00:00:00");


-- Product Dummy Data
INSERT INTO products (item, description, price, negotiable, barter, userId, createdAt, updatedAt) VALUES ("Table", "brown coffee table", "100", 0, "0", 1, "0000-00-00 00:00:00", "0000-00-00 00:00:00");
INSERT INTO products (item, description, price, negotiable, barter, userId, createdAt, updatedAt) VALUES ("Chair", "yellow chair", "10", 0, "0", 1, "0000-00-00 00:00:00", "0000-00-00 00:00:00");
INSERT INTO products (item, description, price, negotiable, barter, userId, createdAt, updatedAt) VALUES ("Laptop", "Dell laptop", "500", 0, "0", 2, "0000-00-00 00:00:00", "0000-00-00 00:00:00");
INSERT INTO products (item, description, price, negotiable, barter, userId, createdAt, updatedAt) VALUES ("Picture Frame", "8x10 silver frame", "2", 0, "0", 2, "0000-00-00 00:00:00", "0000-00-00 00:00:00"); 