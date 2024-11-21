const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3005;
app.use(cors());

const db = new sqlite3.Database('database.db', (err) => {
  if (err) {
      console.error('Erro ao abrir o banco de dados:', err.message);
  } else {
      console.log('Conectado ao banco de dados SQLite.');
  }
});

app.get('/:consul/:categoria', (req, res) => {
  const categoria = req.params.categoria;
  const consul = req.params.consul;

  const allowedTables = ['produtos'];
  if (!allowedTables.includes(consul)) {
    return res.status(400).json({ error: 'Tabela inválida' });
  }

  const sql = `SELECT * FROM ${consul} WHERE categoria = ?`; 

  db.get(sql, [categoria], (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (row) {
      res.json({
        data: row
      });
    } else {
      res.status(404).json({ message: 'Registro não encontrado' });
    }
  });
});


// Iniciar o servidor
app.listen(process.env.PORT || PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Fechar conexão ao encerrar o processo (exemplo)
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      return console.error('Erro ao fechar o banco de dados:', err.message);
    }
    console.log('Conexão com o banco de dados fechada.');
    process.exit(0);
  });
});