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

    // Verificar se os dados do POST foram enviados
    if (!isset($_POST['id']) || !isset($_POST['nome']) || !isset($_POST['senha']) || !isset($_POST['img'])) {
        echo json_encode(["error" => "Dados incompletos."]);
        exit;
    }

    $id = intval($_POST['id']); // Sanitiza o ID
    $nome = $_POST['nome'];
    $senha = $_POST['senha'];
    $img = $_POST['img']; // Novo parâmetro para a URL da imagem

    // Atualizar os dados do usuário
    $stmt = $conn->prepare("UPDATE users SET nome = :nome, senha = :senha, img = :img WHERE id = :id");
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->bindParam(':nome', $nome, PDO::PARAM_STR);
    $stmt->bindParam(':senha', $senha, PDO::PARAM_STR);
    $stmt->bindParam(':img', $img, PDO::PARAM_STR); // Vincular a URL da imagem

    // Executar a query
    $stmt->execute();

    // Verificar se houve alterações
    if ($stmt->rowCount() > 0) {
        echo json_encode(["success" => "Informações atualizadas com sucesso."]);
    } else {
        echo json_encode(["error" => "Nenhuma alteração realizada."]);
    }

} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}

// Fechar conexão
$conn = null;
?>