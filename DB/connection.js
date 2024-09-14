import { Sequelize } from "sequelize";

export const SequelizeInstance = new Sequelize('bno5xam5yxdgeyh2erqn', 'u5pzgauifurqe6vt', 'q89x61xNg2hx9n3T2C8W', {
    host: 'bno5xam5yxdgeyh2erqn-mysql.services.clever-cloud.com',
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

 
