const fs = require('fs');
//There is no delete command in node it is used as unlink
fs.unlink("changed.txt", function(err){
    if (err) console.log(err);
    else console.log("Deleted"); 
})