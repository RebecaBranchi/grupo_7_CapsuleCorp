CREATE DATABASE  IF NOT EXISTS `capsulecorp_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `capsulecorp_db`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: capsulecorp_db
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `order_status`
--

DROP TABLE IF EXISTS `order_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_status`
--

LOCK TABLES `order_status` WRITE;
/*!40000 ALTER TABLE `order_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `shoppingcart_id` int NOT NULL,
  ` delivery_date` datetime NOT NULL,
  `total_price` int NOT NULL,
  `orderstatus_id` int NOT NULL,
  `paystatus_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_b2e8f82e-8604-4b61-bb6a-415c0a60f016` (`user_id`),
  KEY `FK_6e56abb8-58b5-441c-8150-dd74e6c8f55f` (`paystatus_id`),
  KEY `FK_d7a1fd8c-6187-4a02-a633-02b7172f01d9` (`shoppingcart_id`),
  KEY `FK_a63c1bc2-4fa2-4718-9b76-933024908f5f` (`orderstatus_id`),
  CONSTRAINT `FK_6e56abb8-58b5-441c-8150-dd74e6c8f55f` FOREIGN KEY (`paystatus_id`) REFERENCES `payment_status` (`id`),
  CONSTRAINT `FK_a63c1bc2-4fa2-4718-9b76-933024908f5f` FOREIGN KEY (`orderstatus_id`) REFERENCES `order_status` (`id`),
  CONSTRAINT `FK_b2e8f82e-8604-4b61-bb6a-415c0a60f016` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FK_d7a1fd8c-6187-4a02-a633-02b7172f01d9` FOREIGN KEY (`shoppingcart_id`) REFERENCES `shopping_carts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_status`
--

DROP TABLE IF EXISTS `payment_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pay_status` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_status`
--

LOCK TABLES `payment_status` WRITE;
/*!40000 ALTER TABLE `payment_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(100) NOT NULL,
  `stock` int NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `discount` int NOT NULL,
  `category_id` int NOT NULL,
  `color_id` int NOT NULL,
  `brand_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_153be0e6-aa5b-45bc-924a-46a78c1ba8b6` (`category_id`),
  KEY `FK_9e750f3f-7f85-4aa1-9d68-4c0e7b1d9752` (`color_id`),
  KEY `FK_8b43f439-d030-4c81-b54d-2e56199322f2` (`brand_id`),
  CONSTRAINT `FK_153be0e6-aa5b-45bc-924a-46a78c1ba8b6` FOREIGN KEY (`category_id`) REFERENCES `products_categories` (`id`),
  CONSTRAINT `FK_8b43f439-d030-4c81-b54d-2e56199322f2` FOREIGN KEY (`brand_id`) REFERENCES `products_brands` (`id`),
  CONSTRAINT `FK_9e750f3f-7f85-4aa1-9d68-4c0e7b1d9752` FOREIGN KEY (`color_id`) REFERENCES `products_colors` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'notebook','Hp  amamam','1648169757208--1bcc01fc9a620bbb1a9f754a3326.jpg',10,150000,0,2,3,3),(2,'Consola  Nintendo Switch',' Nuevo  |  746 vendidos Nintendo Switch OLED 64GB Standard color blanco y negro 77 opiniones Favorito MÁS VENDIDO6º en Consolas 94999 pesos $ 94.999 en 12x 13471 pesos con 65 centavos $ 13.471 65 Ver los medios de pago Color:Blanco/Negro  Blanco/Negro Rojo neón/Azul neón/Negro  Comprar ahora  Agregar al carrito Lo que tenés que saber de este producto  Incluye 2 controles. Resolución de 1920px x 1080px. Memoria RAM de 4GB. Tiene pantalla táctil. La duración de la batería es de 9h. Horas de diversión garantizada. Cuenta con: 1 joy-con grip, 1 adaptador de corriente, 1 dock, 1 cable hdmi, 2 correas para joy-con.','1648169984731--2-48.jpg',8,98000,0,4,1,9),(3,'Impresora a color multifunción HP ',' Imagen 3 de 4 de Impresora a color multifunción HP Deskjet Ink Advantage 2375 blanca y verde 100V/240V Imagen 4 de 4 de Impresora a color multifunción HP Deskjet Ink Advantage 2375 blanca y verde 100V/240V Nuevo  |  4603 vendidos Impresora a color multifunción HP Deskjet Ink Advantage 2375 blanca y verde 100V/240V','1648170164773--28602803a8becbe9bd4995dc720b.jpg',15,8000,0,6,2,3),(4,' Smartwatch Soundpeats Watch ','Lo que tenés que saber de este producto Pantalla de 1.4\". Resistente al agua. Batería de 10 días de duración. Conectividad por Bluetooth. Sensores incluidos: sensor óptico de frecuencia cardíaca ppg.','1648170459882--450_1000 (4).jpg',20,10000,10,5,3,13),(5,'Auricular Gamer Playstation Ps5 Microfono Pulse 3d Pc Xbox','ESPECIFICACIONES - Tamaño del altavoz: 40 mm - Impedancia del altavoz: 32 ohmios - Rango de frecuencia: 20 Hz - 20 kHz - Diseño cerrado - Vincha autoajustable - Orejeras acolchadas - Ultra liviano - Control de volumen - Funcion de Muteo en la rotacion del microfono - Sensibilidad de micrófono: -58dB - Rango de frecuencia: 100 Hz - 8 kHz - Longitud del cable: 1,2 Mts - Conector: Jack 3.5mm - Adaptador splitter para PC - Soporte del sistema Win 7 / Win8 / Win8.1 / Win 10','1648170610200--AUDIFONO-GAMER-TURTLE-BEACH-RECON-CHAT-PARA-PS5-Y-PS4-TBS-3348-01-1-300x300.jpg',16,10500,10,5,10,9),(6,'Pc All In One Hp 24-dd0017la Ryzen 3 Lcd 23.8 1tb 124 256gb','Descripción Procesador AMD Ryzen 3 Mod. Procesador 3250U Velocidad CPU Velocidad base de 2,6 GHz, velocidad de ráfaga máxima de hasta 3,5 GHz, 4 MB de caché L3 y 2 núcleos. Disco Rígido 1 TB (7200 RPM) Memoria RAM 4 GB Disco SSD 256 GB Pantalla 23,8 pulgadas Resolución de pantalla 1080p Pantalla Tactil No Capacidad Multitouch No Placa de Video Integrada Sistema Operativo Windows 10 Home Wi-Fi Sí Bluetooth Sí Puertos USB 4 Puerto HDMI 1 Placa de red Sí Unidad CD / DVD No Graba cd No Graba dvd No Webcam Sí Teclado Sí Mouse Sí Teclado numérico Sí','1648170843875--195122919047-00-CH1200Wx1200H.jpg',20,100000,0,1,10,3),(7,'gamer ergonómica negra y azul','lo que tenés que saber de este producto Confortable y duradera. Posee altura ajustable. Rango de inclinación del respaldo de 90°x180°. Cómodos apoyabrazos. Soporte lumbar regulable. Tiene apoya cabeza. Con ruedas. Giratoria. Material del relleno: espuma. Peso máximo soportado: 126 kg. La silla alcanza una altura mínima de 120 cm y máxima de 130 cm.','1648303628319--23-111-be6b6d259ae436774516222100176653-1024-1024 (1).jpg',30,33000,10,4,4,16),(8,' Memoria RAM Fury gamer ddr4 8gb','  lo que tenés que saber de este producto Optimizá el rendimiento de tu máquina con la tecnología DDR4 SDRAM. Memoria con formato DIMM. Alcanza una velocidad de 2666 MHz. Apta para computadoras de escritorio. Línea Fury. Cuenta con una tasa de transferencia de 21300 MB/s. Compatible con Intel, AMD Ryzen.','1648303850373--55-21.jpg',45,8800,0,3,3,19),(9,'Disco sólido interno Kingston SA400S37/480G 480GB negro','lo que tenés que saber de este producto Con tecnología 3D NAND. Útil para guardar programas y documentos con su capacidad de 480 GB. Resistente a fuertes golpes. Tamaño de 2.5 \". Interfaz de conexión: SATA III. Apto para PC y Notebook. Las imágenes pueden ser ilustrativas.','1648304118314--41RKPlZ-cUL.jpg',5,9700,0,3,4,17),(10,'Auriculares Headset Fingertime Oreja Gato Cable Y Micrófono','AURICULARES HEADSET FINGERTIME OREJA DE GATO CABLE Y MICROFONO  *Tamaño perfecto y ajuste para niños: estos auriculares son ligeros y cuentan con almohadillas suaves y cómodas. Recomendado para niños mayores de 3 años.  *Diseñado con material de calidad, flexible para resistir. La longitud del cable de 1,2 M con el enchufe dorado de 3,5mm proporciona a tus hijos más espacio para jugar.  *Micrófono incluido en el cable y botón universal: cuando escuchas música, podes hacer click una vez para play o pausa, y dos clicks para pasar de canción. Si lo mantenes presionado, podes activar el asistente de voz. Cuando estas en una llamada, con un click se contesta o se cuelga la llamada, y se mantiene presionado para rechazar llamadas.','1648304283312--10-3.jpg',25,3000,0,5,6,9),(11,'Placa Madre Gamer H510m-h Socket1200','A02-118-1516 / Placa Madre Gigabyte / Motherboard Gamer PC Gigabyte H510M-H / DDR4 hasta 64 gb / Intel 10ma y 11va Generación / PCi Express 16 slot / HDMI / USB','1648305204181--descarga.jpg',20,15000,0,3,3,22),(13,'Notebook Samsung Chromebook Plus Tactil','NOTEBOOK SAMSUNG CHROMEBOOK PLUS 2 IN 1 CON LTE XE525QBB-K01US 12.2¨ TOUCHSCREEN/CELERON 3965Y/4GB-32GB EMMC/LTE/CHROME OS/SILVER tiene memoria extensible , podés agrandar la capacidad !!','1648306089204--Notebook-9-Pro-KV-1 (1).jpg',15,93000,0,2,3,13);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_brands`
--

DROP TABLE IF EXISTS `products_brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_brands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_brands`
--

LOCK TABLES `products_brands` WRITE;
/*!40000 ALTER TABLE `products_brands` DISABLE KEYS */;
INSERT INTO `products_brands` VALUES (1,'Apple'),(2,'Dell'),(3,'HP'),(4,'Acer'),(5,'Compaq'),(6,'Lenovo'),(7,'toshiba'),(8,'Asus'),(9,'Sony'),(10,'Bangho'),(11,'Aio'),(12,'Exo'),(13,'Samsung'),(14,'Microsft'),(15,'Corsair'),(16,'Medion'),(17,'MSI'),(18,'Zotac'),(19,'Amd'),(20,'Intel'),(21,'IBM '),(22,'Gigabyte');
/*!40000 ALTER TABLE `products_brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_categories`
--

DROP TABLE IF EXISTS `products_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `image` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_categories`
--

LOCK TABLES `products_categories` WRITE;
/*!40000 ALTER TABLE `products_categories` DISABLE KEYS */;
INSERT INTO `products_categories` VALUES (1,'Computadoras','Computadoras'),(2,'Notebooks','Notebooks'),(3,'Arma tu pc','Arma tu pc'),(4,'Gamer','Gamer'),(5,'Gadget','Gadget'),(6,'Impresoras e Insumos','Impresoras e Insumo');
/*!40000 ALTER TABLE `products_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_colors`
--

DROP TABLE IF EXISTS `products_colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_colors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_colors`
--

LOCK TABLES `products_colors` WRITE;
/*!40000 ALTER TABLE `products_colors` DISABLE KEYS */;
INSERT INTO `products_colors` VALUES (1,'Rojo'),(2,'Verde'),(3,'Negro'),(4,'Azul'),(5,'Marron'),(6,'Rosa'),(7,'Verde flour'),(8,'Amarrillo'),(9,'Morado'),(10,'Blanco'),(11,'Arcoiris'),(12,'Nude'),(13,'Neon');
/*!40000 ALTER TABLE `products_colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_carts`
--

DROP TABLE IF EXISTS `shopping_carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopping_carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity_products` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_34962b85-c80a-4d37-a4a8-ccd07e7c4bc4` (`user_id`),
  KEY `FK_435edd94-ebb1-40d0-948a-dfe783d36de1` (`product_id`),
  CONSTRAINT `FK_34962b85-c80a-4d37-a4a8-ccd07e7c4bc4` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FK_435edd94-ebb1-40d0-948a-dfe783d36de1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_carts`
--

LOCK TABLES `shopping_carts` WRITE;
/*!40000 ALTER TABLE `shopping_carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopping_carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `adress` varchar(255) NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_1420219b-1ac7-4da0-8620-ca2ca9990f70` (`category_id`),
  CONSTRAINT `FK_1420219b-1ac7-4da0-8620-ca2ca9990f70` FOREIGN KEY (`category_id`) REFERENCES `users_categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_categories`
--

DROP TABLE IF EXISTS `users_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_categories`
--

LOCK TABLES `users_categories` WRITE;
/*!40000 ALTER TABLE `users_categories` DISABLE KEYS */;
INSERT INTO `users_categories` VALUES (1,'comprador'),(2,'administrador');
/*!40000 ALTER TABLE `users_categories` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-26 18:39:46
