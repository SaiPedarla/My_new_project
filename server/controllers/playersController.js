const Players = require("../models/Players");

exports.createPlayer = async (req, res) => {
  try {
    let players;

    players = new Players(req.body);

    await players.save();
    res.send(players);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
};

exports.getPlayers = async (req, res) => {
  try {
    const players = await Players.find();
    res.json(players);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
};

exports.getPlayer = async (req, res) => {
  try {
    let players = await Players.findById(req.params.id);

    if (!players) {
      res.status(404).json({ msg: "Players does not exist" });
    }

    res.json(players);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
};

exports.deletePlayer = async (req, res) => {
  try {
    let players = await Players.findById(req.params.id);

    if (!players) {
      res.status(404).json({ msg: "Players does not exist" });
    }

    await Players.findOneAndDelete({ _id: req.params.id });
    res.json({ msg: "Players successfully deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
};

exports.updatePlayer = async (req, res) => {
  try {
    const { name, category, location, price } = req.body;
    let players = await Players.findById(req.params.id);

    if (!players) {
      res.status(404).json({ msg: "Players does not exist" });
    }

    players.name = name;
    players.category = category;
    players.location = location;
    players.price = price;

    players = await Players.findOneAndUpdate({ _id: req.params.id }, players, {
      new: true,
    });
    res.json(players);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
};
