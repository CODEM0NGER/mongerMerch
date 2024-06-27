const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const router = require('./app/routes/router');
const port = process.env.PORT || 9000;

// Security for your server
server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    directives: {
        "img-src": ["'self'", "https: data"],
        "script-src": ["'self'", "cdn.jsdelivr.net"]
    }
}));

server.use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

// localhost:9000 => router.js 
server.use('/', router);

server.listen(port, () => console.log(`This power? Its over ${port} .....`));
