<?php

// Define os cabeçalhos CORS para permitir acesso de outros domínios
include('cors.php');

// Define o cabeçalho para a resposta ser em JSON\
header('Content-Type: application/json');

// Conexão com o banco de dados
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

        try {
            // Cria uma conexão com o banco de dados MySQL
            $pdo = new PDO("mysql:host=$host;dbname=$dbName;charset=utf8", $user, $password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // Busca o usuário pelo email
            $stmt = $pdo->prepare('SELECT senha FROM users WHERE email = :email');
            $stmt->bindParam(':email', $email);
            $stmt->execute();

            // Verifica se o usuário foi encontrado
            if ($stmt->rowCount() > 0) {
                $user = $stmt->fetch(PDO::FETCH_ASSOC);
                $hashSalvo = $user['senha'];

                // Verifica se a senha está correta
                if (password_verify($senha, $hashSalvo)) {
                    // Busca o ID do usuário
                    $stmt = $pdo->prepare('SELECT id FROM users WHERE email = :email');
                    $stmt->bindParam(':email', $email);
                    $stmt->execute();
                    $user = $stmt->fetch(PDO::FETCH_ASSOC);

                    echo json_encode([
                        'status' => 'success',
                        'message' => 'Login realizado com sucesso!',
                        'userId' => $user['id'], // Retorna o ID do usuário
                    ]);
                } else {
                    echo json_encode(['status' => 'error', 'message' => 'Senha incorreta.']);
                }

            } else {
                echo json_encode(['status' => 'error', 'message' => 'Usuário não encontrado.']);
            }

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
