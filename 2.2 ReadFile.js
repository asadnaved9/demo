const fs = require('fs');

fs.readFile("new.txt", "UTF-8", function(err, data){
    if(err) console.log(err);
    else console.log(data);
    
})