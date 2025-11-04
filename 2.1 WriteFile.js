const fileSystem = require('fs');

fileSystem.writeFile("testt.txt", "Hey Asad Naved!", function(err) {
    if(err) console.log(err);
    else console.log("File created");
})