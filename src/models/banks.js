var fs = require('fs');

function banks() {}

banks.prototype.getBanks = function(callback) {
  fs.readFile('./data/bancos.json', 'utf8', function(err, result) {
    var data = [];

    if (!err) {
      
      var obj = JSON.parse(result);
      var i = 0;

      obj.banksArray.forEach(function(banksArray) {
        if (i >=  0) {
          data[i] = banksArray;
	      i++;
        }
      });
    }	   
    callback(err, data);
  });
};

module.exports = function(){
  return banks;
}