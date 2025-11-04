const fs = require('fs');

fs.rename("changed.txt", "test.txt", function(err){
    // To rename first write the older fie name then the new one.
    if(err) console.log(err);
    else console.log("File name chnaged.");
})