import { Sequelize } from "sequelize";

export const SequelizeInstance = new Sequelize('facebook_c42', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

const db_connection = async()=>{
try {
    await SequelizeInstance.sync({ alter: false, force: false});
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}; 

export default db_connection

 
