const express = require('express');
const router = express.Router();

const { cartItemsDao: dao } = require('../../daos/dao');

// Route to get all cart items
router.get('/', (req, res) => {
    dao.findAll(req, res, dao.table);
});

// Route to get the count of all cart items
router.get('/count', (req, res) => {
    dao.countAll(req, res, dao.table);
});

// Route to get all cart items sorted
router.get('/sort', (req, res) => {
    dao.sort(req, res, dao.table);
});

// Route to get a cart item by ID
router.get('/:id', (req, res) => {
    dao.findById(req, res, dao.table);
});

// Route to create a new cart item
router.post('/create', (req, res) => {
    dao.create(req, res, dao.table);
});

// Route to update a cart item
router.patch('/update', (req, res) => {
    dao.update(req, res, dao.table);
});

module.exports = router;
