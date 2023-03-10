-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 20, 2023 at 07:09 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `think_and_get`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category` varchar(50) NOT NULL,
  `create_time` date NOT NULL DEFAULT current_timestamp(),
  `update_time` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `description` varchar(500) NOT NULL,
  `send_time` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(10) NOT NULL DEFAULT 'cus',
  `enabled` int(11) DEFAULT 1,
  `created_time` date NOT NULL DEFAULT current_timestamp(),
  `updated_time` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `email`, `phone`, `name`, `password`, `role`, `enabled`, `created_time`, `updated_time`) VALUES
(1, 'safa@gmail.com', '01794798101', 'safa', 'dqdaudiuadu', 'cus', 1, '2023-02-08', NULL),
(3, 'safashah@gmail.com', '01992339969', 'Safa Shah', '83abc11cb0ae9847e86c7bffba917ad795dca9201431b2214a14f1445686e70d', 'cus', 1, '2023-02-15', NULL),
(4, 'anik69@gmail.com', '69696969696', 'anik 69', 'de5b0a2cc2468678a84091bd415b7533a76c862dc956d94786f66d5f0c51d497', 'cus', 1, '2023-02-15', NULL),
(5, 'fahim@gmail.com', '01794798101', 'Hasib', 'ca33a0566825a98880cac4c11ecbf3818dec36d4b7c82aab39f9f32ba008cd9d', 'cus', 1, '2023-02-18', NULL),
(6, 'hasibarrafiulfahim@gmail.com', '01794798101', 'Hasib Ar Rafiul Fahim', '18bf931b32b6d4b8a78c62e4144bc5a1d07f6fd3e34245fc98a17e76531284a2', 'cus', 1, '2023-02-18', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `customers_statistics`
--

CREATE TABLE `customers_statistics` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `saved_product_count` int(11) NOT NULL DEFAULT 0,
  `saved_category_count` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `sender_id` int(11) NOT NULL,
  `reciever_id` int(11) NOT NULL,
  `chat` varchar(50) NOT NULL,
  `send_time` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product` varchar(50) NOT NULL,
  `images` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(500) NOT NULL,
  `discount_percentage` int(11) NOT NULL,
  `discount_price` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `enable` int(11) NOT NULL DEFAULT 1,
  `create_time` date NOT NULL DEFAULT current_timestamp(),
  `update_time` date DEFAULT NULL,
  `priority` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product_statistics`
--

CREATE TABLE `product_statistics` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `added_to_saved_count` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rating`
--

CREATE TABLE `rating` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `rate` int(11) NOT NULL,
  `comment` varchar(500) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `create_time` date NOT NULL DEFAULT current_timestamp(),
  `update_time` date DEFAULT NULL,
  `priority` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `saved_product`
--

CREATE TABLE `saved_product` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_time` date NOT NULL DEFAULT current_timestamp(),
  `updated_time` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `shoppers`
--

CREATE TABLE `shoppers` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `name` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `shop_location` varchar(100) NOT NULL,
  `shop_type` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(10) NOT NULL DEFAULT 'shop',
  `enabled` int(11) NOT NULL DEFAULT 1,
  `created_time` date NOT NULL DEFAULT current_timestamp(),
  `updated_time` date NOT NULL DEFAULT current_timestamp(),
  `priority` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shoppers`
--

INSERT INTO `shoppers` (`id`, `email`, `phone`, `name`, `address`, `shop_location`, `shop_type`, `password`, `role`, `enabled`, `created_time`, `updated_time`, `priority`) VALUES
(2, 'hasibarrafiulfahim@gmail.com', '01794798101', 'Mohammadiya store', 'Banasree, Block E, Road 8, House 21', '192degreeeast', 'Confectionary', '51b27d8c33b1917654eec2c34a0e6d8ce66565189dc02fce9665644fc74694e2', 'shop', 1, '2023-02-20', '2023-02-20', 1);

-- --------------------------------------------------------

--
-- Table structure for table `shop_statistics`
--

CREATE TABLE `shop_statistics` (
  `id` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `visit_count` int(11) NOT NULL DEFAULT 0,
  `category_count` int(11) NOT NULL DEFAULT 0,
  `product_count` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_customer_id_contact` (`customer_id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `customers_statistics`
--
ALTER TABLE `customers_statistics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_customer_id_stat` (`customer_id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_category_id` (`category_id`),
  ADD KEY `fk_shop_id` (`shop_id`);

--
-- Indexes for table `product_statistics`
--
ALTER TABLE `product_statistics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_product_id_stat` (`product_id`);

--
-- Indexes for table `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_product_id` (`product_id`),
  ADD KEY `fk_customer_id` (`customer_id`);

--
-- Indexes for table `saved_product`
--
ALTER TABLE `saved_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_customer_id_saved` (`customer_id`),
  ADD KEY `fk_product_id_saved` (`product_id`);

--
-- Indexes for table `shoppers`
--
ALTER TABLE `shoppers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `shop_statistics`
--
ALTER TABLE `shop_statistics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_shop_id_stat` (`shop_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `customers_statistics`
--
ALTER TABLE `customers_statistics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_statistics`
--
ALTER TABLE `product_statistics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rating`
--
ALTER TABLE `rating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `saved_product`
--
ALTER TABLE `saved_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shoppers`
--
ALTER TABLE `shoppers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `shop_statistics`
--
ALTER TABLE `shop_statistics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD CONSTRAINT `fk_customer_id_contact` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);

--
-- Constraints for table `customers_statistics`
--
ALTER TABLE `customers_statistics`
  ADD CONSTRAINT `fk_customer_id_stat` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `fk_shop_id` FOREIGN KEY (`shop_id`) REFERENCES `shoppers` (`id`);

--
-- Constraints for table `product_statistics`
--
ALTER TABLE `product_statistics`
  ADD CONSTRAINT `fk_product_id_stat` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `rating`
--
ALTER TABLE `rating`
  ADD CONSTRAINT `fk_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  ADD CONSTRAINT `fk_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `saved_product`
--
ALTER TABLE `saved_product`
  ADD CONSTRAINT `fk_customer_id_saved` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  ADD CONSTRAINT `fk_product_id_saved` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `shop_statistics`
--
ALTER TABLE `shop_statistics`
  ADD CONSTRAINT `fk_shop_id_stat` FOREIGN KEY (`shop_id`) REFERENCES `shoppers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
