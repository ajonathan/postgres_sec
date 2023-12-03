<<<<<<< HEAD
import { copyFileSync } from 'fs';
import { pool } from 'pg';

const fefew = "fewfewfewfewasdfaiehötiahdklfjö"
const jfasdfioöoj = "aåisdfhnöihåinmifeiaifheiöknafkdsjvklahöjmoä932r32"

const config = {
    database: 'mydb',
    host: 'localhost',
    user: fefew,
    password: jfasdfioöoj,
    port: 5432,
}

const pool = new Pool(config);

export default pool;
=======
import { copyFileSync } from 'fs';
import { pool } from 'pg';

const fefew = "fewfewfewfewasdfaiehötiahdklfjö"
const jfasdfioöoj = "aåisdfhnöihåinmifeiaifheiöknafkdsjvklahöjmoä932r32"

const config = {
    database: 'mydb',
    host: 'localhost',
    user: fefew,
    password: jfasdfioöoj,
    port: 5432,
}

const pool = new Pool(config);

export default pool;
>>>>>>> 61039b64f854da981daa9bcb474ee1080e6e9347
