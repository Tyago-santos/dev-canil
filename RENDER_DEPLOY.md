# Projeto Canil - Deploy Render

## Configuração para Deploy

Este projeto está configurado para fazer deploy automático no **Render**.

### Arquivos de Configuração

- **`render.yaml`** - Configuração explícita do Render
- **`.node-version`** - Versão do Node.js (18.20.0)
- **`tsup.config.ts`** - Compilação TypeScript para JavaScript
- **`package.json`** - Scripts de build e start

### Como fazer Deploy

#### 1. Conectar repositório ao Render

- Ir para [render.com](https://render.com)
- Conectar repositório GitHub
- Selecionar este projeto

#### 2. Configurações no Render (se usar render.yaml)

O Render lerá automaticamente `render.yaml` e aplicará as configurações.

#### 3. Configurações Manuais (se não usar render.yaml)

**Build Command:**

```bash
npm install && npm run build
```

**Start Command:**

```bash
npm start
```

**Environment Variables:**

```
NODE_ENV=production
PORT=3000
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Watch mode com tsx
npm run serve        # Rodar TypeScript direto

# Produção
npm run build        # Compilar TypeScript → JavaScript
npm start            # Rodar servidor compilado

# Watch
npm run build:watch  # Compilar em watch mode
```

### Como Funciona

1. **Build**: `npm run build` compila arquivos `.ts` em `/src` para `/dist`
2. **Start**: `npm start` executa `node dist/server.js`
3. **Porta**: Lê de `process.env.PORT` ou usa 3000 como padrão

### Arquivo Compilado

Após `npm run build`, a estrutura fica assim:

```
dist/
├── server.js
├── controller/
│   ├── pageController.js
│   └── searchController.js
├── routes/
│   ├── index.js
│   └── notFound.js
├── helpers/
│   └── createMenuObject.js
└── mode/
    └── pets.js
```

### Troubleshooting

**Porta 3000 ocupada?**

```bash
PORT=8080 npm start
```

**Build falha?**

```bash
rm -rf dist node_modules
npm install
npm run build
```

**Verificar arquivos compilados:**

```bash
ls -la dist/
```

---

✅ Tudo pronto para deploy no Render!
