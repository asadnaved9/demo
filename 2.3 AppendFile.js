const fs = require('fs');

fs.appendFile("new.txt", "new appended data", function(err){
    // The data will be appended or added to the new.txt file
    if(err) console.log(err);
    else console.log("Data Appended");
})