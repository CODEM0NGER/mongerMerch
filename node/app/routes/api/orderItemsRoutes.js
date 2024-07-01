const express = require('express');
const router = express.Router();

const { orderItemsDao: dao } = require('../../daos/dao');
// get all ordered items
router.get('/', (req, res) => {
    dao.findAll(req, res, dao.table);
});
// find ordered items by id
router.get('/:id', (req, res) => {
    dao.findById(req, res, dao.table);
});
// create ordered items?
router.post('/', (req, res) => {
    dao.create(req, res, dao.table);
});
// update ordered items
router.patch('/:id', (req, res) => {
    dao.update(req, res, dao.table);
});
// delete ordered items
router.delete('/:id', (req, res) => {
    dao.delete(req, res, dao.table);
});

module.exports = router; 
