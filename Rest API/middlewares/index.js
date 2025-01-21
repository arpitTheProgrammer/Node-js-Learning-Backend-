const fs = require('fs');

function logReqRes(fileName){
    return (req, res, next)=>{
        
          fs.appendFile(fileName, `${Date.now()}, ${req.method}, ${req.ip}, ${req.path}\n`, (err) => {
            if (err) {
              console.error('Error writing to log file', err);
            }
            next();  // Proceed to the next middleware
          });

    }
}

module.exports = {
    logReqRes
}