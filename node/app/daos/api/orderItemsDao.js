const con = require('../../config/dbconfig'); //import database config//

const orderItemsDao = {
    table: 'OrderItems',

    //Method to find all ordered items//
    findAllByOrderId: function (req, res) {
        const orderId = req.params.orderId;
        con.execute(
            `SELECT * FROM ${this.table} WHERE order_id = ?`,
            [orderId],
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
module.exports = orderItemsDao;
