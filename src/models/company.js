const { DataTypes, Model } = require('sequelize'); // Importa los tipos de datos y la clase Model desde Sequelize
const { sequelize } = require('../bd/database'); // Importa la instancia de conexión a la base de datos

// Define la clase Company que extiende de Model (modelo de Sequelize)
class Company extends Model {}

// Inicializa el modelo Company con sus campos y configuración
Company.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED, // Define que será un número entero sin signo
      autoIncrement: true,              // Se incrementará automáticamente (1, 2, 3, ...)
      primaryKey: true,                 // Es la clave primaria de la tabla
    },
    name: {
      type: DataTypes.STRING(100),      // Cadena de texto con un máximo de 100 caracteres
      allowNull: false,                 // No se permite que este campo esté vacío
    },
    email: {
      type: DataTypes.STRING(100),      // Cadena de texto con un máximo de 100 caracteres
      allowNull: false,                 // No se permite que este campo esté vacío
    },
  },
  {
    sequelize,              // Le indica a Sequelize qué conexión usar (nuestra instancia importada)
    tableName: 'company',   // Nombre de la tabla que se creará en la base de datos
  }
);

// Exporta el modelo Company para poder usarlo en otras partes del proyecto
module.exports = { Company };
