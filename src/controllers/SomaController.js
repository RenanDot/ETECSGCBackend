const Soma = require('../models/Soma');

module.exports = {
  async store(req, res) {
    const { soma, dia } = req.body;
     
    veri = await Soma.create({soma,dia})

    const somou = Soma.aggregate([
      {
        '$match': {
          'dia': 'Terça-feira'
        }
      }, {
        '$group': {
          '_id': '$dia', 
          'total': {
            '$sum': '$soma'
          }
        }
      }
    ])

    return res.json(veri)
  }
};
