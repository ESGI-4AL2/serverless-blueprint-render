const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  process.key.INTERNAL_DB_URL, // TODO: add database url
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
