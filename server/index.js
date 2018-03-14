/* eslint no-console: "off" */
// activates the express server on localhost:3000 and sends response to the console
const server = require('./server');

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));

