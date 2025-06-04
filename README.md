# 🩺 DevSaude

**DevSaude** é uma aplicação SaaS (Software as a Service) desenvolvida para clínicas de saúde. Com ela, clínicas podem se cadastrar, gerenciar seus serviços e permitir que pacientes agendem consultas de forma simples e eficaz.

## ✨ Funcionalidades

### Para Clínicas

- Cadastro de clínica e login seguro
- Painel administrativo (Dashboard)
- Cadastro e gerenciamento de serviços oferecidos
- Visualização de agendamentos de pacientes
- Gerenciamento de plano de assinatura:
  - **Plano Basic**: limitado a funcionalidades essenciais
  - **Plano Professional**: acesso completo aos recursos

### Para Pacientes

- Acesso à listagem de clínicas
- Visualização de serviços disponíveis
- Agendamento de consultas

---

## 🚀 Tecnologias Utilizadas

- **Next.js** 15
- **React** 19
- **Tailwind CSS** 4
- **Prisma ORM**
- **PostgreSQL** (sugestão de uso)
- **NextAuth** (autenticação)
- **Stripe** (pagamentos e planos)
- **React Hook Form + Zod** (validação de formulários)
- **Shadcn UI** (componentes acessíveis)
- **Cloudinary** (upload de imagens)

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/vgab1/devsaude.git
cd devsaude

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# edite o arquivo .env com suas chaves do banco de dados, Stripe, etc.

# Gere o client do Prisma
npx prisma generate

# Execute as migrations
npx prisma migrate dev

# Inicie o servidor de desenvolvimento
npm run dev

🧪 Scripts Disponíveis
npm run dev: inicia o servidor Next.js em modo desenvolvimento

npm run build: gera o client Prisma, aplica migrações e gera o build do Next.js

npm run start: inicia o servidor Next.js em modo produção

npm run lint: verifica problemas de lint

npm run stripe:listen: escuta eventos Stripe e redireciona para o webhook local

```

## 📬 Contato

Se tiver dúvidas, sugestões ou quiser contribuir:

LinkedIn: https://www.linkedin.com/in/vgab1/

Email: dev.vgab1@gmail.com

Projeto criado com ❤️ por Gabriel.
