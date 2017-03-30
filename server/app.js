import express from 'express';
import bodyParser from 'body-parser';


import { serverPort } from '../etc/config.json'
import * as db from './utils/dbutils';
import router from './router/router'

db.setUpConection();

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    return next();
});


app.use('/', router);

const server = app.listen(serverPort, () => {
    console.log('Server run in port 8080')
});