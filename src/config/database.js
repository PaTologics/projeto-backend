require('dotenv').config();

module.exports = {
  dialect: process.env.DB_DIALECT || 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 6543, // Adicionamos a porta aqui!
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  
  // ESSA PARTE É OBRIGATÓRIA PARA SUPABASE
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Permite a conexão mesmo com certificados autoassinados
    }
  },

  logging: false, 
  
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};