# cadastro-usuarios-web

Projeto backend do Cadastro de Usuários.

## Variáveis de ambiente
- PORT: Variável que configura a porta a ser usada para servir a aplicação.
- SECRET: Chave a ser utilizada pelo algorimo SHA-256 para criptografia do token JWT.
- NODE_ENV: Variável que define o ambiente de execução da aplicação. Assume os valores <b>development</b> e <b>production</b>.
- POSTGRES_URL: Variável a ser usada apenas em ambiente de desenvolvimento para definição do endereço de acesso do branco de dados Postgres local.
- POSTGRES_PASSWORD: Variável a ser usada apenas em ambiente de desenvolvimento para definição da senha de acesso do branco de dados Postgres local.

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
