<?php

// Define os cabeçalhos CORS para permitir acesso de outros domínios
include('cors.php');

// Conexão com o banco de dados
include('conn.php');

// Conexão com o banco de dados
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbName;charset=utf8", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erro ao conectar ao banco de dados: " . $e->getMessage());
}

// Obtendo o parâmetro 'id_user' da URL (exemplo: script.php?id_user=1)
$id_user = isset($_GET['id_user']) ? intval($_GET['id_user']) : null;

if ($id_user) {
    try {
        // Preparando a consulta
        $query = "SELECT id_produto as id, nome, preco, descricao, categoria, qnt FROM pedidos WHERE id_usuario = :id_user";
        $stmt = $pdo->prepare($query);

        // Executando a consulta com o parâmetro
        $stmt->bindParam(':id_user', $id_user, PDO::PARAM_INT);
        $stmt->execute();

        // Obtendo os resultados
        $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Retorno do JSON
        header('Content-Type: application/json');
        if ($resultados) {
            // Retornando os dados encontrados
            echo json_encode($resultados, JSON_PRETTY_PRINT);
        } else {
            // Retornando o objeto padrão
            echo json_encode([[
                "id" => 0,
                "nome" => "",
                "preco" => "",
                "descricao" => "",
                "categoria" => "",
                "qnt" => 0
            ]], JSON_PRETTY_PRINT);
        }
    } catch (PDOException $e) {
        echo json_encode(["error" => "Erro ao executar a consulta: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["error" => "Parâmetro id_user é obrigatório"]);
}
?>
