const con = require('../../config/dbconfig');

const stickersDao = {
    table: 'Stickers',

    findAll: function (req, res) {
        con.execute(
            `SELECT * FROM ${this.table}`,
            (error, rows) => {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows);
                    } else {
                        res.json(rows);
                    }
                } else {
                    console.log('DAO ERROR: ', error);
                    res.status(500).send(error.message);
                }
            }
        );
    }
};

module.exports = stickersDao;
