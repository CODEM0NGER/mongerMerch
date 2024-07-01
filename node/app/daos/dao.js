const daoCommon = require('./common/daoCommon'); //import the common DAO methods

// Combine common DAO methods with specific DAO methods for each DAO
const cartItemsDao = {
    ...daoCommon, ...require('./api/cartItemsDao') //spread operator to include common methods and to include specific methods 
};

const hatsDao = {
    ...daoCommon, ...require('./api/hatsDao')
};

const mugsDao = {
    ...daoCommon, ...require('./api/mugsDao')
};

const orderItemsDao = {
    ...daoCommon, ...require('./api/orderItemsDao')
};

const ordersDao = {
    ...daoCommon, ...require('./api/ordersDao')
};

const pantsDao = {
    ...daoCommon, ...require('./api/pantsDao')
};

const productsDao = {
    ...daoCommon, ...require('./api/productsDao')
};

const shirtsDao = {
    ...daoCommon, ...require('./api/shirtsDao')
};

const stickersDao = {
    ...daoCommon, ...require('./api/stickersDao')
};

const usersDao = {
    ...daoCommon, ...require('./api/usersDao')
};

module.exports = {
    cartItemsDao,
    hatsDao,
    mugsDao,
    orderItemsDao,
    ordersDao,
    pantsDao,
    productsDao,
    shirtsDao,
    stickersDao,
    usersDao
};
//export of all DAO objects for use in the app//