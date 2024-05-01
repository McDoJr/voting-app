class DataQuery {
    constructor(db) {
        this.db = db;
    }

    setTable = (table) => {
        this.table = table;
    }

    findAll = (table, callback) => {
        let sql = `SELECT * FROM ${table}`;
        this.db.query(sql, (error, result) => {
           if(error) throw error;
           return callback(result);
        });
    }

    insertData = (fields, values, callback) => {

        const sql = `INSERT INTO voters (${fields.join(',')}) VALUES (?)`;

        this.db.query(sql, [values], (error, result) => {
            if(error) throw error;
            return callback(result);
        });
    }

    // Retrieve data by using 2 fields (ex. username and password)
    findOneByFields = (table, fields, values, callback) => {
        let sql = `SELECT * FROM ${table} WHERE ${fields[0]} = ? AND ${fields[1]} = ?`;
        this.db.query(sql, values, (error, result) => {
            if(error) throw error;
            return callback(result[0]);
        })
    }

    findOneByField = (table, field, value, callback) => {
        let sql = `SELECT * FROM ${table} WHERE ${field} = ?`;
        this.db.query(sql, value, (error, result) => {
            if(error) throw error;
            return callback(result[0]);
        });
    }

    removeByField = (table, field, value, callback) => {
        let sql = `DELETE FROM ${table} WHERE ${field} = ?`;
        this.db.query(sql, value, (error, result) => {
           if(error) throw error;
           return callback(result);
        });
    }
}

module.exports = DataQuery;