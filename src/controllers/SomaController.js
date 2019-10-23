const Soma = require('../models/Soma');
const Rm = require('../models/Rm');

module.exports = {

  async store(req, res) {
    const { soma, dia, rm } = req.body;

    let aluno = await Rm.findOne({ rm });
    let verifica = await Soma.findOne({ rm });
    let verificar = await Soma.findOne({ dia });

    if(aluno) {
        veri = await Soma.create({soma, dia, rm});
        return res.json(veri)
      
    }
  }
};
