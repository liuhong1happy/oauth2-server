var crypto = require('crypto');
var fs = require('fs');

module.exports.createHash = (filePath)=> {
    return new Promise((resolve, reject)=> {
        var rs = fs.createReadStream(filePath);
        var hash = crypto.createHash('md5');
        rs.on('data', hash.update.bind(hash));
        rs.on('error', function(err) {
            resolve(null)
        })
        rs.on('end', function () {
            resolve(hash.digest('hex'));
        });
    })
}