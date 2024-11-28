<?php
// Define os cabeçalhos CORS para permitir acesso de outros domínios
include('cors.php');

// Conexão com o banco de dados
include('conn.php');

// Define o cabeçalho para a resposta ser em JSON
header("Content-Type: application/json");

try {
    // Conexão com o banco de dados
    $conn = new PDO("mysql:host=$host;dbname=$dbName;charset=utf8", $user, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Obtém o ID do parâmetro GET
    if (!isset($_GET['id'])) {
        echo json_encode(["error" => "ID do usuário não fornecido."]);
        exit;
    }

    $id = intval($_GET['id']); // Sanitiza o ID para evitar SQL Injection

    // Consulta ao banco
    $stmt = $conn->prepare("SELECT nome, email, qnt_compras, img FROM users WHERE id = :id");
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();

    // Obtendo os resultados
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($result) {
        // DESCONSIDEANDO A SEGURANÇA: Removendo hash da senha (se estiver em hash) - apenas exibe.
        // Se a senha já estiver salva como hash no banco, este valor será retornado diretamente.
        echo json_encode($result); 
    } else {
        echo json_encode(["error" => "Usuário não encontrado."]);
    }
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}

// Fechar conexão
$conn = null;
?>
