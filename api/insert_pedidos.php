<?php
header('Content-Type: application/json');

// Conexão com o banco de dados
include('cors.php');
include('conn.php');

$conn = new mysqli($host, $user, $password, $dbName);

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Erro ao conectar ao banco de dados: " . $conn->connect_error]));
}

// Verificar se os dados foram enviados via POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!isset($data['id_usuario']) || !isset($data['produtos']) || !is_array($data['produtos'])) {
        echo json_encode(["success" => false, "message" => "Dados inválidos."]);
        exit;
    }

    $id_usuario = $data['id_usuario'];
    $produtos = $data['produtos'];

    // Prepare a query com o campo id_produto
    $stmt = $conn->prepare("INSERT INTO pedidos (id_usuario, id_produto, nome, descricao, preco, categoria, qnt) VALUES (?, ?, ?, ?, ?, ?, ?)");

    foreach ($produtos as $produto) {
        $stmt->bind_param(
            "iissdsi", 
            $id_usuario,
            $produto['id'], // Adicionando o id_produto
            $produto['title'],
            $produto['description'],
            $produto['price'],
            $produto['categoria'],
            $produto['quantity']
        );

        if (!$stmt->execute()) {
            echo json_encode(["success" => false, "message" => "Erro ao inserir o produto: " . $stmt->error]);
            $stmt->close();
            $conn->close();
            exit;
        }
    }

    $stmt->close();
    echo json_encode(["success" => true, "message" => "Pedidos inseridos com sucesso!"]);
} else {
    echo json_encode(["success" => false, "message" => "Método inválido. Use POST."]);
}

$conn->close();
?>
