# NLW Agents Server

Projeto desenvolvido durante o evento **NLW Agents** da **Rocketseat** 

Confira também a [Página Web](https://github.com/LucasEmmanoel06/nlw-agents-web) do NLW Agents

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset JavaScript com tipagem estática
- **Fastify** - Framework web rápido e eficiente
- **Zod** - Validação de schema
- **Drizzle ORM** - ORM moderno para TypeScript
- **PostgreSQL** - Banco de dados relacional
- **Docker** - Containerização
- **Biome** - Linting e formatação do código

## 📝 Padrões de Projeto

- **API REST** com validação de dados usando Zod
- **Type Safety** com TypeScript e Fastify Type Provider
- **ORM** com Drizzle para queries type-safe
- **Validação de ambiente** com Zod
- **Code Quality** com Biome e configuração Ultracite

## 📁 Estrutura do Projeto

```
src/
├── db/
│   ├── connection.ts      # Configuração da conexão com banco
│   ├── seed.ts           # Seed do banco de dados
│   ├── migrations/       # Migrações do banco
│   └── schema/           # Esquemas das tabelas
├── http/
│   └── routes/           # Rotas da API
├── env.ts                # Validação das variáveis de ambiente
└── server.ts            # Configuração do servidor
```

## ⚙️ Configuração

### Pré-requisitos

- Node.js 22+
- Docker e Docker Compose

### Instalação

1. Clone o repositório
  ```bash
  git clone https://github.com/LucasEmmanoel06/nlw-agents-server.git
  cd nlw-agents-server
  ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente criando um arquivo `.env`:
   ```
   PORT=3333
   DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
   ```

4. Inicie o banco de dados:
   ```bash
   docker-compose up -d
   ```

5. Execute as migrações:
   ```bash
   npx drizzle-kit migrate
   ```

6. Popule o banco com dados de exemplo:
   ```bash
   npm run db:seed
   ```

## 🏃 Executando o Projeto

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm start
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo desenvolvimento
- `npm start` - Inicia o servidor em modo produção
- `npm run db:seed` - Executa o seed do banco de dados

## 📊 Banco de Dados

O projeto utiliza PostgreSQL com extensão **pgvector** para suporte a vetores, rodando em container Docker.

## 🌐 Endpoints

Por padrão, a API estará disponivel em `http://localhost:3333`

- `GET /health` - Health check da aplicação
- `GET /rooms` - Lista as salas disponíveis

---

Desenvolvido durante o evento NLW da Rocketseat 🚀
