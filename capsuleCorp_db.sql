CREATE DATABASE capsulecorp_db;
USE capsulecorp_db;


CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `first_name` VARCHAR(30) NOT NULL,
   `last_name` VARCHAR(30) NOT NULL,
   `email` VARCHAR(100) NOT NULL,
   `avatar` VARCHAR(100) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `adress` VARCHAR(255) NOT NULL,
   `category_id` INT NOT NULL,
   `createdAt` DATETIME NOT NULL,
   `updatedAt` DATETIME NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL,
   `description` TEXT NOT NULL,
   `image` VARCHAR(100) NOT NULL,
   `stock` INT NOT NULL,
   `price` DECIMAL NOT NULL,
   `discount` INT NOT NULL,
   `category_id` INT NOT NULL,
   `color_id` INT NOT NULL,
   `brand_id` INT NOT NULL,
   `createdAt` DATETIME NOT NULL,
   `updatedAt` DATETIME NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products_categories` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   `image` VARCHAR(100) NOT NULL,
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
   `shoppingcart_id` INT,
   `total_price` INT NOT NULL,
   `orderstatus_id` INT,
   `paystatus_id` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `payment_status` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `user_id` INT NOT NULL,
   `pay_status` VARCHAR(30) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products_brands` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL,
   `image` VARCHAR(100) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `shopping_carts` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `order_id` INT NOT NULL,
   `product_id` INT,
   `quantity_products` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `order_status` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `status` VARCHAR(100) NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `users` ADD CONSTRAINT `FK_3281fcac-0e1b-4471-8675-ca94a9e338e7` FOREIGN KEY (`category_id`) REFERENCES `users_categories`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_153be0e6-aa5b-45bc-924a-46a78c1ba8b6` FOREIGN KEY (`category_id`) REFERENCES `products_categories`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_9e750f3f-7f85-4aa1-9d68-4c0e7b1d9752` FOREIGN KEY (`color_id`) REFERENCES `products_colors`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_2eada349-0ebe-43fb-9627-f757302c6ee4` FOREIGN KEY (`brand_id`) REFERENCES `products_brands`(`id`)  ;

ALTER TABLE `orders` ADD CONSTRAINT `FK_6e56abb8-58b5-441c-8150-dd74e6c8f55f` FOREIGN KEY (`paystatus_id`) REFERENCES `payment_status`(`id`)  ;

ALTER TABLE `orders` ADD CONSTRAINT `FK_7baefd14-dc86-47ff-a1b8-8e20bbb69784` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)  ;

ALTER TABLE `orders` ADD CONSTRAINT `FK_0a477da7-7b8a-4552-989c-58a6e6336dce` FOREIGN KEY (`shoppingcart_id`) REFERENCES `shopping_carts`(`id`)  ;

ALTER TABLE `orders` ADD CONSTRAINT `FK_9ec62171-b16c-40e8-9234-3e270beec9e4` FOREIGN KEY (`orderstatus_id`) REFERENCES `order_status`(`id`)  ;

ALTER TABLE `payment_status` ADD CONSTRAINT `FK_a7e9a7fd-e28a-40b3-bc31-3cda21896dff` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)  ;

ALTER TABLE `shopping_carts` ADD CONSTRAINT `FK_11b2c8c1-da2b-410d-8107-c136a4b0f222` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)  ;