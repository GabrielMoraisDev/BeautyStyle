<?php
// Definir o cabeçalho para retorno em JSON
header('Content-Type: application/json');

// Caminho para o banco de dados SQLite
$dbPath = 'database.db';

try {
    // Conexão com o banco de dados SQLite
    $pdo = new PDO('sqlite:' . $dbPath);
    // Configura o modo de erro para lançar exceções
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Query para selecionar os dados desejados
    $query = 'SELECT id, email, senha, compras FROM users';

    // Prepara e executa a query
    $stmt = $pdo->query($query);

    // Busca os resultados
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Retorna os resultados como JSON
    if ($result) {
        echo json_encode([
            'data' => $result
        ]);
    } else {
        echo json_encode([
            'data' => [],
            'message' => 'Nenhum dado encontrado na tabela "users".'
        ]);
    }
} catch (PDOException $e) {
    echo json_encode([
        'status' => 'error',
        'message' => 'Erro ao conectar ou consultar o banco de dados: ' . $e->getMessage()
    ]);
}
?>
