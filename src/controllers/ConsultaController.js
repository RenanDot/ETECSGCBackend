
const Cardapio = require('../models/Cardapio');

module.exports = {
  async index(req, res) {
    const { _id } = req.query

    const cardapio = await Cardapio.find({ id: _id });

    return res.json(cardapio);
  },
}