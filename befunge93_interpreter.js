const Befunge = require('befunge93')
let befunge = new Befunge()
let fs = require('fs')

befunge.run(fs.readFileSync("./app/main.bf").toString()).then((output) => {
    process.stdout.write(output)
});