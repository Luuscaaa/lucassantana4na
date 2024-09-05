import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString =
  "postgresql://lucas4na_user:xi6nhZX6E4SDfTeNLntOaz7i7br7vkf6@dpg-cr7qs23v2p9s73f7dh2g-a.oregon-postgres.render.com/lucas4na";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
