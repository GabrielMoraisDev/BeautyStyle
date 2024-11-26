-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26-Nov-2024 às 20:40
-- Versão do servidor: 10.4.32-MariaDB
-- versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `beautystyle`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `descricao` text NOT NULL,
  `preco` decimal(10,2) NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `data_criacao` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`id`, `nome`, `descricao`, `preco`, `categoria`, `id_usuario`, `data_criacao`) VALUES
(1, 'Brincos de Diamante Encrustado', 'Brincos fabricados manualmente, com equipamentos da mais alta tecnologia seguindo normas e padrões Nacionais e Internacionais.', 2999.99, '', 5, '2024-11-26 19:08:21'),
(2, 'Brinco TRYND EXPENSE Gold', 'Os Brincos Trynd são opções de brincos para ocasiões especiais, feito com ouro 24K, perfeito pra quem procura o equilíbrio entre elegância e sofisticação.', 2999.99, '', 5, '2024-11-26 19:08:21'),
(3, 'Brincos de Diamante Encrustado', 'Brincos fabricados manualmente, com equipamentos da mais alta tecnologia seguindo normas e padrões Nacionais e Internacionais.', 2999.99, 'categoria', 5, '2024-11-26 19:19:27'),
(4, 'Brincos de Diamante Encrustado', 'Brincos fabricados manualmente, com equipamentos da mais alta tecnologia seguindo normas e padrões Nacionais e Internacionais.', 2999.99, 'categoria', 5, '2024-11-26 19:24:59');

-- --------------------------------------------------------

--
-- Estrutura da tabela `products`
--

CREATE TABLE `products` (
  `id` int(255) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `preco` float(10,2) NOT NULL,
  `categoria` varchar(255) NOT NULL,
  `descricao` varchar(550) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `products`
--

INSERT INTO `products` (`id`, `nome`, `preco`, `categoria`, `descricao`) VALUES
(1, 'Brincos de Diamante Encrustado', 2999.99, 'brincos', 'Brincos fabricados manualmente, com equipamentos da mais alta tecnologia seguindo normas e padrões Nacionais e Internacionais.'),
(2, 'Brincos EveryWear', 2499.99, 'brincos', 'Ideais para ocasiões especiais ou como símbolo de sofisticação no dia a dia, os detalhes dos Brincos EveryWear são pensados para você e seu cotidiano.'),
(3, 'Brincos Fy', 1199.99, 'brincos', 'Os Brincos Fy são elegantes e sofisticados, ideias para eventos especiais. Feito com metais preciosos como ouro e platina, tem a resistência e qualidade que você procura.'),
(4, 'Brincos BeWare', 1799.99, 'brincos', 'Os Brincos BeWare são peças elegantes e atemporais, geralmente confeccionados em metais preciosos como ouro ou platina.'),
(5, 'Brinco EgitStyle', 1399.99, 'brincos', 'Os Brincos EgitStyle fabricados manualmente, com equipamentos da mais alta tecnologia seguindo normas e padrões Nacionais e Internacionais.'),
(6, 'Brinco TRYND Diamante', 2789.99, 'brincos', 'Os Brincos Trynd são opções de brincos para ocasiões especiais, com detalhes encrustados em diamante e plativa, perfeito pra quem procura o equilíbrio entre elegância e sofisticação.'),
(7, 'Brinco TRYND EXPENSE Gold', 2999.99, 'brincos', 'Os Brincos Trynd são opções de brincos para ocasiões especiais, feito com ouro 24K, perfeito pra quem procura o equilíbrio entre elegância e sofisticação.'),
(8, 'Brinco TRYND Ouro', 3999.99, 'brincos', 'Os Brincos Trynd são opções de brincos para ocasiões especiais, feito com ouro 18K, perfeito pra quem procura o equilíbrio entre elegância e sofisticação.');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `qnt_compras` int(100) DEFAULT NULL,
  `img` varchar(600) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `nome`, `email`, `senha`, `qnt_compras`, `img`) VALUES
(5, 'Gabriel Moraize', 'gabrielleitecajuru@gmail.com', '$2y$10$IZR41caXe4ebrRKEWw4HWe9PysNqZ3jiFqZpyRL5vX4kGTjnQU06e', NULL, 'https://s2-gshow.glbimg.com/lpWB_yug9YiYl3GUg5JsX6hxwhg=/0x0:1288x727/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/8/A/MjyixqQ0uBCpd7ADfV7g/eduardo-sterblitch-de-freddie-mercury-prateado.jpg'),
(6, 'Lure', 'iurilima.395@gmail.com', '$2y$10$9s4Gc.2mje67P2RrHg93TeSvCriLGgWD3Vap.ABBOC/BogOUi7nKi', NULL, '');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
