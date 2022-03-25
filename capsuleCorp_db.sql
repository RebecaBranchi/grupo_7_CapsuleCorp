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
-- Dumping data for table `order_status`
--

LOCK TABLES `order_status` WRITE;
/*!40000 ALTER TABLE `order_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `payment_status`
--

LOCK TABLES `payment_status` WRITE;
/*!40000 ALTER TABLE `payment_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'notebook','Hp  amamam','1648169757208--1bcc01fc9a620bbb1a9f754a3326.jpg',10,150000,0,2,3,3),(2,'Consola  Nintendo Switch',' Nuevo  |  746 vendidos Nintendo Switch OLED 64GB Standard color blanco y negro 77 opiniones Favorito MÁS VENDIDO6º en Consolas 94999 pesos $ 94.999 en 12x 13471 pesos con 65 centavos $ 13.471 65 Ver los medios de pago Color:Blanco/Negro  Blanco/Negro Rojo neón/Azul neón/Negro  Comprar ahora  Agregar al carrito Lo que tenés que saber de este producto  Incluye 2 controles. Resolución de 1920px x 1080px. Memoria RAM de 4GB. Tiene pantalla táctil. La duración de la batería es de 9h. Horas de diversión garantizada. Cuenta con: 1 joy-con grip, 1 adaptador de corriente, 1 dock, 1 cable hdmi, 2 correas para joy-con.','1648169984731--2-48.jpg',8,98000,0,4,1,9),(3,'Impresora a color multifunción HP ',' Imagen 3 de 4 de Impresora a color multifunción HP Deskjet Ink Advantage 2375 blanca y verde 100V/240V Imagen 4 de 4 de Impresora a color multifunción HP Deskjet Ink Advantage 2375 blanca y verde 100V/240V Nuevo  |  4603 vendidos Impresora a color multifunción HP Deskjet Ink Advantage 2375 blanca y verde 100V/240V','1648170164773--28602803a8becbe9bd4995dc720b.jpg',15,8000,0,6,2,3),(4,' Smartwatch Soundpeats Watch ','Lo que tenés que saber de este producto Pantalla de 1.4\". Resistente al agua. Batería de 10 días de duración. Conectividad por Bluetooth. Sensores incluidos: sensor óptico de frecuencia cardíaca ppg.','1648170459882--450_1000 (4).jpg',20,10000,10,5,3,13),(5,'Auricular Gamer Playstation Ps5 Microfono Pulse 3d Pc Xbox','ESPECIFICACIONES - Tamaño del altavoz: 40 mm - Impedancia del altavoz: 32 ohmios - Rango de frecuencia: 20 Hz - 20 kHz - Diseño cerrado - Vincha autoajustable - Orejeras acolchadas - Ultra liviano - Control de volumen - Funcion de Muteo en la rotacion del microfono - Sensibilidad de micrófono: -58dB - Rango de frecuencia: 100 Hz - 8 kHz - Longitud del cable: 1,2 Mts - Conector: Jack 3.5mm - Adaptador splitter para PC - Soporte del sistema Win 7 / Win8 / Win8.1 / Win 10','1648170610200--AUDIFONO-GAMER-TURTLE-BEACH-RECON-CHAT-PARA-PS5-Y-PS4-TBS-3348-01-1-300x300.jpg',16,10500,10,5,10,9),(6,'Pc All In One Hp 24-dd0017la Ryzen 3 Lcd 23.8 1tb 124 256gb','Descripción Procesador AMD Ryzen 3 Mod. Procesador 3250U Velocidad CPU Velocidad base de 2,6 GHz, velocidad de ráfaga máxima de hasta 3,5 GHz, 4 MB de caché L3 y 2 núcleos. Disco Rígido 1 TB (7200 RPM) Memoria RAM 4 GB Disco SSD 256 GB Pantalla 23,8 pulgadas Resolución de pantalla 1080p Pantalla Tactil No Capacidad Multitouch No Placa de Video Integrada Sistema Operativo Windows 10 Home Wi-Fi Sí Bluetooth Sí Puertos USB 4 Puerto HDMI 1 Placa de red Sí Unidad CD / DVD No Graba cd No Graba dvd No Webcam Sí Teclado Sí Mouse Sí Teclado numérico Sí','1648170843875--195122919047-00-CH1200Wx1200H.jpg',20,100000,0,1,10,3);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products_brands`
--

LOCK TABLES `products_brands` WRITE;
/*!40000 ALTER TABLE `products_brands` DISABLE KEYS */;
INSERT INTO `products_brands` VALUES (1,'Apple'),(2,'Dell'),(3,'HP'),(4,'Acer'),(5,'Compaq'),(6,'Lenovo'),(7,'toshiba'),(8,'Asus'),(9,'Sony'),(10,'Bangho'),(11,'Aio'),(12,'Exo'),(13,'Samsung'),(14,'Microsft'),(15,'Corsair'),(16,'Medion'),(17,'MSI'),(18,'Zotac'),(19,'Amd'),(20,'Intel'),(21,'IBM '),(22,'Gigabyte');
/*!40000 ALTER TABLE `products_brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products_categories`
--

LOCK TABLES `products_categories` WRITE;
/*!40000 ALTER TABLE `products_categories` DISABLE KEYS */;
INSERT INTO `products_categories` VALUES (1,'Computadoras','Computadoras'),(2,'Notebooks','Notebooks'),(3,'Arma tu pc','Arma tu pc'),(4,'Gamer','Gamer'),(5,'Gadget','Gadget'),(6,'Impresoras e Insumos','Impresoras e Insumo');
/*!40000 ALTER TABLE `products_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products_colors`
--

LOCK TABLES `products_colors` WRITE;
/*!40000 ALTER TABLE `products_colors` DISABLE KEYS */;
INSERT INTO `products_colors` VALUES (1,'Rojo'),(2,'Verde'),(3,'Negro'),(4,'Azul'),(5,'Marron'),(6,'Rosa'),(7,'Verde flour'),(8,'Amarrillo'),(9,'Morado'),(10,'Blanco'),(11,'Arcoiris'),(12,'Nude'),(13,'Neon');
/*!40000 ALTER TABLE `products_colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `shopping_carts`
--

LOCK TABLES `shopping_carts` WRITE;
/*!40000 ALTER TABLE `shopping_carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopping_carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users_categories`
--

LOCK TABLES `users_categories` WRITE;
/*!40000 ALTER TABLE `users_categories` DISABLE KEYS */;
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

-- Dump completed on 2022-03-24 22:27:01
