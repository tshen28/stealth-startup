const facts = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

facts.get('/', (req, res) => {
    readFromFile('./db/facts.json').then((data) => res.json(JSON.parse(data)));
});

module.exports = facts;