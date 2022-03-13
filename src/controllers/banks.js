module.exports.index = function(application, req, res) {
    var bankModel = new application.src.models.banks();
  
    bankModel.getBanks(function(err, result) {
      res.render("index", {banks : result});
    });
  }