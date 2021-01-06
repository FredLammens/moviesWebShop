-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: movieshop
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `movieorder`
--

DROP TABLE IF EXISTS `movieorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movieorder` (
  `orderId` int NOT NULL,
  `movieId` int NOT NULL,
  `qty` int NOT NULL,
  `price` double NOT NULL,
  PRIMARY KEY (`orderId`,`movieId`),
  KEY `movieId` (`movieId`),
  CONSTRAINT `movieorder_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `movieorder_ibfk_2` FOREIGN KEY (`movieId`) REFERENCES `movies` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movieorder`
--

LOCK TABLES `movieorder` WRITE;
/*!40000 ALTER TABLE `movieorder` DISABLE KEYS */;
INSERT INTO `movieorder` VALUES (17,2,1,8.99),(17,7,1,2.99),(17,8,1,5.99),(17,9,1,2.99),(17,10,1,8.99),(17,11,1,10.99),(17,13,1,9.99);
/*!40000 ALTER TABLE `movieorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` double NOT NULL,
  `description` varchar(100) DEFAULT 'no description',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'Greenland',3.99,'no description.'),(2,'Breach',8.99,'no description.'),(3,'Tenet',5.99,'no description.'),(4,'The dark and the wicked',3.99,'no description.'),(5,'Fatman',3.99,'no description.'),(6,'Home alone',3.99,'no description.'),(7,'The escort',2.99,'no description.'),(8,'Jigsaw',5.99,'no description.'),(9,'Frozen',2.99,'no description.'),(10,'Bloodshot',8.99,'no description.'),(11,'Deadpool 2',10.99,'no description.'),(12,'Peppermint',2.99,'no description.'),(13,'Sonic',9.99,'no description.');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created` varchar(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `street` varchar(100) NOT NULL,
  `number` int NOT NULL,
  `postalCode` int NOT NULL,
  `city` varchar(100) NOT NULL,
  `telephone` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `totalPrice` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'2021-01-05 02:53:56.778','Fred','lammens','jef de belderlaan',7,9831,'Deurle','0485122235412','lala@gmail.com',120.45),(2,'2021-01-06 14:55:55.894','Frederic','Lammens','hippoliet lammensstraat',2,9000,'Gent','+32477878288','lammensf@gmail.com',53.940000000000005),(3,'2021-01-06 15:00:46.637','Frederic','Lammens','hippoliet lammensstraat',2,9000,'Gent','+32477878288','lammensf@gmail.com',53.94),(4,'2021-01-06 15:01:05.997','Frederic','Lammens','hippoliet lammensstraat',4,9000,'Gent','+32477878288','frederic.lammens@student.hogent.be',53.94),(5,'2021-01-06 15:37:15.626','Fred','lammens','jef de belderlaan',7,9831,'Deurle','0485122235412','lala@gmail.com',120.45),(6,'2021-01-06 15:37:19.088','Fred','lammens','jef de belderlaan',7,9831,'Deurle','0485122235412','lala@gmail.com',120.45),(7,'2021-01-06 15:37:20.099','Fred','lammens','jef de belderlaan',7,9831,'Deurle','0485122235412','lala@gmail.com',120.45),(8,'2021-01-06 15:41:02.277','Fred','lammens','jef de belderlaan',7,9831,'Deurle','0485122235412','lala@gmail.com',120.45),(9,'2021-01-06 15:43:22.602','Fred','lammens','jef de belderlaan',7,9831,'Deurle','0485122235412','lala@gmail.com',120.45),(10,'2021-01-06 15:45:22.883','Fred','lammens','jef de belderlaan',7,9831,'Deurle','0485122235412','lala@gmail.com',120.45),(11,'2021-01-06 15:46:50.081','Fred','lammens','jef de belderlaan',7,9831,'Deurle','0485122235412','lala@gmail.com',120.45),(12,'2021-01-06 15:47:44.598','Fred','lammens','jef de belderlaan',7,9831,'Deurle','0485122235412','lala@gmail.com',120.45),(13,'2021-01-06 15:49:42.535','Frederic','Lammens','hippoliet lammensstraat',3,9000,'Gent','+32477878288','lammensf@gmail.com',53.94),(14,'2021-01-06 16:03:10.845','Frederic','Lammens','hippoliet lammensstraat',3,9000,'Gent','+32477878288','lammensf@gmail.com',68.91),(15,'2021-01-06 16:03:59.239','Frederic','Lammens','hippoliet lammensstraat',3,9000,'Gent','+32477878288','lammensf@gmail.com',68.91),(16,'2021-01-06 16:05:45.419','Frederic','Lammens','Jef de belderlaan',4,9831,'Deurle','0477878288','lammensf96@gmail.com',68.91),(17,'2021-01-06 16:07:24.008','Frederic','Lammens','hippoliet lammensstraat',5,9000,'Gent','+32477878288','lammensf@gmail.com',68.91);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-06 16:21:42
