const express = require('express');
const router = express.Router();

const { hatsDao: dao} = require('../../daos/dao');

// Get all hats
router.get('/', (req, res) => {
    dao.findAll(req, res);
});

// Get hat count
router.get('/count', (req, res) => {
    dao.countAll(req, res);
});

// Get sorted hats
router.get('/sort', (req, res) => {
    dao.sort(req, res);
});

// Get a hat by ID
router.get('/:id', (req, res) => {
    dao.findById(req, res);
});

// Create a new hat
router.post('/create', (req, res) => {
    dao.create(req, res);
});

// Update a hat
router.patch('/update', (req, res) => {
    dao.update(req, res);
});

module.exports = router; 
