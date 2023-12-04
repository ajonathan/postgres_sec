import { pool } from 'pg';

const fefew = "fewfewfewfewasdfaiehötiahdklfjö"
const jfasdfioöoj = "aåisdfhnöihåinmifeiaifheiöknafkdsjvklahöjmoä932r32"

const config = {
    database: 'mydb',
    host: 'server01.microsoft.com',
    user: fefew,
    password: jfasdfioöoj,
    port: 5432
}

const pool = new Pool(config);

export default pool;

const password = "Pa$$word!!"
