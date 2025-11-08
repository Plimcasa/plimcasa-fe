# 🏠 Plim - Serviços de Limpeza

> Conecte-se com profissionais qualificados de limpeza. Rápido, seguro e confiável.

Uma plataforma moderna para conectar clientes que precisam de serviços de limpeza com profissionais qualificados e verificados. Desenvolvida como Progressive Web App (PWA) com foco em mobile-first e experiência nativa.

## ✨ Funcionalidades

### Para Clientes
- 🔍 Busca e contratação de profissionais verificados
- 📅 Agendamento fácil e rápido de serviços
- 💳 Pagamento seguro integrado
- 📊 Dashboard com histórico de serviços
- ⭐ Sistema de avaliações
- 📱 Notificações em tempo real
- 💎 Planos de assinatura com benefícios

### Para Prestadores
- 📋 Painel para gerenciar solicitações
- ✅ Aceitar ou recusar trabalhos
- 💰 Acompanhamento de ganhos
- 📈 Histórico de serviços realizados
- ⏰ Gestão de agenda
- 🎯 Notificações de novas oportunidades

## 🚀 Tecnologias

### Core
- **[Next.js 15](https://nextjs.org/)** - React framework com App Router
- **[React 19](https://react.dev/)** - Biblioteca UI
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Estilização utility-first

### UI & Componentes
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis
- **[Lucide React](https://lucide.dev/)** - Ícones
- **[Shadcn/ui](https://ui.shadcn.com/)** - Sistema de design

### Estado & Dados
- **[TanStack Query](https://tanstack.com/query)** - Gerenciamento de estado assíncrono
- **[Zod](https://zod.dev/)** - Validação de schemas

### PWA & Performance
- **[next-pwa](https://github.com/shadowwalker/next-pwa)** - Service Worker e manifest
- **Mobile-first design** - Otimizado para dispositivos móveis
- **Touch-optimized** - Targets de toque mínimos de 44x44px
- **Safe areas** - Suporte para notch e rounded corners
- **Offline-ready** - Funciona sem conexão

## 📱 Otimizações PWA

- ✅ **Install Prompt** - Prompt de instalação customizado
- ✅ **Responsive Design** - Adaptado para todos tamanhos de tela
- ✅ **Touch-Friendly** - Elementos interativos otimizados
- ✅ **Native Feel** - Comportamento similar a app nativo
- ✅ **Performance** - Carregamento rápido e animações suaves
- ✅ **Safe Areas** - Compatível com dispositivos com notch
- ✅ **Prevent Pull-to-Refresh** - Controle total do scroll no iOS

## 🛠️ Instalação

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone <repository-url>
cd plimcasa-fe
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
# Edite .env.local com suas configurações
```

4. **Execute o servidor de desenvolvimento**
```bash
npm run dev
```

5. **Acesse a aplicação**
Abra [http://localhost:3000](http://localhost:3000) no navegador

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Cria build de produção
npm run start        # Inicia servidor de produção

# Qualidade de Código
npm run lint         # Executa ESLint
```

## 📂 Estrutura do Projeto

```
plimcasa-fe/
├── app/                          # App Router do Next.js
│   ├── auth/                     # Páginas de autenticação
│   ├── client-dashboard/         # Dashboard do cliente
│   ├── provider-dashboard/       # Dashboard do prestador
│   ├── plans/                    # Planos e assinaturas
│   ├── request-service/          # Solicitação de serviço
│   ├── layout.tsx                # Layout raiz
│   ├── page.tsx                  # Página inicial
│   ├── providers.tsx             # Context providers
│   └── globals.css               # Estilos globais
├── components/                   # Componentes reutilizáveis
│   ├── ui/                       # Componentes UI (shadcn)
│   └── PWAInstallPrompt.tsx      # Prompt de instalação PWA
├── lib/                          # Utilitários e helpers
├── public/                       # Arquivos estáticos
│   ├── manifest.json             # PWA manifest
│   ├── icon-192.png              # Ícone PWA 192x192
│   └── icon-512.png              # Ícone PWA 512x512
├── next.config.ts                # Configuração Next.js
├── tailwind.config.ts            # Configuração Tailwind
└── tsconfig.json                 # Configuração TypeScript
```

## 🎨 Design System

### Breakpoints
- **xs**: 360px - Smartphones pequenos
- **sm**: 640px - Smartphones grandes
- **md**: 768px - Tablets
- **lg**: 1024px - Laptops
- **xl**: 1280px - Desktops
- **2xl**: 1536px - Monitores grandes

### Touch Targets
Todos os elementos interativos seguem o padrão de **mínimo 44x44px** para garantir usabilidade em dispositivos touch.

### Cores
O projeto usa um sistema de cores HSL configurável via CSS variables, com suporte a dark mode.

## 🌐 PWA Features

### Manifest
- Nome: Plim - Serviços de Limpeza
- Tema: #0EA5E9 (Sky Blue)
- Display: standalone
- Orientação: portrait-primary

### Service Worker
- Cache de assets estáticos
- Offline fallback
- Background sync
- Push notifications (preparado)

## 🚢 Deploy

### Vercel (Recomendado)
```bash
# Conecte seu repositório no Vercel
# Deploy automático em cada push
```

### Outros Provedores
```bash
npm run build
npm run start
# Configure variáveis de ambiente no provider
```

## 🤝 Contribuindo

1. Faça fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feat/nova-feature`)
3. Commit suas mudanças usando conventional commits
4. Push para a branch (`git push origin feat/nova-feature`)
5. Abra um Pull Request

### Conventional Commits
Este projeto usa conventional commits:
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação, ponto e vírgula, etc
- `refactor:` Refatoração de código
- `perf:` Melhorias de performance
- `test:` Testes
- `chore:` Tarefas de build, configs, etc

## 📄 Licença

Este projeto está sob a licença MIT.

## 👥 Equipe

Desenvolvido com ❤️ pela equipe Plim

---

**Status do Projeto:** 🚧 Em Desenvolvimento Ativo
