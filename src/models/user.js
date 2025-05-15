const { DataTypes, Model } = require('sequelize'); // Importa los tipos de datos y la clase Model desde Sequelize
const { sequelize } = require('../bd/database');   // Importa la conexión a la base de datos desde el archivo database.js

// Define la clase User que extiende de Model (modelo de Sequelize)
class User extends Model {}

// Inicializa el modelo User con sus campos y configuración
User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED, // Campo de tipo entero sin signo
      autoIncrement: true,              // Valor se incrementa automáticamente con cada nuevo registro
      primaryKey: true,                 // Define este campo como la clave primaria de la tabla
    },
    name: {
      type: DataTypes.STRING(100),      // Cadena de texto de hasta 100 caracteres
      allowNull: true,                  // Campo opcional, puede estar vacío
    },
    email: {
      type: DataTypes.STRING(100),      // Cadena de texto de hasta 100 caracteres
      allowNull: false,                 // Campo obligatorio, no puede estar vacío
      unique: true,                     // No puede repetirse entre registros (clave única)
    },
    password: {
      type: DataTypes.STRING(100),      // Cadena de texto de hasta 100 caracteres
      allowNull: false,                 // Campo obligatorio
    },
  },
  {
    sequelize,              // Usa la instancia de conexión importada
    tableName: 'user',      // Nombre de la tabla en la base de datos
  }
);

// Exporta el modelo User para poder utilizarlo en otras partes del proyecto
module.exports = { User };
