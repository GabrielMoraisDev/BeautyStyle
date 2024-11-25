<?php
// Define os cabeçalhos CORS para permitir acesso de outros domínios
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Define o cabeçalho para a resposta ser em JSON
header('Content-Type: application/json');

include('conn.php');

// Verifica se a requisição é POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $data = json_decode(file_get_contents('php://input'), true);
    
    // Verifica se os parâmetros email e senha foram enviados
    if (isset($data['email']) && isset($data['senha'])) {

        $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL); // Sanitiza o email
        $senha = $data['senha']; // Senha não deve ser filtrada

        // Valida o email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo json_encode(['status' => 'error', 'message' => 'Email inválido.']);
            exit;
        }

        // Hash da senha
        $hashedPassword = password_hash($senha, PASSWORD_DEFAULT);

        try {
            // Cria uma conexão com o banco de dados MySQL
            $pdo = new PDO("mysql:host=$host;dbname=$dbName;charset=utf8", $user, $password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // Prepara a instrução SQL para inserir os dados na tabela users
            $stmt = $pdo->prepare('INSERT INTO users (email, senha) VALUES (:email, :senha)');
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':senha', $hashedPassword);

            $stmt->execute(); // Executa a query

            echo json_encode(['status' => 'success', 'message' => 'Usuário inserido com sucesso!']);

        } catch (PDOException $e) {
            // Se houver erro na conexão com o banco de dados, exibe uma mensagem de erro
            echo json_encode(['status' => 'error', 'message' => 'Erro no banco de dados: ' . $e->getMessage()]);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Parâmetros de email e senha são obrigatórios.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Método HTTP inválido. Use POST.']);
}
?>
