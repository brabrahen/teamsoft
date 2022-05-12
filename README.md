
## Descrição

CRUD feito em Nest e Typescript com MySQL e bancos relacionados utilizando Prisma como ORM

## Instalação

```bash
$ npm install
```

## Iniciando o código

```bash
# development
$ npm run start

```

--------------------

## O esquema de pastas
- O esquema foi estruturado de maniera padrão seperando entre Endereço e Usuário/Proprietario

<div>
  <img alt="src" src="https://i.imgur.com/wRVCNC2.png">
</div>

####
#### DTO's e Prisma
- Os DTO's e o Prisma Schema estão ali para padronizar e tratar a entrada de dados. O tratamento de dados nos DTO'sestá sendo feito com *Class validator*

<div>
  <img alt="user-dto" src="https://i.imgur.com/uBfm8Wj.png">
</div>
###
<div>
  <img alt="prisma-schema" src="https://i.imgur.com/Fi7EVqs.png">
</div>

#### Services e Controllers
- Sevice: "diz" como tudo vai funcionar nas rotas de criação, deleção, atualização e leitura

<div>
  <img alt="service" src="https://i.imgur.com/QAp6IMS.png">
</div>
###

- Controller: recebe os parâmetros do Service e nomeia as rotas

<div>
  <img alt="controller" src="https://i.imgur.com/4gwefL9.png">
</div>

---------------------------------
### Testes
- Realizei o teste de rotas através do Insomnia

#### Post

<div>
  <img alt="post" src="https://i.imgur.com/Q0lFjNK.png">
<div>

#### Get

<div>
  <img alt="get" src="https://i.imgur.com/ouLGc5Z.png">
</div>

#### Update

<div>
  <img alt="update" src="https://i.imgur.com/yvEVlYn.png">
</div>
####
<div>
  <img alt="update-get" src="https://i.imgur.com/rfJcFtC.png">
</div>

#### Delete

<div>
  <img alt="delete" src="https://i.imgur.com/i1hkhQn.png">
</div>
####
<div>
  <img alt="delete-get" src="https://i.imgur.com/KVVNebl.png">
</div>

##

--------------
### 
Espero que tenha superado as expectativas! Agradeço desde já a oportunidade!!
_________________________________________________🐱‍👤🐱‍👤