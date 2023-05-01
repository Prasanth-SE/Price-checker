/*
Navicat MySQL Data Transfer

Source Server         : pricechecker
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : fyp

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2023-05-01 10:03:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `com_logo` varchar(100) DEFAULT NULL,
  `com_name` varchar(100) NOT NULL,
  `email` varchar(60) NOT NULL,
  `com_phone` varchar(15) DEFAULT NULL,
  `com_address` varchar(255) DEFAULT NULL,
  `cur_format` varchar(10) NOT NULL,
  `admin_role` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('1', 'admin1', '$10$k1XS8YW4AfyIrO6KHNbvFuf3wnoPtmdaCDCY80Xr/0BGwAm6L07Mi', null, 'Inventory', 'inventory@gmail.com', null, null, '$', '1');
INSERT INTO `admin` VALUES ('2', 'admin', '$2y$10$gCE2xru.CMPBC3htqilGkuUm9tdkFAJIAanab2Ewy.Fo9RpS2xRgO', null, '', 'admin@gmail.com', null, null, '', '0');

-- ----------------------------
-- Table structure for brands
-- ----------------------------
DROP TABLE IF EXISTS `brands`;
CREATE TABLE `brands` (
  `brand_id` int(11) NOT NULL AUTO_INCREMENT,
  `brand_title` text NOT NULL,
  `brand_cat` int(11) NOT NULL,
  PRIMARY KEY (`brand_id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of brands
-- ----------------------------
INSERT INTO `brands` VALUES ('13', 'Realme', '9');
INSERT INTO `brands` VALUES ('12', 'Lenovo', '9');
INSERT INTO `brands` VALUES ('11', 'LG', '9');
INSERT INTO `brands` VALUES ('10', 'Samsung', '9');

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `cat_id` int(100) NOT NULL AUTO_INCREMENT,
  `cat_title` text NOT NULL,
  `products` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`cat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES ('9', 'Electronics', '0');
INSERT INTO `categories` VALUES ('10', 'Men', '0');
INSERT INTO `categories` VALUES ('11', 'Women', '0');
INSERT INTO `categories` VALUES ('12', 'Furniture', '0');

-- ----------------------------
-- Table structure for fav
-- ----------------------------
DROP TABLE IF EXISTS `fav`;
CREATE TABLE `fav` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_email` varchar(100) NOT NULL,
  `product_url` varchar(1000) NOT NULL,
  `time_stamp` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `image_url` varchar(1000) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `title` varchar(200) DEFAULT NULL,
  `price` varchar(20) DEFAULT NULL,
  `eshop` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of fav
-- ----------------------------
INSERT INTO `fav` VALUES ('4', 'sample', 'https://ebay.com/itm/123456?hash=item28caef0a3a:g:E3kAAOSwlGJiMikD', '2022-06-30 16:43:21', '', null, null, null, '');
INSERT INTO `fav` VALUES ('5', 'sample', 'https://www.flipkart.com/vivo-t1-44w-starry-sky-128-gb/p/itm6fabe8894256b', '2022-06-30 16:45:29', '', null, null, null, '');
INSERT INTO `fav` VALUES ('6', 'sample', '//www.aliexpress.com/item/3256804277716806.html', '2022-06-30 16:45:40', '', null, null, null, '');
INSERT INTO `fav` VALUES ('7', '', '', '2022-07-01 12:00:22', '', null, null, null, '');
INSERT INTO `fav` VALUES ('11', 'horikhan840@gmail.com', 'https://www.ebay.com/itm/403312270372?epid=2305029321', '2022-07-01 12:04:39', '', null, null, null, '');
INSERT INTO `fav` VALUES ('12', 'horikhan840@gmail.com', 'https://www.amazon.com/dp/B09NBPSYKD', '2022-07-01 12:07:12', '', null, null, null, '');
INSERT INTO `fav` VALUES ('13', 'horikhan840@gmail.com', 'https://www.flipkart.com/dell-core-i3-10th-gen-8-gb-1-tb-hdd-256-gb-ssd-windows-11-home-vostro-3510-thin-light-laptop/p/itm9ba5f470413d2', '2022-07-01 12:07:17', '', null, null, null, '');
INSERT INTO `fav` VALUES ('14', 'horikhan840@gmail.com', 'https://www.ebay.com/itm/334100133142?hash=item4dc9eb7516:g:0sIAAOSw6TVhCYoQ', '2022-07-02 09:53:07', '', null, null, null, '');
INSERT INTO `fav` VALUES ('15', 'horikhan840@gmail.com', 'https://ebay.com/itm/123456?hash=item28caef0a3a:g:E3kAAOSwlGJiMikD', '2022-07-02 10:00:32', 'https://ir.ebaystatic.com/rs/v/fxxj3ttftm5ltcqnto1o4baovyl.png', null, null, null, '');
INSERT INTO `fav` VALUES ('16', 'horikhan840@gmail.com', 'https://www.amazon.com/dp/B095RZ62BX', '2022-07-02 10:00:33', 'https://m.media-amazon.com/images/I/61zRDADh YS._AC_UY218_.jpg', null, null, null, '');
INSERT INTO `fav` VALUES ('17', 'horikhan840@gmail.com', 'https://www.flipkart.com/dell-ryzen-5-hexa-core-5600h-8-gb-512-gb-ssd-windows-10-4-graphics-nvidia-geforce-rtx-3050-g15-5515-gaming-laptop/p/itm337b5cde6d860', '2022-07-02 10:00:38', 'https://rukminim1.flixcart.com/image/312/312/kwl0akw0/computer/o/4/q/g15-5515-gaming-laptop-dell-original-imag98e62brs8uzy.jpeg?q=70', null, null, null, '');
INSERT INTO `fav` VALUES ('30', 'super@gmail.com', 'http://localhost/pricechecker/mock-data/iphone_apple/1.png', '2023-02-24 11:10:32', 'http://localhost/pricechecker/mock-data/laptop/Samsung Unveils Two New PCs with Signature Style and Performance - Samsung  US Newsroom.jpg', 'Samsung Unveils Two New PCs with Signature Style and Performance - Samsung  US Newsroom', 'Samsung Unveils Two New PCs with Signature Style and Performance - Samsung  US Newsroom', 'C $250', '');
INSERT INTO `fav` VALUES ('31', 'super@gmail.com', 'http://localhost/pricechecker/mock-data/laptop/Ultra-Thin Touchscreen Laptop - Microsoft Surface.jpg', '2023-02-24 11:12:15', 'http://localhost/pricechecker/mock-data/laptop/Ultra-Thin Touchscreen Laptop - Microsoft Surface.jpg', 'Ultra-Thin Touchscreen Laptop - Microsoft Surface', 'Ultra-Thin Touchscreen Laptop - Microsoft Surface', 'C $200', '');
INSERT INTO `fav` VALUES ('32', 'poot@gmail.com', 'http://localhost/pricechecker/mock-data/iphone/iPhone 11 128GB, Genuine Black cheap, instant delivery.jpg', '2023-02-24 18:22:02', 'http://localhost/pricechecker/mock-data/iphone/iPhone 11 128GB, Genuine Black cheap, instant delivery.jpg', 'iPhone 11 128GB, Genuine Black cheap, instant delivery', 'iPhone 11 128GB, Genuine Black cheap, instant delivery', ' C $350', '');
INSERT INTO `fav` VALUES ('35', 'matin@gmail.com', 'http://localhost/pricechecker/mock-data/laptop/Ultra-Thin Touchscreen Laptop - Microsoft Surface.jpg', '2023-03-13 15:51:49', 'http://localhost/pricechecker/mock-data/laptop/Ultra-Thin Touchscreen Laptop - Microsoft Surface.jpg', 'Ultra-Thin Touchscreen Laptop - Microsoft Surface', 'Ultra-Thin Touchscreen Laptop - Microsoft Surface', '$200', 'Ebay');
INSERT INTO `fav` VALUES ('36', 'matin@gmail.com', 'http://localhost/pricechecker/mock-data/laptop/Samsung Unveils Two New PCs with Signature Style and Performance - Samsung  US Newsroom.jpg', '2023-03-13 17:24:29', 'http://localhost/pricechecker/mock-data/laptop/Samsung Unveils Two New PCs with Signature Style and Performance - Samsung  US Newsroom.jpg', 'Samsung Unveils Two New PCs with Signature Style and Performance - Samsung  US Newsroom', 'Samsung Unveils Two New PCs with Signature Style and Performance - Samsung  US Newsroom', '$250', 'Amazon');

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `product_id` int(100) NOT NULL AUTO_INCREMENT,
  `product_code` varchar(100) NOT NULL,
  `product_cat` int(100) NOT NULL,
  `product_sub_cat` int(11) NOT NULL,
  `product_brand` int(100) DEFAULT NULL,
  `product_title` varchar(255) NOT NULL,
  `product_price` varchar(100) NOT NULL,
  `product_desc` text NOT NULL,
  `featured_image` text NOT NULL,
  `qty` int(11) NOT NULL DEFAULT 1,
  `product_keywords` text DEFAULT NULL,
  `product_views` int(11) DEFAULT 0,
  `product_status` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES ('2', '5fc500f4330ad', '9', '18', '10', 'Samsung Galaxy A20s (Blue, 32 GB)  (3 GB RAM)', '12900', '3 GB RAM | 32 GB ROM | Expandable Upto 512 GB\r\n16.51 cm (6.5 inch) HD+ Display\r\n13MP + 8MP + 5MP | 8MP Front Camera\r\n4000 mAh Lithium Ion Battery\r\nQualcomm SDM450-B01 Processor', '1598962160galaxy-a20s.jpeg', '0', null, '1', '1');
INSERT INTO `products` VALUES ('3', '5fc500ec98a64', '9', '18', '13', 'Realme C3 (Volcano Grey, 32 GB)  (3 GB RAM)', '8999', '3 GB RAM | 32 GB ROM | Expandable Upto 256 GB\r\n16.56 cm (6.52 inch) HD+ Display\r\n12MP + 2MP | 5MP Front Camera\r\n5000 mAh Battery\r\nHelio G70 Processor', '1598962665realme-c3.jpeg', '1', null, '31', '1');
INSERT INTO `products` VALUES ('4', '5fc500e4de9c2', '9', '19', '12', 'Lenovo Ideapad Flex 5 Core i3 10th Gen - (4 GB/256 GB SSD/Windows 10 Home) 14IIL05 2 in 1 Laptop  (14 inch, Graphite Grey, 1.5 kg, With MS Office)', '46990', 'Carry It Along 2 in 1 Laptop\r\n14 inch Full HD LED Backlit Glossy IPS Touch Display (16:9 Aspect Ratio, 250 nits Brightness, Stylus Support)\r\nLight Laptop without Optical Disk Drive\r\n\r\nShipping charges are calculated based on the number of units, distance and delivery date.\r\nFor Plus customers, shipping charges are free.\r\nFor non-Plus customers, if the total value of FAssured items is more than Rs.500, shipping charges are free. If the total value of FAssured items is less than Rs.500, shipping charges = Rs.40 per unit\r\n* For faster delivery, shipping charges will be applicable.', '1598962854lenovo.jpeg', '1', null, '10', '1');
INSERT INTO `products` VALUES ('5', '5fc500decacd2', '9', '19', '12', 'Lenovo Ideapad 3 Core i3 10th Gen - (4 GB/1 TB HDD/DOS) 14IIL05 Thin and Light Laptop  (14 inch, Platinum Grey, 1.6 kg)', '32095', 'Stylish &amp; Portable Thin and Light Laptop\r\n14 inch HD LED Backlit Anti-glare TN Display (220 nits Brightness)\r\nLight Laptop without Optical Disk Drive', '1598963006lenovo-2.jpeg', '1', null, '1', '1');
INSERT INTO `products` VALUES ('6', '5fc500d9502a7', '12', '25', '0', 'Flipkart Perfect Homes Iris Therapedic 6 inch King Bonnell Spring Mattress', '11090', 'Length: 78 inch, Width: 72 inch, Thickness: 6 inch (6 ft 6 in x 6 ft x 6 in)\r\nSupport Type: Bonnell Spring\r\nComfort Layer: PU Foam\r\nMattress Features: Orthopedic Mattress, Zero Partner Disturbance, Sag Resistant Mattress', '1598963093queen-10.jpeg', '1', null, '1', '1');
INSERT INTO `products` VALUES ('7', '5fc500d3ae088', '12', '25', '0', 'Peps Springkoil Normal Top Blue 6 inch Double Bonnell Spring Mattress', '10540', 'Length: 72 inch, Width: 48 inch, Thickness: 6 inch (6 ft x 4 ft x 6 in)\r\nSupport Type: Bonnell Spring\r\nComfort Layer: PU Foam\r\nMattress Features: Reversible Mattress', '1598963343double-10.jpeg', '1', null, '4', '1');
INSERT INTO `products` VALUES ('8', '5fc500cd9a2c4', '12', '24', '0', 'Delite Kom Riley Engineered Wood Bedside Table  (Finish Color - Acacia Dark)', '2750', 'Rectangular\r\nWidth x Height: 44.958 x 39.878 cm (1 ft 5 in x 1 ft 3 in)\r\nSuitable For: Bedroom Furniture, Living Room\r\nStorage Included\r\nDIY - Basic assembly to be done with simple tools by the customer, comes with instructions', '1598963469particle-board.jpeg', '1', null, '0', '1');
INSERT INTO `products` VALUES ('9', '5fc500c7c7bef', '10', '26', '0', 'Abstract Men Hooded Neck Dark Blue T-Shirt', '359', '10% Instant Discount on Bank Of Baroda Credit Cards\r\n10% Instant Discount on Federal Bank Debit Cards', '1598963616s-tnvhdf.jpeg', '1', null, '2', '1');
INSERT INTO `products` VALUES ('10', '5fc500c285db4', '10', '26', '0', 'Printed Men Round Neck Yellow T-Shirt', '284', 'Get extra 5.0% off (price inclusive of discount)\r\n10% Instant Discount on Federal Bank Debit Cards\r\n10% Instant Discount on Bank Of Baroda Credit Cards', '1598963703xl-newyork.jpeg', '1', null, '0', '1');
INSERT INTO `products` VALUES ('11', '5fc500bc5d3e3', '11', '27', '0', 'Women Printed Pure Cotton A-line Kurta  (White, Blue, Pink)', '759', '10% Instant Discount on Federal Bank Debit Cards\r\n10% Instant Discount on Bank Of Baroda Credit Cards\r\n5% Unlimited Cashback on Flipkart Axis Bank Credit Card', '1598963806xxl-md377.jpeg', '3', null, '14', '1');
INSERT INTO `products` VALUES ('12', '5fc500b5570aa', '11', '28', '0', 'Polka Print Bhagalpuri Cotton Blend Saree  (Blue)', '299', 'Special Price  Get extra 10.0% off (price inclusive of discount)\r\nBank Offer10% Instant Discount on Federal Bank Debit Cards', '1598963976free-kora.jpeg', '12', null, '14', '1');

-- ----------------------------
-- Table structure for product_cart
-- ----------------------------
DROP TABLE IF EXISTS `product_cart`;
CREATE TABLE `product_cart` (
  `s_no` int(11) NOT NULL AUTO_INCREMENT,
  `p_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`s_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of product_cart
-- ----------------------------

-- ----------------------------
-- Table structure for registered_products
-- ----------------------------
DROP TABLE IF EXISTS `registered_products`;
CREATE TABLE `registered_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(1000) DEFAULT '',
  `description` varchar(1000) DEFAULT '',
  `product_url` varchar(1000) DEFAULT '',
  `image_url` varchar(1000) DEFAULT '',
  `price` varchar(10) DEFAULT NULL,
  `category` varchar(100) DEFAULT '',
  `eshop` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of registered_products
-- ----------------------------
INSERT INTO `registered_products` VALUES ('13', 'mock-data/laptop/The 9 Best Laptops of 2023.jpg', 'mock-data/laptop/The 9 Best Laptops of 2023.jpg', 'http://localhost/pricechecker/mock-data/laptop/The 9 Best Laptops of 2023.jpg', 'http://localhost/pricechecker/mock-data/laptop/The 9 Best Laptops of 2023.jpg', '400$', 'mock-data/laptop/The 9 Best Laptops of 2023.jpg', 'Amazon');
INSERT INTO `registered_products` VALUES ('14', 'Samsung Unveils Two New PCs with Signature Style and Performance - Samsung  US Newsroom', 'Samsung Unveils Two New PCs with Signature Style and Performance - Samsung  US Newsroom', 'http://localhost/pricechecker/mock-data/laptop/Samsung Unveils Two New PCs with Signature Style and Performance - Samsung  US Newsroom.jpg', 'http://localhost/pricechecker/mock-data/laptop/Samsung Unveils Two New PCs with Signature Style and Performance - Samsung  US Newsroom.jpg', '250$', 'Samsung Unveils Two New PCs with Signature Style and Performance - Samsung  US Newsroom', 'Amazon');
INSERT INTO `registered_products` VALUES ('15', 'Ultra-Thin Touchscreen Laptop - Microsoft Surface', 'Ultra-Thin Touchscreen Laptop - Microsoft Surface', 'http://localhost/pricechecker/mock-data/laptop/Ultra-Thin Touchscreen Laptop - Microsoft Surface.jpg', 'http://localhost/pricechecker/mock-data/laptop/Ultra-Thin Touchscreen Laptop - Microsoft Surface.jpg', '200$', 'Ultra-Thin Touchscreen Laptop - Microsoft Surface', 'Amazon');
INSERT INTO `registered_products` VALUES ('16', 'iPhone 14 Pro 256GB 27790', 'iPhone 14 Pro 256GB 27790', 'http://localhost/pricechecker/mock-data/iphone_apple/1.png', 'http://localhost/pricechecker/mock-data/iphone_apple/1.png', '570$', 'iPhone 14 Pro 256GB 27790', 'Amazon');
INSERT INTO `registered_products` VALUES ('17', 'Samsung Galaxy Book 2 Pro 360.jpg', 'Samsung Galaxy Book 2 Pro 360.jpg', 'http://localhost/pricechecker/mock-data/laptop/Samsung Galaxy Book 2 Pro 360.jpg', 'http://localhost/pricechecker/mock-data/laptop/Samsung Galaxy Book 2 Pro 360.jpg', '300$', 'Samsung Galaxy Book 2 Pro 360.jpg', 'Amazon');

-- ----------------------------
-- Table structure for sub_categories
-- ----------------------------
DROP TABLE IF EXISTS `sub_categories`;
CREATE TABLE `sub_categories` (
  `sub_cat_id` int(11) NOT NULL AUTO_INCREMENT,
  `sub_cat_title` varchar(100) NOT NULL,
  `cat_parent` int(11) NOT NULL,
  `cat_products` int(11) NOT NULL DEFAULT 0,
  `show_in_header` tinyint(4) NOT NULL DEFAULT 1,
  `show_in_footer` tinyint(4) NOT NULL DEFAULT 1,
  PRIMARY KEY (`sub_cat_id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of sub_categories
-- ----------------------------
INSERT INTO `sub_categories` VALUES ('19', 'Laptops', '9', '2', '1', '0');
INSERT INTO `sub_categories` VALUES ('21', 'Camera', '9', '0', '1', '0');
INSERT INTO `sub_categories` VALUES ('20', 'Speakers', '9', '0', '1', '0');
INSERT INTO `sub_categories` VALUES ('18', 'Mobiles', '9', '2', '1', '1');
INSERT INTO `sub_categories` VALUES ('22', 'Kitchen', '12', '0', '1', '0');
INSERT INTO `sub_categories` VALUES ('23', 'Tableware', '12', '0', '0', '1');
INSERT INTO `sub_categories` VALUES ('24', 'Living Room', '12', '1', '0', '1');
INSERT INTO `sub_categories` VALUES ('25', 'Beds', '12', '2', '1', '1');
INSERT INTO `sub_categories` VALUES ('26', 'Men\'s T-Shirts', '10', '2', '1', '1');
INSERT INTO `sub_categories` VALUES ('27', 'Kurti\'s', '11', '1', '1', '1');
INSERT INTO `sub_categories` VALUES ('28', 'Sarees', '11', '1', '0', '1');

-- ----------------------------
-- Table structure for tracked_products
-- ----------------------------
DROP TABLE IF EXISTS `tracked_products`;
CREATE TABLE `tracked_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(1000) DEFAULT '',
  `description` varchar(1000) DEFAULT NULL,
  `current_price` varchar(10) DEFAULT NULL,
  `image_url` varchar(1000) DEFAULT '',
  `product_url` varchar(1000) DEFAULT '',
  `user_email` varchar(100) DEFAULT '',
  `old_price` varchar(20) NOT NULL,
  `eshop` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of tracked_products
-- ----------------------------

-- ----------------------------
-- Table structure for trending_products
-- ----------------------------
DROP TABLE IF EXISTS `trending_products`;
CREATE TABLE `trending_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(1000) DEFAULT '',
  `description` varchar(1000) DEFAULT '',
  `product_url` varchar(1000) DEFAULT '',
  `image_url` varchar(1000) DEFAULT '',
  `price` varchar(10) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `eshop` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of trending_products
-- ----------------------------
INSERT INTO `trending_products` VALUES ('8', 'Samsung Unveils Two New PCs with Signature Style and Performance - Samsung  US Newsroom', 'Samsung Unveils Two New PCs with Signature Style and Performance - Samsung  US Newsroom', 'http://localhost/pricechecker/mock-data/iphone_apple/1.png', 'http://localhost/pricechecker/mock-data/laptop/Samsung Unveils Two New PCs with Signature Style and Performance - Samsung  US Newsroom.jpg', 'C $250', 'Samsung Unveils Two New PCs with Signature Style a', 'Amazon');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `city` text NOT NULL,
  `user_role` int(11) DEFAULT 1,
  `code` mediumint(9) NOT NULL,
  `status` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('18', 'Muhammad Haroon', 'horikhan840@gmail.com', '$2y$10$iYH1T2zYAuKpOs7beLmHWOOt3oF25jM6w2GIkZglUg/hQUE/H1m5C', '+923487490545', 'Faisalabad', '1', '0', 'verified');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `city` text NOT NULL,
  `user_role` int(11) DEFAULT 1,
  `code` mediumint(9) NOT NULL,
  `status` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('35', 'super', 'super@gmail.com', '$2y$10$lPvvXrYK1UHYWnzfLWKjouOz1R2Mxk3wp8y.C/36mpb7UtRaf4sSS', '', '', '1', '962727', 'verified');
INSERT INTO `users` VALUES ('34', 'matin', 'matin@gmail.com', '$2y$10$W2bZAog2lbKD/Md3Z0ZVcu/KzWbwOZbIrhMWW/LA/VvMz6Wd5/.Re', '', '', '1', '636936', 'verified');
INSERT INTO `users` VALUES ('36', 'snow', 'snow@gmail.com', '$2y$10$0hcR/d61O9P6.u5Zxtb2Weh2KAnL00WFEsGjtVSpxCPms7XssjIj.', '', '', '1', '0', 'verified');

-- ----------------------------
-- Table structure for visited_products
-- ----------------------------
DROP TABLE IF EXISTS `visited_products`;
CREATE TABLE `visited_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_email` varchar(50) DEFAULT '',
  `image_url` varchar(1000) DEFAULT '',
  `product_url` varchar(1000) DEFAULT '',
  `title` varchar(1000) DEFAULT '',
  `description` varchar(1000) DEFAULT '',
  `price` varchar(20) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of visited_products
-- ----------------------------
INSERT INTO `visited_products` VALUES ('1', 'matin@gmail.com', 'http://localhost/pricechecker/user/images/ebay.png', 'url2', 'title2', 'title2', '1340');
INSERT INTO `visited_products` VALUES ('2', 'matin@gmail.com', 'http://localhost/pricechecker/user/images/flipkart.png', '1111', 'Wireless Audio System Multiroom 360 degree Full base audio', 'Wireless Audio System Multiroom 360 degree Full base audio', '$10-$20');
INSERT INTO `visited_products` VALUES ('3', 'matin@gmail.com', 'http://localhost/pricechecker/mock-data/laptop/Ultra-Thin Touchscreen Laptop - Microsoft Surface.jpg', 'http://localhost/pricechecker/mock-data/laptop/Ultra-Thin Touchscreen Laptop - Microsoft Surface.jpg', 'Ultra-Thin Touchscreen Laptop - Microsoft Surface', 'Ultra-Thin Touchscreen Laptop - Microsoft Surface', '200$');
INSERT INTO `visited_products` VALUES ('4', 'matin@gmail.com', 'http://localhost/pricechecker/mock-data/laptop/Samsung Galaxy Book 2 Pro 360.jpg', 'http://localhost/pricechecker/mock-data/laptop/Samsung Galaxy Book 2 Pro 360.jpg', 'Samsung Galaxy Book 2 Pro 360.jpg', 'Samsung Galaxy Book 2 Pro 360.jpg', 'C $300');
INSERT INTO `visited_products` VALUES ('5', 'matin@gmail.com', 'http://localhost/pricechecker/mock-data/iphone_apple/1.png', 'http://localhost/pricechecker/mock-data/iphone_apple/1.png', 'iPhone 14 Pro 256GB 27790', 'iPhone 14 Pro 256GB 27790', '570$');
INSERT INTO `visited_products` VALUES ('6', 'matin@gmail.com', 'http://localhost/pricechecker/mock-data/iphone_apple/1.png', 'http://localhost/pricechecker/mock-data/laptop/Samsung Unveils Two New PCs with Signature Style and Performance - Samsung  US Newsroom.jpg', 'iPhone 14 Pro 256GB 27790', 'iPhone 14 Pro 256GB 27790', '$570');
INSERT INTO `visited_products` VALUES ('12', 'snow@gmail.com', 'http://localhost/pricechecker/mock-data/laptop/Ultra-Thin Touchscreen Laptop - Microsoft Surface.jpg', 'http://localhost/pricechecker/mock-data/laptop/Ultra-Thin Touchscreen Laptop - Microsoft Surface.jpg', 'UltraThin Touchscreen Laptop Microsoft Surface', 'UltraThin Touchscreen Laptop Microsoft Surface', '$51.13 to ');
INSERT INTO `visited_products` VALUES ('13', 'snow@gmail.com', 'http://localhost/pricechecker/mock-data/laptop/Samsung Unveils Two New PCs with Signature Style and Performance - Samsung  US Newsroom.jpg', 'http://localhost/pricechecker/mock-data/iphone_apple/1.png', 'Acer Aspire 5 A51546R3UB 156 Full HD IPS Display AMD Ryzen 3 3350U Quad Core Mobile Processor 4GB DDR4 128GB N', 'Acer Aspire 5 A51546R3UB 156 Full HD IPS Display AMD Ryzen 3 3350U Quad Core Mobile Processor 4GB DDR4 128GB N', '$51.13 to $74.01');
