import { Sequelize } from 'sequelize';


const db = new Sequelize('node', 'root', 'example', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

export default db;
