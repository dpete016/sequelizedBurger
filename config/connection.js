var mysql = require("mysql");

if (process.env.JAWSB_URL) {
 connection = mysql.createConnection(process.env.JAWSB_URL);
} else {
  var connection = mysql.createConnection({
     host: "localhost",
     port: 3306,
     user: "root",
     password: "band3D016#",
     database: "burgers_db",
    });
};
connection.connect(function(err) {
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;