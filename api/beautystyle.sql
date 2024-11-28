-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 27-Nov-2024 às 19:52
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
  `id_usuario` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `descricao` text NOT NULL,
  `preco` decimal(10,2) NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `qnt` int(11) NOT NULL,
  `id_produto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`id`, `id_usuario`, `nome`, `descricao`, `preco`, `categoria`, `qnt`, `id_produto`) VALUES
(6, 5, 'Brincos de Diamante Encrustado', 'Brincos fabricados manualmente, com equipamentos da mais alta tecnologia seguindo normas e padrões Nacionais e Internacionais.', 2999.99, 'brincos', 2, 1),
(7, 5, 'Brincos BeWare', 'Os Brincos BeWare são peças elegantes e atemporais, geralmente confeccionados em metais preciosos como ouro ou platina.', 1799.99, 'brincos', 2, 4),
(8, 5, 'Brincos Fy', 'Os Brincos Fy são elegantes e sofisticados, ideias para eventos especiais. Feito com metais preciosos como ouro e platina, tem a resistência e qualidade que você procura.', 1199.99, 'brincos', 3, 3),
(9, 5, 'Brinco EgitStyle', 'Os Brincos EgitStyle fabricados manualmente, com equipamentos da mais alta tecnologia seguindo normas e padrões Nacionais e Internacionais.', 1399.99, 'brincos', 1, 5),
(10, 5, 'Brincos BeWare', 'Os Brincos BeWare são peças elegantes e atemporais, geralmente confeccionados em metais preciosos como ouro ou platina.', 1799.99, 'brincos', 1, 4);

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
(8, 'Brinco TRYND Ouro', 3999.99, 'brincos', 'Os Brincos Trynd são opções de brincos para ocasiões especiais, feito com ouro 18K, perfeito pra quem procura o equilíbrio entre elegância e sofisticação.'),
(9, 'Colar HeartBeat', 2150.00, 'colares', 'Este colar de prata 925 com pedras naturais é a escolha perfeita para quem aprecia a beleza única das gemas. Com seu design arrojado e moderno, ele combina bem com qualquer estilo, adicionando um toque de charme e sofisticação.'),
(10, 'GoldenHeart ONE', 3259.00, 'colares', 'Este deslumbrante colar de ouro 24K traz um pingente em forma de coração, simbolizando amor e carinho. A peça é a escolha ideal para quem deseja transmitir sentimentos de maneira elegante e refinada.'),
(11, 'Crystal Elegancy', 4999.00, 'colares', 'Este colar de prata 925 com cristal lilás traz um contraste único e elegante. O cristal, com suas propriedades de proteção e energia, se combina perfeitamente com o brilho da prata, criando uma peça distinta e poderosa.'),
(12, 'Cover GoldenHeart ', 5599.00, 'colares', 'Este deslumbrante colar de ouro 24K traz um pingente em forma de coração, simbolizando amor e carinho. A peça é a escolha ideal para quem deseja transmitir sentimentos de maneira elegante e refinada.'),
(13, 'Flower Silver Style', 1655.00, 'colares', 'Este colar de prata 925, com seu delicado pingente de flor, traz leveza e frescor a qualquer visual. Ideal para quem busca um toque de natureza e beleza em um design elegante e refinado.'),
(14, 'GoldenLined', 3500.00, 'colares', 'Este colar de ouro 18K possui um design moderno e minimalista, ideal para quem busca uma peça discreta e ao mesmo tempo luxuosa. Seu brilho intenso e acabamento impecável fazem dele um acessório versátil para qualquer look.'),
(15, 'FlyeStyle', 4199.00, 'colares', 'Com um design inovador e moderno, este colar de prata 925 e ouro 24K com borboletas elegantes é perfeito para quem busca um acessório contemporâneo e cheio de estilo. A prata, com seu brilho suave, realça a sofisticação da peça.'),
(16, 'SimpleFlye Style', 2799.99, 'colares', 'Elegante e místico, este colar de prata 925 traz um delicado pingente de borboletas prateadas. A peça é perfeita para quem busca um acessório que misture elegância com um toque de estilo etéreo.'),
(17, 'Pulseira Line Wear', 3499.00, 'pulseiras', 'Elegante pulseira de ouro 18k, com acabamento polido e linhas retas, projetada para um visual moderno e discreto. Ideal para quem busca sofisticação sem exageros, perfeita para o uso diário.'),
(18, 'Pulseira 24K OnDint', 4199.00, 'pulseiras', 'Esta pulseira de ouro 24k apresenta uma textura delicada, proporcionando um toque de autenticidade e luxo. Seu acabamento acetinado e detalhes discretos criam uma peça única, adequada para ocasiões especiais.'),
(19, 'Pulseira InDetails', 2500.00, 'pulseiras', 'Combinando o brilho do ouro 18k com a elegância dos diamantes, esta pulseira é uma obra-prima que traz um toque de glamour a qualquer look. Os pequenos pingentes de diamante acrescentam um charme extra à peça.'),
(20, 'Simple Golden', 2689.00, 'pulseiras', 'Feita de ouro 24k de alta qualidade, esta pulseira apresenta um design arrojado e moderno, com formas geométricas e um acabamento brilhante. Ideal para quem busca uma peça ousada e de alta durabilidade.'),
(21, 'Intreless Gold', 3890.00, 'pulseiras', 'Uma pulseira elegante de ouro 18k, com elos intercalados que criam um movimento fluido e refinado. Sua aparência clássica combina bem com qualquer estilo, seja no dia a dia ou em eventos formais.'),
(22, 'Golden Soft Details', 2599.99, 'pulseiras', 'Esta pulseira de ouro 24k traz um design sofisticado com esferas polidas, que conferem um toque de modernidade e charme à peça. Um acessório ideal para quem aprecia peças luxuosas e delicadas.'),
(23, 'Minimalist Ouro 18K', 1999.00, 'pulseiras', 'Um símbolo de amor e elegância, esta pulseira de ouro 18k conta com um pequeno coração incrustado, feito com minucioso trabalho artesanal. Perfeita para presentear ou como uma peça exclusiva para seu estilo pessoal.'),
(24, 'Cover Gold Style', 3659.00, 'pulseiras', 'Esta pulseira de ouro 24k é composta por uma corrente com design chevron, criando um padrão dinâmico e sofisticado. Seu acabamento refinado e brilho intenso fazem dela uma escolha perfeita para ocasiões que exigem um toque de luxo.'),
(25, 'Anel de Ouro 18k com Diamante', 3499.00, 'aneis', 'Um anel sofisticado e atemporal, fabricado em ouro 18k de alta qualidade, com um diamante central de corte brilhante. A pedra é cuidadosamente lapidada para maximizar seu brilho, sendo envolta por um delicado design de linhas finas que exalam elegância e sofisticação. Perfeito para ocasiões especiais ou para simbolizar um compromisso duradouro.'),
(26, 'Anel de Ouro 24k com Diamante', 2999.00, 'aneis', 'Este anel deslumbrante em ouro 24k possui um diamante único, posicionado de forma a captar a luz de todas as direções. O ouro 24k é polido para um acabamento impecável, dando ao anel um brilho natural e luxuoso. Ideal para quem deseja um estilo clássico e sofisticado, com a durabilidade e o charme de um ouro puro.'),
(27, 'Golden Hour', 3700.00, 'aneis', 'Um design minimalista e elegante, este anel solitário em ouro 18k ostenta um diamante central que brilha intensamente, graças à sua lapidação precisa. O ouro 18k, com seu tom suave e luxuoso, complementa perfeitamente a pedra preciosa, tornando este anel uma escolha ideal para propostas ou celebrações de amor eterno.'),
(28, 'Golden STR Elegancy', 4199.00, 'aneis', 'Um anel de ouro 24k com um diamante central grande, acompanhado por pequenos diamantes em ambos os lados, criando um visual deslumbrante e cheio de brilho. O ouro 24k, com seu tom dourado intenso, combina perfeitamente com as pedras preciosas, garantindo um acessório que chama a atenção pela sua beleza e elegância.'),
(29, 'Lined Gold Style', 3999.00, 'aneis', 'Este anel de ouro 18k apresenta um delicado design em filigrana ao redor de um diamante central de alta qualidade. A combinação do ouro 18k com a intrincada arte da filigrana cria uma peça única e cheia de detalhes, ideal para quem busca um anel que mescle tradição com modernidade, sem perder o brilho e a magnificência do diamante.'),
(30, 'Anel de Prata com Diamante Solitário', 6999.00, 'aneis', 'Este anel elegante apresenta um diamante solitário de corte brilhante, delicadamente cravejado em uma base de prata polida. A armação fina e moderna realça a pureza da pedra, criando um contraste sofisticado entre o brilho do diamante e a suavidade do metal. Perfeito para um estilo clássico e atemporal, este anel é ideal para ocasiões especiais ou como um símbolo de compromisso.'),
(31, 'Double Silver Style', 3259.00, 'aneis', 'Feito de prata 925, este anel combina modernidade e elegância, com um diamante central cuidadosamente fixado em um design de garras. A pedra de diamante é o destaque do anel, com suas facetas brilhando intensamente sob a luz. A prata polida complementa a beleza da pedra, enquanto as garras de prata adicionam um toque de sofisticação e segurança ao design. Um presente perfeito para marcar momentos importantes.'),
(32, 'Payve Diamond', 6500.00, 'aneis', 'Este anel de prata 925 é decorado com um pavê de diamantes, criando um efeito deslumbrante de brilho contínuo ao redor da circunferência. A pedra central é um diamante de corte redondo, rodeado por um conjunto de pequenos diamantes que aumentam o impacto visual. A prata polida serve como uma base elegante para o brilho exuberante das pedras, fazendo deste anel uma opção impressionante para quem busca luxo e estilo em uma peça única.');

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
(1, 'User 1', 'teste@gmail.com', '$2y$10$IZR41caXe4ebrRKEWw4HWe9PysNqZ3jiFqZpyRL5vX4kGTjnQU06e', NULL, '')

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
