// Import the database configuration/connection
const con = require('../../config/dbconfig')

// Define the common DAO object for various table operations
const daoCommon = {

    // Method to find all rows in a given table
    findAll: (req, res, table) => {
        con.execute(
            `SELECT * from ${table};`, // SQL query to select all rows
            (error, rows) => {
                if (!error) {
                    // If exactly one row is returned, respond with that single row
                    if (rows.length === 1) {
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
    },

    // Method to find a row by ID in a given table
    findById: (req, res, table) => {
        const id = req.params.id // Extract the ID from request parameters

        con.execute(
            `SELECT * FROM ${table} WHERE ${table}s_id = ${id};`, // SQL query to select a row by ID
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
    },

    // Method to count all rows in a given table
    countAll: (req, res, table) => {
        con.execute(
            `SELECT COUNT(*) FROM ${table};`, // SQL query to count all rows
            (error, rows) => {
                if (!error) {
                    // If exactly one row is returned, respond with that single row
                    if (rows.length === 1) {
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
    },

    // Method to create a new row in a given table
    create: (req, res, table) => {
        // Check if the request body is empty
        if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else {
            // Extract fields and values from the request body
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `INSERT INTO ${table}
                    SET ${fields.join(' = ?, ')} = ?;`, // SQL query to insert a new row
                values, // Values to insert
                (error, dbres) => {
                    if (!error) {
                        // Respond with the ID of the newly inserted row
                        res.send(`Last id: ${dbres.insertId}`)
                    } else {
                        // Log any errors and respond with an error message
                        console.log('DAO ERROR: ', error)
                        res.send('Error creating record')
                    }
                }
            )
        }
    },

    // Method to update an existing row in a given table
    update: (req, res, table) => {
        // Check if the ID parameter is a number
        if (isNaN(req.params.id)) {
            res.json({
                "error": true,
                "message": "Id must be a number"
            })
        } else if (Object.keys(req.body).length === 0) {
            // Check if the request body is empty
            res.json({
                "error": true,
                "message": "No fields to update"
            })
        } else {
            // Extract fields and values from the request body
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `UPDATE ${table}
                    SET ${fields.join(' = ?, ')} = ?
                    WHERE ${table}_id = ?;`, // SQL query to update a row
                [...values, req.params.id], // Values to update and the ID of the row to update
                (error, dbres) => {
                    if (!error) {
                        // Respond with the number of rows changed
                        res.send(`Changed ${dbres.changedRows} row(s)`)
                    } else {
                        // Log any errors and respond with an error message
                        console.log('DAO ERROR: ', error)
                        res.send('Error creating record')
                    }
                }
            )
        }
    }
}

// Export the common DAO object
module.exports = daoCommon
