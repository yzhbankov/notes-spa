import express from 'express'
import * as db from '../utils/dbutils';
var router = express.Router();

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next();
});

router.get('/notes', (req, res) => {
    db.listNotes().then(data => {
        res.send(data);
    })
});

router.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => {
        res.send(data);
    })
});

router.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => {
        res.send(data);
    })
});

export default router;