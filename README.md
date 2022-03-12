# Delc

&nbsp;

[Video da apresentação do aplicativo](https://share.vidyard.com/watch/y2gf7M1UF4h1wvb5H5Lhf1?)

# Front-End

Deploy: [Deploy da delc no Vercel ](https://delc.vercel.app/)

## Utilizando o Front-end da aplicação

&nbsp;

## Instale as dependências do projetos com:

```
yarn install
```

## Inicie o projeto com:

```
yarn serve
```

&nbsp;

# Back-End

## Utilizando o Back-end da aplicação

Deploy: [Deploy da api-delc no Heroku ](https://delc.herokuapp.com/)

Acesse [Repositório api-delc](https://github.com/laudemirjunior/api-delc)

&nbsp;

## Instale as dependências do projetos com:

```
yarn install
```

## Inicie o projeto com:

```
yarn start
```

### ou em modo de desenvolvimento com:

```
yarn dev
```

&nbsp;

# Iniciando os testes com cypress em sua maquina:

## Insira o comando abaixo:

```
yarn cypress:open
```

Caso surja algum problema na instalação, instale em sua maquina:

### Ubuntu/Debian

```
apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

ou

### CentOS

```
yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib

```

ou acesse: [Documentação do cypress](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)

Caso esteja utilizando WSl e surja algum problema acesse: [Using Graphical User Interfaces like Cypress' in WSL2](https://nickymeuleman.netlify.app/blog/gui-on-wsl2-cypress)

### E incie novamante com:

```
yarn cypress:open
```

Para acesso a documentação da api acesse [Repositório api-delc](https://github.com/laudemirjunior/api-delc)

&nbsp;

## Um adendo, para rodar este projeto corretamente em sua maquina, é somente necessário a versão Front-end rodando, caso queira utilizar o Back-end em sua maquina, é necessário alterar no arquivo services.js de "https://delc.herokuapp.com" para "http://localhost:3000/".
