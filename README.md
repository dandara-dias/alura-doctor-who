<h1 align="center">
  Aluracord
</h1>

<p align="center">🤿 Aplicação "clone" do Discord desenvolvida durante o evento Imersão React 4 da Alura 🤿 Em construção 🚧</p> 

<p align="center">
• <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#%EF%B8%8F-funcionalidades">Features</a> • 
 <a href="#-demonstra%C3%A7%C3%A3o">Demonstração</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#%EF%B8%8F-autora">Autora</a> •
</p>

## 💻 Sobre o projeto

A Imersão React da Alura é para quem quer expandir o seu conhecimento em JavaScript ao desenvolver projetos de front-end utilizando o React como principal ferramenta. 

Durante a imersão, desenvolvemos um novo projeto com Next.js, aplicamos conceitos gerais em novos desafios, utilizamos componentes do React como JSX, useState e useEffect, e adquirimos maior autonomia como front-end, entendendo conceitos fundamentais, não apenas bibliotecas.

## ⚙️ Funcionalidades

<details>
  <summary>Aula 1</summary>
  
  Na primeira aula de React, começamos a desenvolver uma área de login no Aluracord (inspirado no Discord). Criamos desde o package.json até os arquivos bases do Next.js para iniciar nosso projeto, além de ter o CSS-in-JS com styled-jsx para cuidar da camada de estilo da nossa aplicação.
  
  Também foi possível customizar o Aluracord, escolhendo um tema da nossa preferência entre filmes, séries, esportes, desenhos etc. Nesse caso, o tema escolhido foi a série britânica Doctor Who, da BBC.
</details>

<details>
  <summary>Aula 2</summary>
  
  Na segunda aula, aprendemos a lidar com o state do React e como trabalhar com eventos como onClick e onSubmit. Na página de login, agora é possível escrever o nome do usuário do GitHub para entrar no chat. Também demos início a página de chat, ainda sem muitas personalizações.
  
  Como detalhes adicionais, o nome e foto de usuário são alterados automaticamente na área ao lado do formulário, onde o nome também conta com um link para o perfil real do GitHub.
</details>

<details>
  <summary>Aula 3</summary>
  
  Na terceira aula, criamos e estilizamos a estrutura do chat e fizemos ele funcionar inicialmente sem nenhum Back-End. Entendemos um pouco mais de como podemos trabalhar com state no React e criamos um campo que ao apertarmos o Enter no teclado, envia a mensagem para o chat.
  
  Como detalhe adicional, também foi criado um botão para a mensagem ser enviada clicando.
</details>

<details>
  <summary>Aula 4</summary>
  
  Na quarta aula, aprendemos a utilizar o <a href="https://app.supabase.io/">Supabase</a>, uma ferramenta <i>Back-end as a Service</i>, a fim de termos um banco de dados <i>real time</i> que guarda as mensagens do chat.
  
  Como detalhe adicional, ao clicar na foto da pessoa que enviou a mensagem no chat, é aberta uma janela com informações do seu usuário do GitHub, bem como um link para seu perfil no username.
</details>

<details>
  <summary>Aula 5</summary>
  
  Na quinta e última aula, fizemos uma pequena validação de username, implementamos um botão com figurinhas temáticas, e deixamos o chat o mais <i>real time</i> possível.
  
  Como detalhe adicional, foi adicionada uma tela de <i>loading</i> antes do chat renderizar e foram alteradas as imagens de fundo da tela inicial e chat.
</details>

## 🎨 Demonstração

O deploy da aplicação pode ser acessado na <a href="https://alura-doctor-who.vercel.app/">Vercel</a>.

  <p align="center">
  <img src="alura.gif" width="800px">
  </p>

## 🚀 Como executar o projeto

Devido ao uso do Supabase, este projeto possui apenas uma parte:
1. Frontend (pasta raíz do projeto)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 

Além disso, é bom ter um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/).

#### 🎲 Rodando a aplicação

``` bash
# Clone o repositório
$ git clone git@github.com:dandara-dias/alura-doctor-who.git

# Entre na pasta do repositório que você acabou de clonar
$ cd alura-doctor-who

# Instale as dependências
$ npm install

# Inicie a aplicação
$ npm run dev

# A aplicação iniciará na porta 3000 - acesse http://localhost:3000 
```

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website** ([React](https://reactjs.org/) + [JavaScript](https://www.javascript.com/))

-   **[Next.js](https://nextjs.org/)**
-   **[Styled JSX](https://github.com/vercel/styled-jsx)**
-   **[SkynexUI](https://skynexui.dev/)**

> Veja o arquivo [package.json](https://github.com/dandara-dias/alura-doctor-who/blob/master/package.json)

#### **Server** ([Supabase](https://supabase.com/))

#### **Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   Markdown:  **[Rocketseat](https://blog.rocketseat.com.br/como-fazer-um-bom-readme/)**
-   Paleta de cores: **[Coolors](https://coolors.co/)**
-   GIFs:  **[Giphy](https://giphy.com/explore/doctor-who)**

## 🦸‍♀️ Autora

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/85723209?v=4" width="100px;" alt="avatar-picture"/>
 <b>Dandara Dias</b> 🎀
 
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/dandara-dias/)](https://www.linkedin.com/in/dandara-dias/) 
<a href = "mailto:dandaradias.contato@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
