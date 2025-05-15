require('dotenv').config(); // Cargar variables de entorno
const express = require('express');
const { sequelize } = require('./bd/database');
const { User } = require('./models/user');
const { Company } = require('./models/company');
const { Product } = require('./models/product');

(async () => {
  try {
    await sequelize.authenticate();
    console.log("[+] Conectado a la base de datos SQL");

    await sequelize.sync({ force: false });

    // Crear datos de prueba
    const newUser = await User.create({ name: 'Juanitani', email: 'juan42135@example.com', password: "123456" });
    const newCompany = await Company.create({ name: 'Adryosyst', email: 'adryosyst@example.com' });
    const newProduct = await Product.create({ name: 'Laptopsy', description: 'Laptopsy gamer', price: 1501, stock: 11, category: 'Electronico' });

  } catch (error) {
    console.error(error);
    throw new Error(`Error al iniciar la base de datos: ${error}`);
  }
})();

const PORT = 3003;
const app = express();

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
