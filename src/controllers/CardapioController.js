const User = require('../models/User');
const Cardapio = require('../models/Cardapio');

module.exports = {
  async index(req, res) {
    const { user_id } = req.query

    const cardapio = await Cardapio.find({ user: user_id });

    return res.json(cardapio);
  },

  async store(req, res) {
    const { filename } = req.file;
    const { dia, descricao, ingredientes} = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User does not exist'});
    }

    const cardapio = await Cardapio.create({
      user: user_id,
      thumbnail: filename,
      dia,
      descricao,
      ingredientes
    })

    return res.json(cardapio);
  }
};