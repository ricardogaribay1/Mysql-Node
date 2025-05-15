require('dotenv').config(); // Carga las variables de entorno definidas en el archivo .env

const express = require('express'); // Importa el framework Express para crear el servidor HTTP

const { sequelize } = require('./bd/database'); // Importa la conexión Sequelize configurada en bd/database.js

const { User } = require('./models/user'); // Importa el modelo User
const { Company } = require('./models/company'); // Importa el modelo Company
const { Product } = require('./models/product'); // Importa el modelo Product

// Función autoejecutable asíncrona para inicializar la base de datos
(async () => {
  try {
    await sequelize.authenticate(); // Verifica que la conexión a la base de datos funcione correctamente
    console.log("[+] Conectado a la base de datos SQL"); // Mensaje en consola si la conexión fue exitosa

    await sequelize.sync({ force: false }); // Sincroniza los modelos con la base de datos (crea tablas si no existen)

    // Crear registros de prueba en la base de datos
    const newUser = await User.create({
      name: 'Juanitani',
      email: 'juan42135@example.com',
      password: "123456"
    }); // Crea un nuevo usuario

    const newCompany = await Company.create({
      name: 'Adryosyst',
      email: 'adryosyst@example.com'
    }); // Crea una nueva compañía

    const newProduct = await Product.create({
      name: 'Laptopsy',
      description: 'Laptopsy gamer',
      price: 1501,
      stock: 11,
      category: 'Electronico'
    }); // Crea un nuevo producto

  } catch (error) {
    console.error(error); // Imprime el error en consola si algo falla
    throw new Error(`Error al iniciar la base de datos: ${error}`); // Lanza un error para detener el proceso
  }
})();

const PORT = 3003; // Define el puerto en el que se ejecutará el servidor

const app = express(); // Crea una instancia de aplicación Express

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Mensaje en consola cuando el servidor esté corriendo
});
