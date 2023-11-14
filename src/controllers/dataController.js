const dataService = require('../services/dataService');

exports.addData = (req, res) => {
  const data = req.body;
  dataService.storeData(data);
  res.json({ message: 'Data stored successfully' });
};

exports.getData = (req, res) => {
  dataService.getData((data) => {
    res.json(data);
  });
};
