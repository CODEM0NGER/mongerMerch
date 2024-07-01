const con = require('../../config/dbconfig'); //import data base config//
//define DAO for for cartItems//
const hatsDao = {
    table: 'Hats',


    //Method to find all hats//
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
module.exports = hatsDao;
