const con = require('../../config/dbconfig'); //import database config//

const stickersDao = {
    table: 'Stickers',
    //method to find all stickers//
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
//Execute the SQL query to find all cart items by ID and if there is no error ior if one row is returned respond with that single row otherwise respond with all rows//
module.exports = stickersDao;
