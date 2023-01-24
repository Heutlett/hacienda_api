const app = require('./server') 
const config = require('./config');


app.listen(config.port, () => 
    console.log('Server is listening on ' + config.url));
