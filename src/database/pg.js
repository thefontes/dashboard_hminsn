const { Pool } = require('pg');

// Configurações de conexão com o banco de dados
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'indicadoresmaternos',
    password: 'databaseuserman',
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
