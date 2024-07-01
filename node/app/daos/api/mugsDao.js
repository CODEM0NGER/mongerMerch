const con = require('../../config/dbconfig');

const mugsDao = {
    table: 'Mugs',

    //method to find all mugs//
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

module.exports = mugsDao;
