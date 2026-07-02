# API REST — Gestão de Biblioteca

Desenvolvam uma API REST completa para gerenciamento de uma biblioteca, com cada membro responsável por um recurso.

> 📦 **Template de trabalho em grupo do CodeForge.** Clique em **Use this template** → **Create a new repository** para criar o repositório do seu grupo.

## 🚀 Como rodar

```bash
npm install
npm start        # inicia em http://localhost:3000
```

## 📋 Distribuição de recursos por membro

| Recurso | Rotas | Responsável |
|---------|-------|-------------|
| Livros | `/books` (CRUD) | Membro 1 |
| Autores | `/authors` (CRUD) | Membro 2 |
| Usuários | `/users` + histórico | Membro 3 |
| Empréstimos | `/loans` + devoluções | Membro 4+ |

## 📋 Requisitos

- **Livros** — `GET /books`, `GET /books/:id`, `POST /books`, `PUT /books/:id`, `DELETE /books/:id`
- **Autores** — `GET /authors`, `GET /authors/:id`, `POST /authors`, `PUT /authors/:id`
- **Empréstimos** — `POST /loans` (emprestar), `PUT /loans/:id/return` (devolver), `GET /loans/overdue` (vencidos)
- **Usuários** — `POST /users` (cadastro), `GET /users/:id`, `GET /users/:id/history` (histórico)
- Persistência em memória, arquivo JSON ou SQLite
- Validação de campos obrigatórios com resposta `400` ou `422`
- Respostas sempre em JSON

## 👥 Trabalho em equipe (obrigatório)

- O repositório deve pertencer a **um** dos membros do grupo. Os **demais membros entram como colaboradores** em `Settings → Collaborators → Add people`.
- Cada membro trabalha em sua **própria branch** e abre **Pull Request** para a `main`.
- O CodeForge mede as **contribuições individuais** de cada membro direto do histórico do GitHub.

## 🧱 Stack

- Node.js + Express (CommonJS)
