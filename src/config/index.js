require('dotenv').config({
  path: require('path').resolve(process.cwd(), process.env.NODE_ENV + '.env')
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'develpoment',
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 8080,
  DB_URI: (database) => `mongodb+srv://gab121:${process.env.DB_PASSWORD}@appprueba.jibhv.mongodb.net/${database}?retryWrites=true&w=majority`,
  // MEM - FILE - MONGO
  TIPO_PERSISTENCIA: process.env.TIPO_PERSISTENCIA || 'MEM'
}