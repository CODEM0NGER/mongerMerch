const express = require('express');
const router = express.Router();

const { shirtsDao: dao } = require('../../daos/dao');

router.get('/', (req, res) => {
    dao.findAll(req, res, dao.table);
});

router.get('/:id', (req, res) => {
    dao.findById(req, res, dao.table);
});

router.post('/', (req, res) => {
    dao.create(req, res, dao.table);
});

router.patch('/:id', (req, res) => {
    dao.update(req, res, dao.table);
});

router.delete('/:id', (req, res) => {
    dao.delete(req, res, dao.table);
});

module.exports = router;
