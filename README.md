![Pet Adoption](./public/images/favicon.png)

# Dev Canil - Sistema de Adoção de Pets

Sistema web para gerenciamento e adoção de animais de estimação. Permite cadastrar pets, visualizar animais disponíveis para adoção e gerenciar o processo de adoção.

## Tecnologias

### Backend

- **Node.js** - Runtime JavaScript server-side
- **Express** - Framework web para Node.js
- **TypeScript** - Superset tipado de JavaScript

### Banco de Dados

- **MySQL** - Banco de dados relacional
- **mysql2** - Driver MySQL para Node.js

### Template Engine

- **Mustache** - Template engine logic-less
- **mustache-express** - Adapter Mustache para Express

### Segurança

- **bcrypt** - Criptografia de senhas
- **helmet** - Headers de segurança HTTP
- **express-session** - Gerenciamento de sessões
- **connect-flash** - Mensagens flash temporárias
- **zod** - Validação de dados

### Upload de Arquivos

- **multer** - Middleware para upload de arquivos

### Desenvolvimento

- **tsx** - Executor TypeScript em tempo real
- **tsup** - Bundler TypeScript
- **ESLint** - Linting de código
- **Prettier** - Formatação de código

## Funcionalidades

- Listagem de pets disponíveis para adoção
- Cadastro e autenticação de usuários
- Formulário de adoção de pets
- Upload de imagens dos pets
- Sistema de busca de animais
- Área restrita para usuários autenticados

## Instalação

```bash
npm install
```

## Uso

```bash
# Desenvolvimento
npm run dev

# Produção
npm run build
npm start
```

## Variáveis de Ambiente

Copie `.env.example` para `.env` e configure as variáveis necessárias.
