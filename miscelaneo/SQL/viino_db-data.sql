/* Script de datos de Viino_db*/

USE viino_db;



--
-- Datos para la tabla `producers`
--

lock table `producers` write;
DELETE FROM `producers`;
INSERT INTO `producers` 
   (id, name )
VALUES
    (1, 'Aleanna'),
    (2,'Buscado Vivo o Muerto'),
    (3,'Cara Sur'),
    (4,'Catena Zapata'),
    (5,'Chacra'),
    (6,'Durigutti'),
    (7,'Estancia Los Cardones'),
    (8,'Finca Suarez'),
    (9,'Les Astronautes'),
   (10,'Noeami'),
   (11,'Otronia'),
   (12,'Piedra Negra'),
   (13,'Pielihueso'),
   (14,'Riccitelli Wines'),
   (15,'Rocamadre'),
   (16, 'Vallisto'),
   (17, 'Ver Sacrum'),
   (18, 'Viña Alicia'),
   (19, 'Viña Los Chocos'),
   (20, 'Zuccardi');
UNLOCK TABLES;


--
-- Datos para la tabla `types`
--

lock table `types` write;
DELETE FROM `types`;
INSERT INTO `types` 
   (id, name )
VALUES
    (1, 'Blanco'),
    (2,'Champagne'),
    (3,'Espumoso'),
    (4,'Pet Nat'),
    (5,'Rosado'),
    (6,'Tinto');
UNLOCK TABLES;


--
-- Datos para la tabla `varietals`
--

LOCK TABLE `varietals` WRITE;
DELETE FROM `varietals`;
INSERT INTO `varietals` 
   (id, name )
VALUES
  (1, 'Blend'),
  (2, 'Chardonnay'),
  (3, 'Criolla Chica'),
  (4, 'Malbec'),
  (5, 'Nebbiolo'),
  (6,  'Pinot Gris'),
  (7,  'Pinot Gris, Pinot Noir'),
  (8, 'Pinot Noir');

UNLOCK TABLES;



--
-- Datos para la tabla `winemakers`
--

LOCK TABLE `winemakers` WRITE;
DELETE FROM `winemakers`;
INSERT INTO `winemakers` 
   (id, name )
VALUES
(1,'Alejandro Bartolomé'),
(2,'Alejandro Sejanovich'),
(3,'Alejandro Vigil'),
(4,'Diers'),
(5,'Eduardo Soler'),
(6,'Emma'),
(7,'Fredy'),
(8,'Germán Masera'),
(9,'Hans Vinding'),
(10,'Hector Durigutti'),
(11,'Hugh Ryman'),
(12,'Jeff Mausbach'),
(13,'Juan Pablo Murgia'),
(14,'JuanFa Suarez'),
(15,'JuanFa Suárez'),
(16,'Laura Principiano'),
(17,'Matías Riccitelli'),
(18,'Pablo Durigutti'),
(19,'Pancho Bugallo'),
(20,'Pancho Lavaque'),
(21,'Piero Incisa della Rocchetta'),
(22,'Rodrigo Arizu'),
(23,'Sebastián Bisole'),
(24,'Sebastián Zuccardi'),
(25,'Thibault Lepoutre');


UNLOCK TABLES;




--
-- Datos para la tabla `users`
--

/* Elena Crespo y  Martín Crippa son admin - el resto son users*/

LOCK TABLE `users` WRITE;
DELETE FROM `users`;
INSERT INTO `users` 
   (id, first_name, last_name, email, password, category, image)
VALUES
(1,'Elena','Crespo','elenacrespo@gmail.com', '$2b$10$wcWUGstl.Ek.zeQRbYrr.umEtFgFjV67o3PHlyKnY/79iEZi3gUMW','admin', 'generic.png'),
(2,'Martín','Crippa','martincrippa@gmail.com', '$2b$10$GDcbAL9gy1XEn49lqcnneOfZsoKIcN9jKtZ1k3FcdoVEII0va93pG','admin', 'generic.png'),
(3,'Julia','Frossi','juliafrossi@gmail.com', '$2b$10$NEQO/Gmy3mZVxm2an4L8KuWsr4wgwk33EFbRBHm0qqGM0KKyfim3a','user', 'generic.png'),
(4,'Santiago','Landucci','santiagolanducci@gmail.com', '$2b$10$CK1BXy8LoP3..LwW5xuuEewaMpMeQ7G8p.gtG2r2RTJrQDfgKpNWm','user', 'generic.png'),
(5,'Mirta','Lanatti','mirtalanatti@gmail.com', '$2b$10$1veeAatuznB2rSooFLzzY.l0gXqe1Qyb8fXhiW4ZmsuRHSJbpsU52','user', 'generic.png'),
(6,'Josefina','Peirone','josefinapeirone@gmail.com', '$2b$10$FMQJJD769JfznjDgtqgQI.ag8bP2.2FXQFl4Hw7zZJIMG5fsNPqLu','user', 'generic.png'),
(7,'Pablo','Ferri','pabloferri@gmail.com', '$2b$10$h2O7h8PAclw4Z1QJ1zPPiuO2MBiSLTc/l5gowehdw5IW5pi0DmY9W','user', 'generic.png'),
(8,'Hernan','Scandizzo','hernanscandizzo@gmail.com', '$2b$10$8b9vEX4IMKrnTYl7LXlt6OuhqX7EVRgI0SNpAyHITNsatVMBRrx76','user', 'generic.png'),
(9,'Fernando','Cabrera','fernandocabrera@gmail.com', '$2b$10$T2aPiDf.8dA57fs6nnCECeuXE0ivd8CqdPIjOLljo.f/QZ8Pn/JJC','user', 'generic.png'),
(10,'Eugenia','Camponucci','eugeniacamponucci@gmail.com', '$2b$10$1n/wwkGpXMiR/I97/ws3oe676xUjKvMN9AICD8y6QFqLVH44XlZhK','user', 'generic.png'),
(11,'Sergio','Serra','sergioserra@gmail.com', '$2b$10$9UYUedTMH6vPJ851QxAwPu6m.6/R3P9UETX37HPVX8dfE5mD8u1u2','user', 'generic.png'),
(12,'Carolina','Pisac','carolinapisac@gmail.com', '$2b$10$/DTyYRQnXOHP8iFXG9vKVexaUxbwfDUW4Z47W6vIMy30SByknDIoS','user', 'generic.png'),
(13,'Ramiro','Perez','ramiroperez@gmail.com', '$2b$10$QGHBcLWi5aEEbDSWORZBguawtDPilGvqxdz0HC1FsGWlGWF01qda6','user', 'generic.png'),
(14,'Maite','Fernández','maitefernandez@gmail.com', '$2b$10$WNJ4jPMF2kjsfegEQw9BMeyyg0S5pnn23UzjHxh2rb2uDkyBIuccK','user', 'generic.png'),
(15,'Sofía','Geninatti','sofiageninatti@gmail.com', '$2b$10$FQdVZZITLuD7CHC6jIyixOMWevy2RUheQr/SSaTzY1JJ/.VnP.5hq','user', 'generic.png') ;

UNLOCK TABLES;


--
-- Datos para la tabla `products`
--

LOCK TABLE `products` WRITE;
DELETE FROM `products`;
INSERT INTO `products` 
   ( id, name, short_name, producer_id, year, type_id, price, description, location, altitude, soil, abv, breeding, varietal_id, varietal_comp)
VALUES
 (1, 'Cara Sur Criolla', 'Criolla', 3, 2020, 6, 2500, 'Cara Sur es un pequeño proyecto de Pancho Bugallo y Sebastian Zuccardi en Barreal, en el valle de Calingasta en el cual trabajan con variedades criollas de viñedos viejos que están recuperando. La Criolla es un corte de 4 parcelas de Finca Maggio en Paraje Hilario, viñas de más de 80 años, un vino fácil de tomar, con un perfil frutado y terroso', 'Barreal, Valle de Calingasta, San Juan', 1550, 'Cuarzo, poco canto rodado y mucho material con ángulos', 13.9, '6 a 7 meses en huevos de cemento', 3, 'Criolla Chica 100%'),
  (2, 'Proyecto Las Compuertas Criolla Parral', 'Las Compuertas Criolla', 6, 2019, 6, 1500, 'La Criolla Chica, de un parral plantado en 1943, es fermentado en huevos de cemento con levaduras nativas para conservar la expresión del varietal y su lugar de origen, un vino como se hacía antes, bebible, jugoso, simple, con expresión frutada y floral', 'Las Compuertas, Luján de Cuyo, Mendoza', 1050, 'Franco-pedregoso', 13.7, '2 meses en huevo de cemento sin epoxi', 3, 'Criolla Chica 100%'),
  (3, 'Les Astronautes Criolla', 'Criolla', 9, 2020, 6, 1600, 'Esta Criolla, de viñedos viejos en Chacayes, suelos profundos de sedimentos depositados por un arroyo, y elaborada con maceración carbónica, es un vino ligero y agradable, con una nariz de pura fruta y una muy buena acidez, para tomar de a litros', 'Los Chacayes, Tunuyán, Mendoza', 1050, 'Suelos profundos de sedimentos finos', 13.6, 'Sin crianza', 3, 'Cereza 80% - Criolla Chica 20%'),
  (4, 'Les Astronautes Pino Pinot Brut', 'Pino Pinot Brut', 9, 2020, 6, 2350, 'Este Pino Pinot es un vino dotado de una gran complejidad, con una nariz levemente floral, sostenido por un perfil frutoso y a levaduras. La boca es fresca, redonda y persistente, de una muy buena acidez y linda persistencia aromática', 'Los Chacayes, Tunuyán, Mendoza', 1050, 'Suelos profundos de sedimentos finos', 12.5, '18 meses sobre lías. Luego se realiza el degüelle sin corrección de azúcar', 7, 'Pinot Gris 70% – Pinot Noir 30%'),
  (5, 'Les Astronautes Malbec Primero 2019', 'Malbec Primero 2019', 13, 2019, 6, 1700, 'Malbec Primero nace en la parte alta de Chacayes, al pie de los Andes. Fermentado con levaduras nativas en huevos de cemento, con una parte de racimos enteros y embotellado sin filtrar. Un vino de gran expresión de fruta, vibrante, fresco, con una buena textura en boca y con notas a hierbas y flores', 'Los Chacayes, Tunuyán, Mendoza', 1300, 'Franco arenoso', 14.3, 'Huevos de cemento', 4, 'Malbec 100%'),
  (6, 'A Lisa 2020', 'A Lisa 2020', 10, 2020, 6, 3050, 'Bodega Noemia es el proyecto, en el Alto Valle del Rio Negro, de Hans Vinding Diers. La bodega trabaja con viñedos viejos de hasta 90 años, siguiendo prácticas biodinámicas y logrando vinos muy complejos. A Lisa es su vino de pueblo, con uva proveniente de 4 viñedos distintos alrededor de Mainqué, que se cosecha por separado, cada una a su tiempo y se fermenta despalillado con levaduras nativas seleccionadas. Se busca mostrar la sinceridad de la uva patagónica. Un vino con gran expresión de la fruta, que gana en complejidad una vez abierto.', 'Mainque, Alto Valle del Río Negro, Río Negro', 218, 'Franco arenoso y pedregoso, formación aluvial', 13.4, '9 meses, 80% en tanques de acero inoxidable y 20% en barricas de roble francés', 4, 'Malbec 95% · Merlot 5%'),
  (7, 'Riccitelli Kung Fu Pet Nat', 'Kung Fu Pet Nat', 14, 2021, 4, 2800, 'Kung Fu es como volver a Hey, me imaginaba un vino que pegara una patada, un vino sin sulfitos, un vino sin defectos, lindo, limpio con intensidad pura, esa patada en la cabeza pero con equilibrio, como las artes marciales. - Matías Riccitelli', 'Valle de Uco, Mendoza', 1300, 'Granito calcáreo', 11, 'Sin paso por madera · Crianza en huevos de concreto', 1, 'Pinot Noir · Malbec'),
  (8, 'Riccitelli Kung Fu Tinto', 'Kung Fu Tinto', 14, 2020, 6, 2500, 'Kung Fu tinto es un Malbec de Gualtallary, fermentado con levaduras indígenas en piletas abiertas, criado en huevos de hormigón y embotellado sin agregado de sulfitos, un vino natural., fresco y fluido, de buena textura y franqueza.', 'Gualtallary, Tupungato, Mendoza', 1300, 'Granito calcáreo', 13.5, 'Huevos de hormigón', 4, 'Malbec 100%'),
  (9, 'Riccitelli Tinto de la Casa', 'Tinto de la Casa', 14, 2018, 6, 3200, 'Tinto de la casa, es una cofermentación de Malbecs de Las Compuertas y Gualtallary, buscando un equilibrio entre la tensión y frescura de Gualtallary y la fruta y cuerpo de Las Compuertas. Fermentado y criado en cubas, un vino fresco, complejo y profundo, para tomar y tomar.', 'Gualtallary & Las Compuertas, Tupungato, Mendoza', 1000, 'Franco-arcilloso y calcáreo', 14, '12 meses en cubas de roble francés', 4, 'Malbec 100%'),
  (10, 'Rocamadre Blanco', 'Rocamadre Blanco', 15, 2021, 1, 2100, 'Rocamadre es el proyecto más personal de JuanFa Suárez (Finca Suarez y Traslapiedra) ubicado en Paraje Altamira, a partir de uva de los viñedos de la bodega familiar. La búsqueda en este caso son vinos de mínima intervención, de partidas chicas y que reflejen el carácter del lugar.', 'Paraje Altamira, San Carlos, Mendoza', 1100, 'Pedregoso, calcáreo', 11.8, 'Sin Crianza', 2, 'Chardonnay 100%'),
  (11, 'Rocamadre Criolla', 'Rocamadre Criolla', 15, 2021, 6, 1700, 'Rocamadre es el proyecto más personal de JuanFa Suárez (Finca Suarez y Traslapiedra) ubicado en Paraje Altamira, a partir de uva de los viñedos de la bodega familiar. La búsqueda en este caso son vinos de mínima intervención, de partidas chicas y que reflejen el carácter del lugar.', 'Paraje Altamira, San Carlos, Mendoza', 1100, 'Aluvial y pedregoso, con carbonato de calcio', 13.5, 'En barricas usadas', 2, 'Criolla Chica 100%'),
  (12, 'Rocamadre Malbec', 'Rocamadre Malbec', 15, 2020, 6, 1800, 'Rocamadre Malbec viene de las parcelas más pedregosas del viñedo ubicado en la zona que llaman Altamira nuevo, la parte más alta, más fría y con más calcáreo. Cofermentado con un 10% de Cabernet Franc y con 30% de racimos enteros, un vino con gran mineralidad, salvaje, herbal y de taninos finos.', 'Paraje Altamira, San Carlos, Mendoza ', 1100, 'Pedregoso calcáreo', 13.5, '10 meses en barricas usadas', 4, 'Malbec 90% · Cabernet Franc 10%'),
  (13, 'Rocamadre Pet Nat', 'Rocamadre Pet Nat', 15, 2020, 4, 2100, 'Rocamadre es el proyecto más personal de JuanFa Suárez (Finca Suarez y Traslapiedra) ubicado en Paraje Altamira, a partir de uva de los viñedos de la bodega familiar. La búsqueda en este caso son vinos de mínima intervención, de partidas chicas y que reflejen el carácter del lugar.', 'Paraje Altamira, San Carlos, Mendoza', 1100, 'Arena, limo, piedras cubiertas de carbonato de calcio y caliche', 11.2, 'Vino Espumoso Metodo Ancestral', 8, 'Pinot Noir 100%'),
  (14, 'Rocamadre Pinot Noir', 'Rocamadre Pinot Noir', 15, 2020, 6, 1800, 'Rocamadre es el proyecto más personal de JuanFa Suárez (Finca Suarez y Traslapiedra) ubicado en Paraje Altamira, a partir de uva de los viñedos de la bodega familiar. La búsqueda en este caso son vinos de mínima intervención, de partidas chicas y que reflejen el carácter del lugar.', 'Paraje Altamira, San Carlos, Mendoza', 1100, 'Aluvial y pedregoso, con carbonato de calcio', 13.5, 'En barricas usadas', 8, 'Pinot Noir 100%'),
  (15, 'Vallisto Extremo Criolla', 'Vallisto Extremo Criolla', 16, 2018, 6, 1440, 'Las uvas de esta Criolla Chica provienen de Hualfin, en la provincia de Catamarca, donde los viñedos, plantados en 1898, se encuentran a 2.600 metros. Fermentado en huevos de concreto con un pequeño porcentaje de rácimo entero, un vino con mucha fruta y un lado terroso. Un vino de color rojizo y vibrante y muy buena acidez que se traduce en nervio y frescura.', 'Hualfín, Catamarca', 2600, 'Profundos, permeables y pobres en materia orgánica', 14.6, 'Sin paso por madera', 3, 'Criolla Chica 100%'),
  (16, 'Ver Sacrum La Dama del Abrigo Rojo Nebbiolo', 'Ver Sacrum Nebbiolo', 17, 2017, 6, 9900, 'La Dama del Abrigo Rojo, un Nebbiolo, uva emblemática del Piemonte italiano, de viñedos pedregosos en Los Chacayes, es un vino floral y mineral, con la fineza y potencia típica de la variedad, pero con una mayor concentración y amplitud que aporta el clima mendocino.', 'El Cepillo, San Carlos, Mendoza', 990, 'Aluvial sobre una textura arenosa',	13.8, '18 meses en barricas usadas', 5, 'Nebbiolo 100%'),
  (17, 'Pielihueso Naranjo', 'Pielihueso Naranjo', 13, 2020, 1, 1700, 'Cofermentación en huevo de hormigón del Sauvignon Blanc y el Chardonnay. El Torrontés fermentó una parte en barrica y el resto se le agregó a medida que bajaba la fermentación de la cofermentación. Se pasó a tanque de acero inoxidable y la parte con mayor cantidad de borras se pasó a barrica, por tres meses', 'Los Chacayes, Tunuyán, Mendoza', 1300, 'Franco arenoso',	11.7, 'Cofermentación en huevo de cemento en contacto con pieles y semillas al estilo de los vinos naranjos de Georgia. Crianza en tanque y barrica usada', 1, 'Torrontés 50% · Chardonnay 30% · Sauvignon Blanc 15% · Pinot Gris 5%'),
  (18, 'Pielihueso Tinto de Los Sauces', 'Tinto de Los Sauces', 13, 2020, 6, 1100, 'Pielihueso es un proyecto de vinos joven de la familia Bartolomé, que nace en Los Chacayes, con el objetivo de hacer vinos de mínima intervención, vinos que hagan sentir y que sorprendan. Tinto de Los Sauces es un blend de Malbec y Cabernet Sauvignon de Los Sauces, Tunuyán', 'Los Sauces, Tunuyán, Mendoza', 1300, 'Franco arenoso', 14.3, 'Sin paso por barrica', 1, 'Malbec 50% · Cabernet Sauvignon 50%'),
  (19, 'Rocamadre Rosado', 'Rocamadre Rosado', 15, 2020, 5, 1700, 'Rocamadre Rosado, viene de las parcelas más pedregosas del viñedo ubicado en la zona que llaman “Altamira nuevo�?, la parte más alta, mas fría y con más calcáreo. Prensado sin moler ni despalillar, un rosado lineal, punzante, con notas cítricas y florales, y con la clásica textura de Altamira en boca', 'Paraje Altamira, San Carlos, Mendoza', 1100, 'Pedregoso, calcáreo', 11.8, 'Sin Crianza', 8, 'Pinot Noir 100%'),
  (20, 'Finca Suarez Malbec', 'Malbec', 8, 2019, 6, 1600, 'De Paraje Altamira, este Malbec es un vino puro, con mínimo intervención, de una finca muy pedregosa, un porcentaje del vino pasa por barricas usadas para redondear y apaciguar los potentes taninos de Altamira sin dejar rastros. Fresco, pura fruta y textura', 'Paraje Altamira, Valle de Uco, Mendoza', 1100, 'Arenoso',	14, '30%, 12 meses en barricas usadas'	, 4, 'Malbec 100%'),
  (21, 'Vuela Rosado Pinot Gris', 'Vuela Rosado Pinot Gris', 12, 2019, 5, 950, 'Pinot Gris. El resultado es un vino de gran frescura e intensidad aromática, basado en elaboración por prensado y por sangrado de esta variedad.', 'Los Chacayes, Tupungato, Mendoza', 1100, 'Pedregoso, calcáreo', 13, 'Sin Madera', 6, 'Pinot Gris 100%'),
  (22, 'Nacha Pinot Noir Rosé', 'Nacha Pinot Noir Rosé', 5, 2020, 5, 3700, 'Nacha es un vino orgánico y biodinámico, hecho a la manera del rosé, con poco contacto con pieles, fácil de beber, con poco alcohol, con buena acidez natural, simple, un vino que se da fácilmente', 'Mainque, Alto Valle del Río Negro, Río Negro', 300, 'Arenoso', 12.5, 'Sin Crianza', 8, 'Pinot Noir 100%'),
  (23, 'Alma 4 Pinot Chardonnay', 'Alma 4 Pinot Chardonnay', 20,  2017, 2, 1640, 'De viñedos en Tupungato, a 1.300 metros, buscando frescura y acidez en el vino base, este Pinot Chardonnay pasa más de 1 año sobre lías para lograr la complejidad aromática y la fineza características de Alma 4', 'Tupungato, Valle de Uco, Mendoza', 1300, 'Calcáreo', 13, 'Metodo Champenoise 48 meses sobre levaduras', 1, 'Pinot Noir · Chardonnay'),
  (24, 'Brut Nature Pinot Noir Rose', 'Pinot Noir Rose', 11, 2008, 3, 3800, 'Prensado con racimo entero, fermentado con levaduras nativas y elaborado bajo método tradicional con 25 meses de crianza sobre lías. Suave color amarillo pálido, presenta aromas de pan tostado, frutas como durazno blanco, cítricos y notas herbales y florales. En boca las suaves burbujas aportan textura equilibrada y elegancia, complementada por una gran acidez y una delicada sensación de untuosidad.', 'Valle de Trevelin, Chubut', 385, 'Calcáreo', 12.5, '25 meses de crianza sobre lias', 8, 'Pinot Noir 100%'),
  (25, 'Viña Alicia Tiara', 'Tiara', 18, 2018, 1, 2150, 'Del viñedo San Alberto, de viñas de 35 años en Lunlunta en suelos arcillosos, Tiara es un vino intenso, aromático y floral, con notas minerales y con una muy linda acidez que da una frescura inusual en los blancos de la zona, y un gran balance', 'Lunlunta, Maipú, Mendoza', 900, 'Arcilloso y piedra caliza', 12.5, 'Sin paso por barricas de roble', 1, '50% Riesling · 40% Albariño · 10% Savagnin'),
  (26, 'El Enemigo Chardonnay', 'El Enemigo Chardonnay', 1, 2018, 1, 2250, 'Este Chardonnay, proveniente del viñedo Adrianna en Gualtallary, de una parcela con suelos arenosos y calcáreos fermenta en barricas de roble y se cría con un fino velo (capa de levaduras que protege al vino del oxígeno y aporta aromas) al estilo Jura o Jerez. Un vino con fruta blanca, flores, notas especiadas y mineralidad.', 'Gualtallary, Tupungato, Mendoza', 1450, 'Arenosos, calcáreos y pedregosos', 14, '12 meses en barricas de roble francés', 2, 'Chardonnay 100%'),
  (27, 'Buscado Vivo o Muerto La Verdad San Pablo', 'La Verdad San Pablo', 2, 2017, 1, 3250, 'La Verdad, un Chardonnay de San Pablo, se fermenta 50% en Baricas usadas y 50% en huevos de hormigón, y se cria en barricas usadas, un vino que busca mostrar el terroir de altura, de montaña, austero, fresco y mineral, con fruta delicada y notas cítricas.', 'San Pablo, Tunuyán, Mendoza', 1200, 'Arenoso con cuarzo y piedra calcárea', 12.5, '12 meses en huevos de hormigón', 2, 'Chardonnay 100%'),
  (28, 'Tigerstone Malbec', 'Tigerstone Malbec', 7, 2015, 6, 1870, 'En 2009 plantaron lo que fue el primer viñedo en la pendiente oriental de los valles calchaquíes en suelos de pizarra, una combinación única en salta, que da lugar a vinos con muy buena acidez y frescura. Un malbec concentrado, mineral, fino y herbal', 'Tolombón, Cafayate, Salta', 1590, 'Rocoso con piedra pizarra y mica', 13.5, '5 meses en barricas de roble francés de 5º uso', 4, 'Malbec 100%'),
  (29, 'Polígonos del Valle de Uco Paraje Altamira Malbec', 'Paraje Altamira Malbec', 20, 2018, 6, 2890, 'Del viñedo Piedra Infinita en Paraje Altamira, este malbec es pura expresión de lugar, del Altamira más pedregoso, austero pero profundo, con una gran estructura tánica y una textura apretada en boca, una gran potencia. Fermentado con levaduras nativas y racimo entero en piletas de hormigón tiene un perfil de fruta negra y hierbas frescas.', 'Paraje Altamira, Valle de Uco, Mendoza', 1100, 'Aluvional, bien estratificado sobre gravas calcáreas de gran tamaño', 14, 'En hormigón', 4, 'Malbec 100%'),
  (30, 'DV Catena Nicasia Vineyard Malbec', 'Nicasia Vineyard Malbec', 4, 2016, 6, 4200, 'Nicasia, en paraje Altamira, es uno de los viñedos predilectos de Catena en Valle de Uco y uno de los primeros en los que Vigil puso enfásis. Uno de los vinos históricamente más reconocidos de la bodega, un Malbec potente, con fruta madura y elegancia, y gran textura en boca.', 'Paraje Altamira, San Carlos, Mendoza', 1180, 'Arena, limo, arcilla y piedras superficiales', 14, '18 meses en barricas de roble francés nuevas de 225 y 500 litros', 4, 'Malbec 100%'),
  (31, 'Vertebrado Pinot Noir', 'Vertebrado Pinot Noir', 19, 2016, 6, 3190, 'Este Pinot Noir, de una finca con mucha piedra en Gualtallary, es un vino con tensión, mucha textura en boca y un perfil floral y de hierbas silvestres.', 'Gualtallary, Tupungato, Mendoza', 1550, 'Aluvional, con carbonato de calcio', 13, '12 meses en barrica roble francés de 500 litros', 8, 'Pinot Noir 100%');

UNLOCK TABLES;


--
-- Datos para la tabla `images` - para tener mas de una imagen por producto (alguna vez!)
--

LOCK TABLE `images` WRITE;
DELETE FROM `images`;
INSERT INTO `images` 
   (id, file_name, product_id)
VALUES
  (1,  'Cara-Sur-Criolla.png', 1),
  (2,  'compuertas.png', 2),
  (3,  'Les-Astronautes-Criolla.png', 3),
  (4,  'Les-Astronautes-Pino-Pinot.png', 4),
  (5,  'malbec-primero-2019.png', 5),
  (6,  'Noemia-A-Lisa.png', 6),
  (7,  'Riccitelli-Kung-Fu-Pet-Nat.png', 7),
  (8,  'Riccitelli-Kung-Fu-Tinto.png', 8),
  (9,  'Riccitelli-Tinto-de-la-Casa.png', 9),
  (10,  'Rocamadre-Blanco.png', 10),
  (11,  'Rocamadre-Criolla.png', 11),
  (12,  'Rocamadre-Malbec.png', 12),
  (13,  'Rocamadre-Pet-Nat.png', 13),
  (14,  'Rocamadre-Pinot_noir-2019.png', 14),
  (15,  'Vallisto-Extremo-Criolla.png', 15),
  (16,  'Ver-Sacrum-La-Dama-del-Abrigo-Rojo.png', 16),
  (17,  'Pielihueso-Naranjo.png', 17),
  (18,  'Pielihueso-Tinto-de-Los-Sauces.png', 18),
  (19,  'Rocamadre-Rosado.png', 19),
  (20,  'Finca-Suarez-Malbec.png', 20),
  (21,  'Piedra-Negra-Vuela-Rosado-Pinot-Gris.png', 21),
  (22,  'Chacra-Nacha-Pinot-Noir-Rose.png', 22),
  (23,  'Alma-4-Pinot-Chardo.png', 23),
  (24,  'Otronia-Brut-Nature-Rose.png', 24),
  (25,  'VinaAlicia-Tiara-2017.png', 25),
  (26,  'el-enemigo-chardonnay-2017.png', 26),
  (27,  'Buscado-Vivo-o-Muerto-La-Verdad-San-Pablo-2017.png', 27),
  (28,  'Los-Cardones-Tigerstone-Malbec.png', 28),
  (29,  'Zuccardi-Poligonos-Paraje-Altamira-Malbec.png', 29),
  (30,  'dv-nicasia-2016.png', 30),
  (31,  'loschocos-vertebrado-pn-2016.png', 31);

UNLOCK TABLES;




--
-- Datos para la tabla `winemaker_product`
--

LOCK TABLE `winemaker_product` WRITE;
DELETE FROM `winemaker_product`;
INSERT INTO `winemaker_product` 
   (id, product_id, winemaker_id)
VALUES
  (1, 1, 24),
(2, 1, 19),
(3, 2, 10),
(4, 2, 18),
(5, 3, 6),
(6, 3, 7),
(7, 4, 6),
(8, 4, 7),
(9, 5, 23),
(10, 5, 1),
(11, 6, 9),
(12, 6, 4),
(13, 7, 17),
(14, 8, 17),
(15, 9, 17),
(16, 10, 15),
(17, 11, 15),
(18, 12, 15),
(19, 13, 15),
(20, 14, 15),
(21, 15, 20),
(22, 15, 11),
(23, 16, 5),
(24, 17, 23),
(25, 18, 1),
(26, 18, 23),
(27, 19, 14),
(28, 20, 14),
(29, 21, 25),
(30, 22, 21),
(31, 23, 24),
(32, 24, 13),
(33, 25, 22),
(34, 26, 3),
(35, 27, 2),
(36, 28, 2),
(37, 28, 12),
(38, 29, 16),
(39, 29, 24),
(40, 30, 3),
(41, 31, 8);
UNLOCK TABLES;





--
-- Datos para la tabla `carts`
--

LOCK TABLE `carts` WRITE;
DELETE FROM `carts`;
INSERT INTO `carts` 
   (id, user_id, product_id, item_qtty)
VALUES
  (1, 3, 3, 1),
  (2, 3, 4, 3),
  (3, 3, 5, 2),
  (4, 5, 7, 1),
  (5, 5, 8, 1),
  (6, 5, 9, 1),
  (7, 7, 12, 2),
  (8, 7, 20, 1),
  (9, 12, 17, 3),
  (10, 12, 24, 2),
  (11, 14, 20, 4),
  (12, 14, 12, 2),
  (13, 8, 13, 1),
  (14, 8, 14, 1),
  (15, 8, 15, 1),
  (16, 15, 27, 2),
  (17, 15, 31, 3),
  (18, 9, 28, 2),
  (19, 9, 15, 4),
  (20, 9, 22, 1);
UNLOCK TABLES;



--
-- Datos para la tabla `product_user` para implementar favoritos (alguna vez!)
--

LOCK TABLE `product_user` WRITE;
DELETE FROM `product_user`;
INSERT INTO `product_user` 
   (id, user_id, product_id)
VALUES
  (1, 3, 4),
  (2, 3, 5),
  (3, 5, 9),
  (4, 7, 12),
  (5, 12, 17),
  (6, 12, 24),
  (7, 14, 20),
  (8, 8, 13),
  (9, 8, 15),
  (10, 9, 15),
  (11, 9, 22);
UNLOCK TABLES;



