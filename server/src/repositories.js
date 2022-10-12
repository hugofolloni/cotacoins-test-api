import database from './database.js';

// create user, read all users, read user by id, read user by email, update user, delete user

const userRepository = {
    create: (user, callback) => {
        const sql = "INSERT INTO users (name, email, password, wallet) VALUES (?, ?, ?, ?)";
        const params = [user.name, user.email, user.password, user.wallet];
        return database.run(sql, params, (err) => {
            if (err) {
                console.log(err.message);
                throw err;
            }
            else {
                callback();
            }
        });
    },

    readAll: (callback) => {
        const sql = "SELECT * FROM users";
        return database.all(sql, [], (err, rows) => {
            callback(rows);
        });
    },

    readById: (id, callback) => {
        const sql = "SELECT * FROM users where id = ?"
        const params = [id];
        return database.get(sql, params, (err, row) => {
            callback(row);
        });
    },

    readByEmail: (email, callback) => {
        const sql = "SELECT * FROM users where email = ?"
        const params = [email];
        return database.get(sql, params, (err, row) => {
            callback(row);
        });
    },

    update: (id, user, callback) => {
        const sql = "UPDATE users SET name = ?, email = ?, password = ?, wallet = ? WHERE id = ?";
        const params = [user.name, user.email, user.password, user.wallet, id];
        return database.run(sql, params, (err) => {
            callback();
        }
        );
    },

    delete: (id, callback) => {
        const sql = "DELETE FROM users WHERE id = ?";
        const params = [id];
        return database.run(sql, params, (err) => {
            callback();
        })
    }

}

export default userRepository;