# cadastro-usuarios-web

Projeto backend do Cadastro de Usuários.

## Variáveis de ambiente
- PORT: Variável que configura a porta a ser usada para servir a aplicação.
- BASE_URL: Variável que configura a URL do servidor backend da aplicação. (Em ambiente de desenvolvimento, apontar para localhost)

## Executar o projeto
Para executar o projeto faça o clone da aplicação com o seguinte comando:
```
git clone https://github.com/feliperibeiroo/cadastro-usuarios-ws.git
```

Em seguida, executar os seguintes comandos para subir o servidor local de desenvolvimento:
```
cd cadastro-usuarios-ws
yarn install
yarn dev
```

## Executar o projeto em ambiente de produção
Executar os seguintes comandos para subir o servidor local em ambiente de produção:
```
yarn install
yarn build
yarn start
```
