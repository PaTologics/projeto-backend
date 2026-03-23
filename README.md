# Projeto Backend

## Descrição

Este projeto consiste em uma API backend desenvolvida em Node.js utilizando Express. A aplicação segue uma arquitetura modular baseada em MVC (Model-View-Controller), com integração a banco de dados relacional via Sequelize.

O sistema fornece funcionalidades para gerenciamento de usuários, produtos e categorias, incluindo autenticação baseada em JWT.

---

## Tecnologias Utilizadas

- Node.js
- Express
- Sequelize (ORM)
- PostgreSQL
- JWT (JSON Web Token)
- Bcrypt (hash de senhas)
- Swagger (documentação da API)
- Jest e Supertest (testes automatizados)

---

## Estrutura do Projeto
projeto-backend/
├── src/
│ ├── config/ # Configurações (ex: banco de dados)
│ ├── controllers/ # Lógica das rotas
│ ├── database/ # Inicialização do banco
│ ├── middleware/ # Middlewares (ex: autenticação)
│ ├── models/ # Definição dos modelos (Sequelize)
│ ├── routes/ # Definição das rotas
│ ├── services/ # Regras de negócio
│ ├── app.js # Configuração do app Express
│ └── server.js # Inicialização do servidor
│
├── tests/ # Testes automatizados
├── .env # Variáveis de ambiente
├── package.json # Dependências e scripts

---

## Requisitos

- Node.js >= 18
- PostgreSQL
- npm ou yarn

---

## Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd projeto-backend
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente no arquivo .env:

```bash
Exemplo:
PORT=3000
DB_HOST=localhost
DB_USER=usuario
DB_PASSWORD=senha
DB_NAME=nome_do_banco
JWT_SECRET=chave_secreta
```

4. Execute as migrations (caso aplicável):

```bash
npx sequelize-cli db:migrate
```

## Execução

Ambiente de desenvolvimento

```bash
npm run dev
```

Produção

```bash
npm start
```

Testes

Para executar os testes automatizados:

```bash
npm test
```
Os testes utilizam Jest e Supertest para validação das rotas e regras de negócio.

## Funcionalidades Principais

Autenticação de usuários (JWT)
CRUD de usuários
CRUD de produtos
CRUD de categorias
Relacionamento entre entidades (produtos, categorias, imagens, opções)
Proteção de rotas via middleware de autenticação

## Documentação da API

A API possui documentação integrada via Swagger.

Após iniciar o servidor, acesse:

http://localhost:3000/api-docs

## Boas Práticas Adotadas

Arquitetura modular (separação por responsabilidades)
Uso de ORM para abstração do banco
Middleware para autenticação
Camada de serviço para regras de negócio
Testes automatizados

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature:

```bash
git checkout -b minha-feature
```

3. Commit suas alterações:

```bash
git commit -m "feat: descrição da mudança"  
```

4. Envie para o repositório:

```bash
git push origin minha-feature
```

5. Abra um Pull Request

## Licença

Este projeto está sob a licença ISC.