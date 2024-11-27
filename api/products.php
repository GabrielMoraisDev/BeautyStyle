<?php

// Define os cabeçalhos CORS para permitir acesso de outros domínios
include('cors.php');

// Conexão com o banco de dados
include('conn.php');

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbName;charset=utf8", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die(json_encode(["error" => "Erro ao conectar com o banco de dados: " . $e->getMessage()]));
}

// Verificar se o parâmetro "categoria" foi enviado na URL
if (!isset($_GET['categoria']) || empty($_GET['categoria'])) {
    http_response_code(400); // Código de resposta HTTP 400 - Bad Request
    echo json_encode(["error" => "O parâmetro 'categoria' é obrigatório."]);
    exit;
}

// Obter o parâmetro de forma segura
$categoria = filter_input(INPUT_GET, 'categoria', FILTER_SANITIZE_STRING);

// Consulta SQL para obter os produtos
$sql = "SELECT 
            id, 
            nome AS title, 
            preco AS price, 
            categoria AS categoria, 
            descricao AS description 
        FROM products 
        WHERE categoria = :categoria";

$stmt = $pdo->prepare($sql);

try {
    // Executar a consulta
    $stmt->execute([':categoria' => $categoria]);

    // Obter os resultados como um array associativo
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Configurar o cabeçalho para JSON
    header('Content-Type: application/json');

    // Retornar os dados em formato JSON
    echo json_encode($products, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
} catch (PDOException $e) {
    // Capturar erros da execução do SQL
    http_response_code(500); // Código de resposta HTTP 500 - Internal Server Error
    echo json_encode(["error" => "Erro ao buscar os produtos: " . $e->getMessage()]);
}

?>