const con = require('../../config/dbconfig');

const productsDao = {
    table: 'Products',

    findAll: function (req, res) {
        con.execute(
            `SELECT product_id, name, image_url, price, description, category
             FROM ${this.table}`,
            (error, rows) => {
                if (!error) {
                    res.json(rows);
                } else {
                    console.log('DAO ERROR: ', error);
                    res.status(500).send(error.message);
                }
            }
        );
    }
};

module.exports = productsDao; 
