const Server = require("./models/server");
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const server = new Server();
server.execute()