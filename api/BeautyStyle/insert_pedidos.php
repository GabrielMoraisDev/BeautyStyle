<?php
// Inclui os arquivos de configuração
include('cors.php');
include('conn.php');

// Obtém os dados enviados via POST
$data = json_decode(file_get_contents('php://input'), true);

// Verifica se os dados necessários foram recebidos
if (isset($data['id_usuario']) && isset($data['produtos']) && is_array($data['produtos'])) {
    $id_usuario = $data['id_usuario'];
    $produtos = $data['produtos'];
    
    // Inicia a transação para garantir a integridade dos dados
    $pdo->beginTransaction();
    
    try {
        // Obtém o maior ID na tabela pedidos e incrementa 1
        $stmt = $pdo->query("SELECT MAX(id) AS max_id FROM pedidos");
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        $pedido_id = $row['max_id'] + 1; // Incrementa o ID
        
        // Insere um novo pedido na tabela pedidos com o id calculado
        $stmt = $pdo->prepare("INSERT INTO pedidos (id, id_usuario, nome, preco, descricao) VALUES (:id, :id_usuario, :nome, :preco, :descricao)");

        foreach ($produtos as $produto) {
            $stmt->execute([
                'id' => $pedido_id,  // Usando o ID gerado
                'id_usuario' => $id_usuario,
                'nome' => $produto['title'],
                'preco' => $produto['price'],
                'descricao' => $produto['description'],
            ]);
        }
        
        // Confirma a transação
        $pdo->commit();
        
        // Retorna uma resposta de sucesso
        echo json_encode(['success' => true]);
    } catch (PDOException $e) {
        // Em caso de erro, desfaz a transação
        $pdo->rollBack();
        echo json_encode(['success' => false, 'message' => 'Erro ao inserir pedido: ' . $e->getMessage()]);
    }
} else {
    // Retorna um erro se os dados estiverem ausentes ou inválidos
    echo json_encode(['success' => false, 'message' => 'Dados inválidos ou ausentes']);
}
?>
