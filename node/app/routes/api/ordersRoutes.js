const express = require('express');
const router = express.Router();

const { ordersDao: dao } = require('../../daos/dao');
// get all orders
router.get('/', (req, res) => {
    dao.findAll(req, res, dao.table);
});
// find orders by id
router.get('/:id', (req, res) => {
    dao.findById(req, res, dao.table);
});
// create orders
router.post('/', (req, res) => {
    dao.create(req, res, dao.table);
});
//update orders 
router.patch('/:id', (req, res) => {
    dao.update(req, res, dao.table);
});
// delete orders
router.delete('/:id', (req, res) => {
    dao.delete(req, res, dao.table);
});

module.exports = router;
