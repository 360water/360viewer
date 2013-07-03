The goal of this project is to create a html/javascript version of the 360viewer

SQL Tables
----------
CREATE TABLE `viewers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `assigned_id` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
)


CREATE TABLE `viewer_hotspots` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `viewer_id` int(11) NOT NULL,
  `view_id` int(11) NOT NULL,
  `component_id` int(11) NOT NULL,
  `left` int(5) NOT NULL,
  `top` int(5) NOT NULL,
  `width` int(5) NOT NULL,
  `height` int(5) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
)


CREATE TABLE `viewer_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `viewer_id` int(11) NOT NULL,
  `type` varchar(9) NOT NULL,
  `order` int(2) NOT NULL,
  `url` varchar(250) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
)
