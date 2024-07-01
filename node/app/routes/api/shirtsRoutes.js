const express = require('express');
const router = express.Router();

const { shirtsDao: dao } = require('../../daos/dao');
// get all shirts
router.get('/', (req, res) => {
    dao.findAll(req, res, dao.table);
});
// get shirts by id
router.get('/:id', (req, res) => {
    dao.findById(req, res, dao.table);
});
// create shirts
router.post('/', (req, res) => {
    dao.create(req, res, dao.table);
});
// update shirts
router.patch('/:id', (req, res) => {
    dao.update(req, res, dao.table);
});
// delete shirts
router.delete('/:id', (req, res) => {
    dao.delete(req, res, dao.table);
});

module.exports = router;
