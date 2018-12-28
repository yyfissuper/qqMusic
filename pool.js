const sql=require("mysql");
const pool=sql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"qqmusic",
    connectionLimit:10
})
module.exports=pool;