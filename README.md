# 🎮 Secret World

Um jogo de adivinhação de palavras desenvolvido em React, onde o jogador precisa descobrir palavras secretas com base em dicas de categorias.

## 🚀 Demo

🌐 **[Jogar Online](https://apeetec.github.io/secretworld/)**

## 📸 Screenshots

*Em breve...*

## 🎯 Sobre o Jogo

Secret World é um jogo de palavras inspirado no clássico "Forca", onde:

- ✨ O jogador deve adivinhar palavras de diferentes categorias
- 🎪 Cada categoria possui várias palavras para descobrir
- 💯 Sistema de pontuação baseado em acertos
- ❤️ Sistema de vidas limitadas (3 tentativas por palavra)
- 🔄 Reinício automático com nova palavra após completar uma

### Categorias Disponíveis:
- 🚗 **Carro**: Peças e componentes automotivos
- 🍎 **Fruta**: Variedades de frutas
- 👨 **Corpo**: Partes do corpo humano
- 💻 **Computador**: Componentes de hardware
- 👨‍💻 **Programação**: Termos de desenvolvimento
- 🍽️ **Alimento**: Comidas do dia a dia

## 🛠️ Tecnologias Utilizadas

- **React** 19.1.1 - Biblioteca JavaScript para construção da interface
- **Vite** 7.1.7 - Build tool e dev server
- **ESLint** - Linting e qualidade de código
- **CSS3** - Estilização customizada
- **GitHub Pages** - Hospedagem
- **GitHub Actions** - Deploy automático

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/apeetec/secretworld.git
cd secretworld
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em modo de desenvolvimento**
```bash
npm run dev
```

4. **Abra no navegador**
```
http://localhost:5173
```

## 📋 Scripts Disponíveis

```bash
# Executar em desenvolvimento
npm run dev

# Criar build de produção
npm run build

# Visualizar build de produção
npm run preview

# Executar linting
npm run lint

# Deploy para GitHub Pages
npm run deploy
```

## 🎮 Como Jogar

1. **Tela Inicial**: Clique em "Começar" para iniciar o jogo
2. **Gameplay**: 
   - Uma palavra da categoria selecionada será escolhida aleatoriamente
   - Digite letras no campo de entrada para tentar adivinhar
   - Cada letra correta revela sua posição na palavra
   - Letras erradas reduzem suas vidas
   - Complete a palavra para ganhar pontos e continuar
3. **Game Over**: Suas vidas acabaram! Veja sua pontuação final e tente novamente

## 🏗️ Estrutura do Projeto

```
secret-world/
├── public/                 # Arquivos públicos
├── src/
│   ├── Components/        # Componentes React
│   │   ├── StartScreen.jsx    # Tela inicial
│   │   ├── Game.jsx          # Tela principal do jogo
│   │   └── GameOver.jsx      # Tela de fim de jogo
│   ├── data/
│   │   └── words.jsx         # Base de dados das palavras
│   ├── assets/            # Recursos (imagens, etc.)
│   ├── App.jsx           # Componente principal
│   ├── App.css          # Estilos globais
│   └── main.jsx         # Ponto de entrada
├── .github/
│   └── workflows/
│       └── deploy.yml    # CI/CD para GitHub Pages
├── package.json
├── vite.config.js
└── README.md
```

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Ideias para Contribuições:
- 🎨 Melhorar o design e interface
- 📱 Responsividade para dispositivos móveis
- 🎵 Adicionar efeitos sonoros
- 🏆 Sistema de ranking/leaderboard
- 🌍 Suporte a múltiplos idiomas
- 📊 Mais categorias de palavras
- ⚡ Animações e transições

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**apeetec**
- GitHub: [@apeetec](https://github.com/apeetec)

## 🙏 Agradecimentos

- Projeto desenvolvido como parte do aprendizado em React
- Inspirado nos clássicos jogos de adivinhação de palavras
- Comunidade React pela documentação e recursos

---

⭐ **Gostou do projeto? Deixe uma estrela!** ⭐
