const con = require('../../config/dbconfig');

const orderItemsDao = {
    table: 'OrderItems',

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

module.exports = orderItemsDao;
