const express = require('express');
const router = express.Router();

const { productsDao: dao } = require('../../daos/dao');

// Get all products
router.get('/', (req, res) => {
    dao.findAll(req, res);
});

// Get product count
router.get('/count', (req, res) => {
    dao.countAll(req, res);
});

// Get sorted products
router.get('/sort', (req, res) => {
    dao.sort(req, res);
});

// Get a product by ID
router.get('/:id', (req, res) => {
    dao.findById(req, res);
});

// Create a new product
router.post('/create', (req, res) => {
    dao.create(req, res);
});

// Update a product
router.patch('/update', (req, res) => {
    dao.update(req, res);
});

module.exports = router;
