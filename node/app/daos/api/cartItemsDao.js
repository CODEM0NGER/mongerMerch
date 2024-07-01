const con = require('../../config/dbconfig'); //Import database config//

//define DAO for for cartItems//
const cartItemsDao = {
    table: 'CartItems',

    //Method to find all cart items and extract by user id
    findAllByUserId: function (req, res) {
        const userId = req.params.userId;
        con.execute(
            `SELECT * FROM ${this.table} WHERE user_id = ?`,
            [userId],
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
module.exports = cartItemsDao;

