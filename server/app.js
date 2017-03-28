import express from 'express';
import bodyParser from 'body-parser';

import { serverPort } from '../etc/config.json'

import * as db from './utils/dbutils';

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

app.get('/notes', (req, res) => {
    db.listNotes().then(data => {
        res.send(data);
    })
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => {
        res.send(data);
    })
});

app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => {
        res.send(data);
    })
});

const server = app.listen(serverPort, () => {
    console.log('Server run in port 8080')
});