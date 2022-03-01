# Api de Vendas em NodeJS && TypeScript
> Esta é uma api para estudo, que simula um back end completo para um setor de vendas.
> Ainda não subi, mas vou fazer deploy na hora certa...

## Para saber
- Instale a extensão REST.client do VsCode ou outro similar como ThunderClient/Postman/Insomnia
- Toda documentação REST está no arquivo `requests.http`


## Informações gerais
- Projeto desenvolvido em março de 2022 com o intuito de aprender e desenvolver conhecimento em NodeJS com TypeScript.

## Tecnologias
- NodeJS
- Typescript
- TypeORM
- Cors
- Express
- EsLint
- Prettier

## O que essa API faz?
- CRUD completo de um Produto

## Setup
- `yarn install`
- change `ormconfig.json`
- `docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`
- `yarn typeorm migration:run`
- `yarn dev`

## Status
Em andamento
