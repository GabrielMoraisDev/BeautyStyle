<?php
// Defina os cabeçalhos CORS para permitir acesso de outros domínios
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Defina o cabeçalho para a resposta ser em JSON
header('Content-Type: application/json');

// Defina o arquivo do banco de dados SQLite
$dbFile = 'database.db';

// Verifique se a requisição é POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $data = json_decode(file_get_contents('php://input'), true);
    
    // Verifique se os parâmetros email e senha foram enviados
    if (isset($data['email']) && isset($data['senha'])) {

        $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL); // Sanitiza o email
        $senha = $data['senha']; // Senha não deve ser filtrada

        // Valide o email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo json_encode(['status' => 'error', 'message' => 'Email inválido.']);
            exit;
        }

        // Hash da senha
        $hashedPassword = password_hash($senha, PASSWORD_DEFAULT);

        try {
            // Crie uma conexão com o banco de dados SQLite
            $pdo = new PDO('sqlite:' . $dbFile);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // Prepare a instrução SQL para inserir os dados na tabela users
            $stmt = $pdo->prepare('INSERT INTO users (email, senha) VALUES (:email, :senha)');
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':senha', $hashedPassword);

            echo json_encode(['status' => 'success', 'message' => 'Usuário inserido com sucesso!']);

        } catch (PDOException $e) {
            // Se houver erro na conexão com o banco de dados, exiba uma mensagem de erro
            echo json_encode(['status' => 'error', 'message' => 'Erro no banco de dados: ' . $e->getMessage()]);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Parâmetros de email e senha são obrigatórios.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Método HTTP inválido. Use POST.']);
}
?>
