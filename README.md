# Resultados das Loterias 🎰

Bem-vindo ao **Resultados das Loterias**, uma aplicação web moderna e responsiva que exibe resultados aleatórios das principais loterias brasileiras, obtidos de uma API pública. Este projeto foi desenvolvido para demonstrar habilidades em desenvolvimento front-end, utilizando React e TypeScript.

---

## ✨ Funcionalidades

- **Seleção de Loterias**: Escolha entre Mega-Sena, Quina, Lotofácil, Lotomania, Timemania e Dia de Sorte.
- **Resultados Aleatórios**: Veja números sorteados aleatoriamente, a data do concurso, se acumulou ou não, e os prêmios distribuídos.
- **Design Moderno e Responsivo**: Layout adaptável para celulares, tablets e desktops, com uma paleta de cores suaves e elegantes.
- **Background Dinâmico**: O fundo muda conforme o tipo de concurso selecionado, com um efeito de meia lua no lado esquerdo.

---

## 🛠️ Tecnologias Utilizadas

- **Front-end**:
  - React: Biblioteca JavaScript para construção de interfaces de usuário.
  - TypeScript: Adiciona tipagem estática ao JavaScript, melhorando a qualidade do código.
  - Axios: Biblioteca para fazer requisições HTTP à API.
  - CSS: Estilização personalizada com efeitos modernos.

- **Ferramentas**:
  - Node.js: Ambiente de execução para o front-end.
  - npm: Gerenciador de pacotes para instalar dependências do front-end.
  - Git: Controle de versão do projeto.

---

## 🚀 Como Funciona

O projeto faz requisições diretamente à API pública (`https://apiloterias.com.br`) para obter dados aleatórios dos concursos. O front-end, desenvolvido com React e TypeScript, exibe os resultados de forma organizada e responsiva.

### Fluxo do Projeto

1. O usuário seleciona um tipo de loteria no front-end.
2. O front-end faz uma requisição diretamente à API pública.
3. A API retorna os dados, que são exibidos no front-end.
4. O front-end exibe os números sorteados, a data do concurso, se acumulou ou não, e os prêmios distribuídos.

---

## 📂 Estrutura do Projeto
loteca/
├── src/ # Código do front-end
│ ├── components/ # Componentes reutilizáveis
│ ├── pages/ # Páginas da aplicação
│ ├── services/ # Lógica para consumir a API
│ ├── styles/ # Arquivos de estilos globais
│ ├── App.tsx # Componente principal
│ └── index.tsx # Ponto de entrada da aplicação
├── public/ # Arquivos estáticos (HTML, imagens)
├── package.json # Dependências e scripts do front-end
└── README.md # Este arquivo



---

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão 16 ou superior).
- [Git](https://git-scm.com/) instalado (opcional, mas recomendado).

### Passos

1. **Clone o repositório** (ou baixe o código fonte):

   ```bash
   git clone https://github.com/couto-diego/loteca.git
   cd loteca
Instale as dependências do front-end:

    ```bash

npm install
Inicie o front-end:

    ```bash
    
npm start
Acesse a aplicação:

Abra o navegador e visite http://localhost:3000.

🤝 Como Contribuir
Contribuições são bem-vindas! Se você quiser melhorar este projeto, siga os passos abaixo:

Faça um fork do repositório.

Crie uma branch com sua feature ou correção:

    ```bash

git checkout -b minha-feature
Faça commit das suas alterações:

    ```bash

git commit -m "Minha nova feature"
Envie para o repositório remoto:

    ```bash

git push origin minha-feature
Abra um pull request no GitHub.

## 👨‍💻 Autor e Contato

- **Autor**: Diego Couto
- **GitHub**: [couto-diego](https://github.com/couto-diego)
- **Portfolio**: [Portfolio Diego Couto](https://couto-diego.github.io/portfolio-diego-couto/)
- **LinkedIn**: [Diego Couto](https://www.linkedin.com/in/couto-diego/)

---

Feito por [Diego Couto](https://github.com/couto-diego)