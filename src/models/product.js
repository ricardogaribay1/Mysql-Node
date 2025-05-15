const { DataTypes, Model } = require('sequelize'); // Importa los tipos de datos y la clase Model de Sequelize
const { sequelize } = require('../bd/database');   // Importa la conexión a la base de datos desde el archivo database.js

// Define la clase Product que extiende de Model (modelo de Sequelize)
class Product extends Model {}

// Inicializa el modelo Product con sus campos y configuraciones
Product.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED, // Campo de tipo entero sin signo
      autoIncrement: true,              // Se incrementa automáticamente (1, 2, 3, ...)
      primaryKey: true,                 // Es la clave primaria de la tabla
    },
    name: {
      type: DataTypes.STRING(100),      // Cadena de texto de hasta 100 caracteres
      allowNull: false,                 // Campo obligatorio (no puede estar vacío)
    },
    description: {
      type: DataTypes.STRING(255),      // Cadena de texto de hasta 255 caracteres
      allowNull: true,                  // Campo opcional (puede estar vacío)
    },
    price: {
      type: DataTypes.FLOAT,            // Campo numérico con decimales (para precios)
      allowNull: false,                 // Campo obligatorio
    },
    stock: {
      type: DataTypes.INTEGER,          // Campo numérico entero (cantidad de stock)
      allowNull: false,                 // Campo obligatorio
    },
    category: {
      type: DataTypes.STRING(100),      // Cadena de texto de hasta 100 caracteres
      allowNull: true,                  // Campo opcional
    },
  },
  {
    sequelize,              // Usa la instancia de conexión importada
    tableName: 'product',   // Nombre de la tabla en la base de datos
  }
);

// Exporta el modelo Product para usarlo en otras partes del proyecto
module.exports = { Product };

