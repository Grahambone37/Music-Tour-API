require('dotenv').config();

module.exports = {
  "development": {
    "username": "postgres",
    "password": process.env.password,
    "database": "tours",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": process.env.password,
    "database": "tours_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": process.env.password,
    "database": "tours_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
