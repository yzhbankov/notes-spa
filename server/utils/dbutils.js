import mongoose from 'mongoose';

import '../models/Notes.js'

import config from '../../etc/config.json'

const Note = mongoose.model('Note');

export function setUpConection() {
    mongoose.connect('mongodb://' + config.db.host + ':' + config.db.port + '/' + config.db.name);
}

export function listNotes() {
    return Note.find();
}

export function createNote(data) {
    const note = Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createAt: new Date()
    });

    return note.save();
}

export function deleteNote(id) {
    return Note.findById(id).remove();
}