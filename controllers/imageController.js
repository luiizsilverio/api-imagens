const fs = require("fs");

const Image = require("../models/Image");

exports.create = async (req, res) => {
  try {
    const {name} = req.body;
    const file = req.file;
    const image = new Image({
      name,
      src: file.path,
    })

    await image.save();

    res.json({image, message: "Imagem salva com sucesso"});

  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Erro ao salvar imagem"});
  }
}

exports.findAll = async (req, res) => {
  try {
    const images = await Image.find();

    res.json(images);

  } catch(error) {
    console.log(error)
    res.status(500).json({message: "Erro ao buscar imagens"});
  }
}

exports.remove = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);

    if (!image) {
      res.status(404).json({message: "Imagem não encontrada"});
    }

    fs.unlinkSync(image.src);

    await image.remove();

    res.json({message: "Imagem removida com sucesso"});

  } catch(error) {
    console.log(error)
    res.status(500).json({message: "Erro ao excluir imagem"});
  }
}
