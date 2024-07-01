const express = require('express');
const router = express.Router();

const { mugsDao: dao } = require('../../daos/dao');

// get all mugs, 
router.get('/', (req, res) => {
    dao.findAll(req, res, dao.table);
});
// get mug by id
router.get('/:id', (req, res) => {
    dao.findById(req, res, dao.table);
});
// create a new mug
router.post('/', (req, res) => {
    dao.create(req, res, dao.table);
});
// update a mug
router.patch('/:id', (req, res) => {
    dao.update(req, res, dao.table);
});
// delete a mug
router.delete('/:id', (req, res) => {
    dao.delete(req, res, dao.table);
});

module.exports = router; 


// not sure all router. are needed here. Must decide by product? In this case there is only one mug, do we router.getcount? //