'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const leaderRounter = express.Router();

leaderRounter.use(bodyParser.json());

leaderRounter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all the leaders to you!');
})
.post((req, res, next) => {
    res.end(`Will add the leader ${req.body.name} with details ${req.body.message}`);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    res.end('Deleting all leaders');
});

leaderRounter.route('/:leaderId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end(`Will send details of the leader ${req.params.leaderId} to you!`);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /leaders/${req.params.leaderId}`);
})
.put((req, res, next) => {
    res.write(`Updating the leader ${req.params.leaderId}\n`);
    res.end(`Will update the leader ${req.body.name} with details ${req.body.message}`);
})
.delete((req, res, next) => {
    res.end(`Deleting leaders: ${req.params.leaderId}`);
});

module.exports = leaderRounter;
