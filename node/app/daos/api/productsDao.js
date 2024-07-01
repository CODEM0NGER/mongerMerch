const con = require('../../config/dbconfig'); //import database config//

const productsDao = {
    table: 'Products',
    //method to find all products//
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
    },
   /*findById: (req, res, table) => {
        const id = req.params.id // Extract the ID from request parameters

        con.execute(
            `SELECT * FROM ${table} WHERE ${table}_id = ${id};`, // SQL query to select a row by ID
            (error, rows) => {
                if (!error) {
                    // If exactly one row is returned, respond with that single row
                    if (rows.length == 1) {
                        res.json(...rows)
                    } else {
                        // Otherwise, respond with all the rows
                        res.json(rows)
                    }
                } else {
                    // Log any errors
                    console.log('DAO ERROR: ', error)
                }
            }
        )
    }*/
};
//Execute the SQL query to find all cart items by ID and if there is no error ior if one row is returned respond with that single row otherwise respond with all rows//
module.exports = productsDao; 
