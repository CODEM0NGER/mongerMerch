const express = require('express');
const router = express.Router();

const { stickersDao: dao } = require('../../daos/dao');
// get all stickers
router.get('/', (req, res) => {
    dao.findAll(req, res, dao.table);
});
// get all stickers by id
router.get('/:id', (req, res) => {
    dao.findById(req, res, dao.table);
});
// create stickers
router.post('/', (req, res) => {
    dao.create(req, res, dao.table);
});
// update stickers
router.patch('/:id', (req, res) => {
    dao.update(req, res, dao.table);
});
// delete stickers
router.delete('/:id', (req, res) => {
    dao.delete(req, res, dao.table);
});

module.exports = router;
