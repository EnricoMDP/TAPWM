var sql = require ('mssql');
 
var connSqlServer = function(){
   const sqlConfig = {
       user: 'BD2412007',
       password: 'rico090605',
       database:'BD',
       server: 'APOLO',
       options:{
           encrypt: false,
           trustServerCertificate: true
       }
   }       
   return sql.connect(sqlConfig);
}

module.exports = function(){
    console.log('O autoload carregou o módulo de conexão');
    return connSqlServer;
}