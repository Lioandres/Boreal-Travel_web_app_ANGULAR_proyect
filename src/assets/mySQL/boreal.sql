-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-07-2022 a las 11:38:54
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `boreal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `excursion`
--

CREATE TABLE `excursion` (
  `id_excursion` int(8) NOT NULL,
  `excursions_template_id` int(6) NOT NULL,
  `user_id` int(8) NOT NULL,
  `num_max_people` int(2) NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `excursion`
--

INSERT INTO `excursion` (`id_excursion`, `excursions_template_id`, `user_id`, `num_max_people`, `price`, `start`, `end`, `created_at`, `updated_at`) VALUES
(1, 1, 0, 0, '0.00', '2022-07-21 09:47:14', '2022-07-21 09:47:14', '2022-07-21 09:48:18', '2022-07-21 09:47:14'),
(2, 2, 0, 0, '0.00', '2022-07-21 09:47:14', '2022-07-21 09:47:14', '2022-07-21 09:48:18', '2022-07-21 09:47:14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `excursions_template`
--

CREATE TABLE `excursions_template` (
  `id_excursion_template` int(3) NOT NULL,
  `title` text NOT NULL,
  `img` varchar(65) NOT NULL,
  `type` varchar(20) NOT NULL,
  `description` text NOT NULL,
  `price_default` decimal(6,2) NOT NULL,
  `max_num_people_default` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `excursions_template`
--

INSERT INTO `excursions_template` (`id_excursion_template`, `title`, `img`, `type`, `description`, `price_default`, `max_num_people_default`) VALUES
(1, '\"Auroral Boreal Tour\"', '\"assets/img/boreal_1.webp\"', '\"boreal\"', '\"\"', '59.00', 30),
(2, '\"Auroral Boreal Tour en bote\"', '\"assets/img/boreal_2.webp\"', '\"boreal\"', '\"\"', '89.00', 6),
(3, '\"Baño de luces boreales\"', '\"assets/img/boreal_3.webp\"', '\"boreal\"', '\"Conducimos a través del hermoso sitio de la UNESCO Þingvellir Parque Nacional en nuestro camino a Laugarvatn Fontana, donde tiene la opción de comprar la cena en su restaurante por un costo adicional. Fontana tiene tres salas de vapor construidas sobre una fuente termal natural y una sauna tradicional junto con cuatro piscinas calientes diferentes. Los viajeros más aventureros pueden darse un chapuzón en el lago Laugarvatn (cuando sea accesible) y refrescarse entre los baños de vapor y la sauna. Las temperaturas de vapor oscilan entre 40 ° C y 50 ° C (104 ° F y 122 ° F), dependiendo de la temperatura de las aguas termales y el clima. Las salas de vapor crean una experiencia única, ya que se puede oler el agua caliente natural hirviendo debajo de las rejillas en el suelo. La sauna tradicional tiene una humedad más baja que las salas de vapor, pero la temperatura es más alta, entre 80 ° C y 90 ° C (176 ° F y 194 ° F). Los tres baños minerales al aire libre conectados varían en profundidad, tamaño y temperatura. Es el escenario perfecto para relajarse y socializar. Desde los baños, se puede ver una vista panorámica del campo alrededor de Fontana y las auroras boreales bailando en el cielo si tienes suerte y aparecen temprano.El gel de ducha, el champú y el acondicionador de Sóley Organics están disponibles en los vestuarios.Caza de auroras boreales en Islandia   En nuestro camino de regreso a Reikiavik, vamos en una cacería de auroras boreales, una de las vistas más inolvidables de Islandia. Nuestro equipo de expertos estudia las auroras boreales y los pronósticos de nubes para encontrar el mejor lugar para un avistamiento, pero dado que las auroras boreales son un fenómeno natural, no se pueden garantizar los avistamientos.Duración del tour: 18:00 - 00:30.\"', '90.00', 30),
(4, '\"Auroral Boreal Tour-grupos pequeños\"', '\"assets/img/boreal_4.webp\"', '\"boreal\"', '\"\"', '79.00', 8),
(5, '\"Tour de exploración Auroral boreal en Super-Jeep\"', '\"assets/img/boreal_5.webp\"', '\"boreal\"', '\"\"', '50.78', 6),
(6, '\"Laguna Azul : Translados y admision\"', '\"assets/img/lake_1.webp\"', '\"lake\"', '\"\"', '129.00', 30),
(7, '\"Lago Azul- Translados y Admision Premium\"', '\"assets/img/lake_2_webp.webp\"', '\"lake\"', '\"\"', '149.00', 30),
(8, '\"Circulo Dorado en Directo\"', '\"assets/img/circle_1webp.webp\"', '\"circle\"', '\"\"', '64.00', 30),
(9, '\"Circulo Dorado y Friorheimer\"', '\"assets/img/circle_2.webp\"', '\"circle\"', '\"\"', '69.00', 30),
(10, '\"Círculo Dorado y SnowBorad\"', '\"assets/img/circle_3.webp\"', '\"circle\"', '\"\"', '209.00', 30),
(11, '\"Círculo dorado y Aurora Boreal\"', '\"assets/img/circle_4.webp\"', '\"circle\"', '\"\"', '113.00', 30),
(12, '\"Círculo Dorado y Fuente natural\"', '\"assets/img/circle_5.webp\"', '\"circle\"', '\"\"', '99.00', 30),
(13, '\"Círculo Dorado y tunel de lava\"', '\"assets/img/circle_6.webp\"', '\"circle\"', '\"\"', '139.00', 30),
(14, '\"Aventura en Þórsmörk\"', '\"assets/img/bus_1.webp\"', '\"bus\"', '\"\"', '59.00', 30),
(15, '\"Aventura Landmannalaugar\"', '\"assets/img/bus_2.webp\"', '\"bus\"', '\"\"', '65.00', 30),
(16, '\"Aventura Skógar\"', '\"assets/img/bus_3.webp\"', '\"bus\"', '\"\"', '58.00', 30),
(17, '\"Aventura Grænihryggur con guias de montaña\"', '\"assets/img/bus_4.webp\"', '\"bus\"', '\"\"', '175.00', 30),
(18, '\"Camino desde Reykjavik\"', '\"assets/img/bus_5.webp\"', '\"bus\"', '\"\"', '106.00', 30),
(19, '\"Combo tour Laugavegur & Fimmvörðuháls\"', '\"assets/img/bus_6.webp\"', '\"bus\"', '\"\"', '1970.00', 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payments`
--

CREATE TABLE `payments` (
  `id_payment` int(8) NOT NULL,
  `reservation_id` int(8) NOT NULL,
  `payment_method` varchar(15) NOT NULL,
  `payment_date` date NOT NULL,
  `payment_status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservations`
--

CREATE TABLE `reservations` (
  `id_reservation` int(8) NOT NULL,
  `excursion_Id` int(8) NOT NULL,
  `payment_id` int(8) NOT NULL,
  `name` varchar(120) NOT NULL,
  `email` varchar(120) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `num_people` tinyint(3) NOT NULL,
  `date_reservation` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_user` int(6) NOT NULL,
  `User_name` varchar(15) NOT NULL,
  `User_mail` varchar(65) NOT NULL,
  `User-password` varchar(8) NOT NULL,
  `user_rol` varchar(10) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_user`, `User_name`, `User_mail`, `User-password`, `user_rol`, `created_at`, `updated_at`) VALUES
(1, 'emilio', 'emilio@hotmail.com', '12345678', 'admin', '2022-07-21 10:29:06', '2022-07-21 10:27:42'),
(2, 'andres', 'andres@hotmail.com', '12345678', 'operator', '2022-07-21 10:29:06', '2022-07-21 10:27:42');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `excursion`
--
ALTER TABLE `excursion`
  ADD PRIMARY KEY (`id_excursion`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `excursions_template_id` (`excursions_template_id`);

--
-- Indices de la tabla `excursions_template`
--
ALTER TABLE `excursions_template`
  ADD PRIMARY KEY (`id_excursion_template`);

--
-- Indices de la tabla `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id_payment`),
  ADD KEY `reservation_id` (`reservation_id`);

--
-- Indices de la tabla `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id_reservation`),
  ADD KEY `excursion_Id` (`excursion_Id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `excursion`
--
ALTER TABLE `excursion`
  MODIFY `id_excursion` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `excursions_template`
--
ALTER TABLE `excursions_template`
  MODIFY `id_excursion_template` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id_reservation` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `excursion`
--
ALTER TABLE `excursion`
  ADD CONSTRAINT `excursion_ibfk_1` FOREIGN KEY (`excursions_template_id`) REFERENCES `excursions_template` (`id_excursion_template`);

--
-- Filtros para la tabla `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`reservation_id`) REFERENCES `reservations` (`id_reservation`);

--
-- Filtros para la tabla `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`excursion_Id`) REFERENCES `excursion` (`id_excursion`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
