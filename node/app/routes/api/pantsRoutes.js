const express = require('express');
const router = express.Router();

const { pantsDao: dao } = require('../../daos/dao');
// find all pants
router.get('/', (req, res) => {
    dao.findAll(req, res, dao.table);
});
// get pants by id
router.get('/:id', (req, res) => {
    dao.findById(req, res, dao.table);
});
// create pants
router.post('/', (req, res) => {
    dao.create(req, res, dao.table);
});
// update pants
router.patch('/:id', (req, res) => {
    dao.update(req, res, dao.table);
});
// delete pants
router.delete('/:id', (req, res) => {
    dao.delete(req, res, dao.table);
});

module.exports = router;
