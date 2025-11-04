const fs = require('fs');
// Creating folders in nodeJS with mkdir
fs.mkdir("New", function(err){
   if(err) console.log(err);
   else console.log('Folder Created');
})