<h3 align="center">
  API de Gerenciamento de Contatos
</h3>

## 🔬 Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:

- <img align="left" alt="Javascript" width="26px" src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" />NodeJs

- <img align="left" alt="Postgres" width="26px" src="https://cdn.worldvectorlogo.com/logos/postgresql.svg" />Postgres

- <img align="left" alt="Docker" width="26px" src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" />Docker

## 💻 Projeto
Esta aplicação foi criada com o objetivo de aprender e implementar um CRUD (Create, Read, Update, Delete) utilizando a biblioteca Express, PostgreSQL, Docker, comandos SQL e boas práticas de desenvolvimento.

## ℹ️ Como instalar

```bash

# instale as dependências
npm install

```
<br />

**Variáveis de Ambiente**
Crie as variáveis de ambiente de acordo com o arquivo .env.example

```bash

cp .env.example .env

```

**🎲 Prepare o Banco de Dados**
<br />

Instale o PostgresSQL e defina as variáveis de ambiente baseadas no exemplo acima para se conectar ao banco de dados, ou você pode utilizar o Docker a partir desses comandos:
```bash

# Create container and set Database
$ docker compose up -d

# Stop container
$ docker compose stop

```

## ℹ️ Como executar o projeto
```bash
npm run dev
```
