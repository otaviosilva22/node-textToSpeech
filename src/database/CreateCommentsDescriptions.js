//create table comments if does not exists
(async () => {
    const database = require('../models/Comments');
 
    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();