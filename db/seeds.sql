-- User Dummy Data
INSERT INTO users (email, password, storeName, description, createdAt, updatedAt) VALUES ("sam@email.com", "test", "Olive Garden", "All about olives", "0000-00-00 00:00:00", "0000-00-00 00:00:00");
INSERT INTO users (email, password, storeName, description, createdAt, updatedAt) VALUES ("bill@email.com", "test", "Junk Store", "Just a bunch of my junk", "0000-00-00 00:00:00", "0000-00-00 00:00:00");
INSERT INTO users (email, password, storeName, description, createdAt, updatedAt) VALUES ("erica@email.com", "test", "Tiny tots", "Baby items for sale", "0000-00-00 00:00:00", "0000-00-00 00:00:00");


-- Product Dummy Data
INSERT INTO products (item, description, price, negotiable, barter, userId, createdAt, updatedAt) VALUES ("Table", "brown coffee table", "100", 0, "0", 1, "0000-00-00 00:00:00", "0000-00-00 00:00:00");
INSERT INTO products (item, description, price, negotiable, barter, userId, createdAt, updatedAt) VALUES ("Chair", "yellow chair", "10", 0, "0", 1, "0000-00-00 00:00:00", "0000-00-00 00:00:00");
INSERT INTO products (item, description, price, negotiable, barter, userId, createdAt, updatedAt) VALUES ("Laptop", "Dell laptop", "500", 0, "0", 2, "0000-00-00 00:00:00", "0000-00-00 00:00:00");
INSERT INTO products (item, description, price, negotiable, barter, userId, createdAt, updatedAt) VALUES ("Picture Frame", "8x10 silver frame", "2", 0, "0", 2, "0000-00-00 00:00:00", "0000-00-00 00:00:00"); 
INSERT INTO products (item, description, price, negotiable, barter, userId, createdAt, updatedAt) VALUES ("Picture Frame", "8x10 silver frame", "2", 0, "0", 4, "0000-00-00 00:00:00", "0000-00-00 00:00:00"); 