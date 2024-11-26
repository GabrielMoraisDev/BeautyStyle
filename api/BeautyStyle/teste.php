<?php
// Dados de conexão
$host = 'localhost'; // ou 'localhost'
$dbName = 'beautystyle'; // Substitua pelo nome do seu banco
$user = 'root'; // Substitua pelo usuário do banco (geralmente 'root' em localhost)
$password = ''; // Substitua pela senha do usuário (em localhost pode ser vazio)

// Tentativa de conexão
try {
    // Cria uma nova instância de PDO para conectar ao banco
    $pdo = new PDO("mysql:host=$host;dbname=$dbName", $user, $password);

    // Configura o PDO para lançar exceções em caso de erro
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Mensagem de sucesso
    echo "Conexão com o banco de dados realizada com sucesso!";
} catch (PDOException $e) {
    // Exibe a mensagem de erro caso a conexão falhe
    echo "Erro ao conectar com o banco de dados: " . $e->getMessage();
}
?>
