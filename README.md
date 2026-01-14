# IDE Portfolio Web (React)

> Um portfólio de desenvolvedor reimaginado como uma IDE estilo Visual Studio Code. Explore currículo, projetos e certificações através de uma interface interativa com explorador de arquivos, editor de código com realce de sintaxe e visualização ao vivo.

## Funcionalidades Principais

- **Estética VS Code**: Recriação fiel do tema Dark+, incluindo Activity Bar, Sidebar, Abas, Status Bar e agora uma Title Bar estilo Linux.
- **Explorador de Arquivos Interativo**: Navegue por "arquivos" (resume.json, projects.jsx, certificates.json) com uma estrutura de pastas familiar.
- **Editor Split-Screen**: Visualize o "código" à esquerda (com realce de sintaxe real para JS, Python, JSON) e previews funcionais à direita.
- **Conteúdo Dinâmico**: Dados de projetos e currículo são carregados dinamicamente, facilitando atualizações.
- **Componentização**: Arquitetura modular com React (Sidebar, Editor, LivePreview, Pages).
- **Realce de Sintaxe**: Integração com `react-syntax-highlighter` para uma experiência de leitura de código autêntica.

## Tecnologias Utilizadas

- **React** (Vite)
- **CSS3** (Variáveis CSS para theming e Flexbox/Grid para layout)
- **react-syntax-highlighter** (Para coloração de código)
- **Phosphor Icons / SVGs** (Para ícones da interface)

## Como Executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/vitoriapguimaraes/React-PortfolioWeb.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o projeto:

   ```bash
   npm run dev
   ```

## Como Usar

- **Navegação**: Use a barra lateral (Explorer) para abrir arquivos.
- **Visualização**:
  - Clique em `resume.json` para ver o currículo formatado.
  - Clique em arquivos de projeto (ex: `BookStackAI.jsx` ou `ImageClassifier.ipynb`) para ver o "código" e a demonstração visual.
  - Clique em `certificates.json` para ver a grade de certificações.
- **Interação**: O editor de código e o preview rolam independentemente. Use as abas para fechar arquivos (visual).

## Estrutura de Diretórios

```bash
/React-PortfolioWeb
├── src/
│   ├── components/
│   │   ├── Editor/       # Lógica do editor de código
│   │   ├── Layout/       # Componentes estruturais (Sidebar, ActivityBar, TitleBar)
│   │   └── LivePreview/  # Componentes de visualização (renderização condicional)
│   ├── data/             # Dados estáticos (resume, projects, certificates)
│   ├── pages/            # Componentes de página (About, Resume, Projects)
│   ├── App.jsx           # Layout principal
│   └── main.jsx          # Ponto de entrada
├── public/
└── README.md
```

## Status

🚧 Em desenvolvimento

> Veja as [issues abertas](https://github.com/vitoriapguimaraes/Portfolio/issues) para sugestões de melhorias e próximos passos.

## Mais Sobre Mim

Acesse os arquivos disponíveis na [Pasta Documentos](https://github.com/vitoriapguimaraes/vitoriapguimaraes/tree/main/DOCUMENTOS) para mais informações sobre minhas qualificações e certificações.
