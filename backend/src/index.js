
/*
    Rota /Recurso
*/ 
/*
Metodos HTTP:

GET: Buscar uma informação do back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação do back-end
DELETE: Deletar uma informação do beck-end

*/ 

/*
Tipos de Parâmetros:

Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
Route Params: Parâmetros utilizados para identificar recursos
Request Body : Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
SQL: MySQL, SQLite, Oracle...
NoSQL: MongoDB..
*/
/*
    Driver: SELECT * FROM users
    Query Builder:  table('users').select('*').where()
*/

const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);