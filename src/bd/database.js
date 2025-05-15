const { Sequelize } = require('sequelize'); // Importa la clase Sequelize del paquete 'sequelize' para manejar la base de datos
require('dotenv').config(); // Carga las variables de entorno definidas en el archivo .env

// Crea una nueva instancia de Sequelize utilizando las variables de entorno
const sequelize = new Sequelize(
  process.env.databasename, // Nombre de la base de datos (desde .env)
  process.env.userdb,       // Usuario de la base de datos (desde .env)
  process.env.password,     // Contraseña de la base de datos (desde .env)
  {
    host: process.env.host, // Dirección del host (generalmente 'localhost')
    port: process.env.port, // Puerto en el que corre MySQL (por defecto 3306)
    dialect: 'mysql',       // Define el dialecto de base de datos (MySQL en este caso)
  }
);

// Exporta la instancia de sequelize para usarla en otras partes del proyecto
module.exports = { sequelize };
