import sqlite3 from 'sqlite3';

const DBSOURCE = 'db.sqlite';

const SQL_EVENT_CREATE = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        password TEXT,
        wallet TEXT
    )
`;

const database = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.log(err.message);
        throw err;
    }
    else {
        console.log("Connected to database");
        database.run(SQL_EVENT_CREATE, (err) => {
            if (err) {
                console.log(err.message);
            }
            else {
                console.log("Table users created");
            }
        });
    }
});

export default database;