const express = require('express');
const router = express.Router();

const { usersDao: dao } = require('../../daos/dao');
// get all users
router.get('/', (req, res) => {
    dao.findAll(req, res, dao.table);
});
// find all users by id
router.get('/:id', (req, res) => {
    dao.findById(req, res, dao.table);
});
// create new users 
router.post('/', (req, res) => {
    dao.create(req, res, dao.table);
});
// update new users
router.patch('/:id', (req, res) => {
    dao.update(req, res, dao.table);
});
// delete users
router.delete('/:id', (req, res) => {
    dao.delete(req, res, dao.table);
});

module.exports = router;
