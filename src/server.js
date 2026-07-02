const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Armazenamento em memória (substitua por arquivo JSON ou SQLite se desejar persistência)
const books = [];
const authors = [];
const users = [];
const loans = [];
let nextId = 1;

// ─── Rota raiz ───────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({ project: "API REST — Gestão de Biblioteca", status: "ok" });
});

// ─── TODO: Livros (/books) ───────────────────────────────────────────────────
// GET    /books           — lista todos os livros
// GET    /books/:id       — detalhe do livro (404 se não existir)
// POST   /books           — cria livro (campos: title, author_id, year, isbn, quantity)
// PUT    /books/:id       — atualiza livro
// DELETE /books/:id       — remove livro

// ─── TODO: Autores (/authors) ────────────────────────────────────────────────
// GET    /authors         — lista todos os autores
// GET    /authors/:id     — detalhe do autor
// POST   /authors         — cria autor (campos: name, nationality)
// PUT    /authors/:id     — atualiza autor

// ─── TODO: Usuários (/users) ─────────────────────────────────────────────────
// POST   /users           — cadastra usuário (campos: name, email)
// GET    /users/:id       — detalhe do usuário
// GET    /users/:id/history — histórico de empréstimos

// ─── TODO: Empréstimos (/loans) ──────────────────────────────────────────────
// POST   /loans           — empresta livro (campos: book_id, user_id, due_date)
//                           responde 409 se livro indisponível
// PUT    /loans/:id/return — devolve livro
// GET    /loans/overdue   — lista empréstimos vencidos

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app;
