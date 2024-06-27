const express = require('express')
const router = express.Router()
const port = process.env.PORT || 9000

const tables = [ 
    'CartItems',
    'Hats',
    'Mugs', 
    'OrderItems', 
    'Orders', 
    'Pants',
    'Products',
    'Shirts',
    'Stickers',
    'Users'
];

// Root route that provides links to all API endpoints
router.get('/', (req, res) => {
    res.json({
        'All Cart Items': `http://localhost:${port}/api/CartItems`,
        'All Hats': `http://localhost:${port}/api/Hats`,
        'All Mugs': `http://localhost:${port}/api/Mugs`,
        'All Order Items': `http://localhost:${port}/api/OrderItems`,
        'All Orders': `http://localhost:${port}/api/Orders`,
        'All Pants': `http://localhost:${port}/api/Pants`,
        'All Products': `http://localhost:${port}/api/Products`,
        'All Shirts': `http://localhost:${port}/api/Shirts`,
        'All Stickers': `http://localhost:${port}/api/Stickers`,
        'All Users': `http://localhost:${port}/api/Users`
    });
});

// Dynamically create routes for each table
tables.forEach(table => {
    router.use(`/api/${table}`, require(`./api/${table}Routes`))
});


// 404 Error handler for undefined routes
router.get('*', (req, res) => {
    if (req.url == '/favicon.ico') {
        res.end();
    } else {
        res.send('<h1>404 Error! This is not the Page or drones you are looking for.</h1>')
    }
});

module.exports = router

