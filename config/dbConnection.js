var mysql = require('mysql');

var connMySQL = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'jiofre',
        database: 'portal_noticias'
    });
}

module.exports = function(){
    console.log('O auto load do consign carregou o modulo de conexão com o db')
    return connMySQL;
}
