# 🍽️ Recipe Catalog API

Uma API RESTful feita com **NestJS**, **TypeScript** e **Clean Architecture**, que permite o gerenciamento simples de receitas.

![Nodejs](https://skillicons.dev/icons?i=nodejs&theme=light)
![NestJS](https://skillicons.dev/icons?i=nestjs&theme=light)
![TypeScript](https://skillicons.dev/icons?i=ts&theme=light)
![Docker](https://skillicons.dev/icons?i=docker&theme=light)
![Tests](https://skillicons.dev/icons?i=jest&theme=light)


---

## 📋 Funcionalidades

✅ Criar uma nova receita  
✅ Listar todas as receitas  
✅ Buscar receita por ID  
✅ Documentação Swagger  
✅ Testes automatizados  
✅ Pronto para Docker

---

## 🧠 Tecnologias Utilizadas

- **Node.js**
- **NestJS**
- **TypeScript**
- **Swagger**
- **Docker**
- **Jest (Testes)**

---
### 🚀 Passos para Instalação

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/rooberttdev/recipe-catalog-api.git
   cd recipe-catalog-api
2. **Instalando as dependências**:

   ```bash
   pnpm install
3. **Rodar o servidor**:

   ```bash
   pnpm run start:dev
4. **Rodar testes unitários**:

   ```bash
   pnpm test
5. **Documentação Swagger**:

   ```bash
   http://localhost:3000/swagger

## 🐳 Rodando com Docker

> Certifique-se de ter o Docker instalado.

1. **Build da imagem e inicialização:**

   ```bash
   docker compose down -v
   docker compose build --no-cache
   docker compose up
   ```

2. Acesse a API em:

   ```
   http://localhost:3000/swagger
   ```
## 🔐 Credenciais 
   ```bash
  🧑‍💻 Usuário: admin@admin.com
  🔐 Senha: admin
   ```


