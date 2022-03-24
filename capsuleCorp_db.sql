CREATE DATABASE capsuleCorp_db;
USE capsuleCorp_db;

CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `first_name` VARCHAR(30) NOT NULL,
   `last_name` VARCHAR(30) NOT NULL,
   `email` VARCHAR(100) NOT NULL,
   `avatar` VARCHAR(100) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `adress` VARCHAR(255) NOT NULL,
   `category_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL,
   `description` TEXT NOT NULL,
   `image` VARCHAR(100) NOT NULL,
   `stock` INT NOT NULL,
   `price` DECIMAL NOT NULL,
   `category_id` INT NOT NULL,
   `color_id` INT NOT NULL,
   `brand_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products_categories` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   `image` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products_colors` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `users_categories` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `orders` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `user_id` INT NOT NULL,
   `shoppingcart_id` INT NOT NULL,
   ` delivery_date` DATETIME NOT NULL,
   `total_price` INT NOT NULL,
   `orderstatus_id` INT NOT NULL,
   `paystatus_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `payment_status` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `pay_status` VARCHAR(30) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `shopping_carts` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `user_id` INT NOT NULL,
   `product_id` INT NOT NULL,
   `quantity_products` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products_brands` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `order_status` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `users` ADD CONSTRAINT `FK_1420219b-1ac7-4da0-8620-ca2ca9990f70` FOREIGN KEY (`category_id`) REFERENCES `users_categories`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_153be0e6-aa5b-45bc-924a-46a78c1ba8b6` FOREIGN KEY (`category_id`) REFERENCES `products_categories`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_9e750f3f-7f85-4aa1-9d68-4c0e7b1d9752` FOREIGN KEY (`color_id`) REFERENCES `products_colors`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_8b43f439-d030-4c81-b54d-2e56199322f2` FOREIGN KEY (`brand_id`) REFERENCES `products_brands`(`id`)  ;

ALTER TABLE `orders` ADD CONSTRAINT `FK_b2e8f82e-8604-4b61-bb6a-415c0a60f016` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)  ;

ALTER TABLE `orders` ADD CONSTRAINT `FK_6e56abb8-58b5-441c-8150-dd74e6c8f55f` FOREIGN KEY (`paystatus_id`) REFERENCES `payment_status`(`id`)  ;

ALTER TABLE `orders` ADD CONSTRAINT `FK_d7a1fd8c-6187-4a02-a633-02b7172f01d9` FOREIGN KEY (`shoppingcart_id`) REFERENCES `shopping_carts`(`id`)  ;

ALTER TABLE `orders` ADD CONSTRAINT `FK_a63c1bc2-4fa2-4718-9b76-933024908f5f` FOREIGN KEY (`orderstatus_id`) REFERENCES `order_status`(`id`)  ;

ALTER TABLE `shopping_carts` ADD CONSTRAINT `FK_34962b85-c80a-4d37-a4a8-ccd07e7c4bc4` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)  ;

ALTER TABLE `shopping_carts` ADD CONSTRAINT `FK_435edd94-ebb1-40d0-948a-dfe783d36de1` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)  ;
