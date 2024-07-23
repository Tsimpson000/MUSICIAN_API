const Manager = require("../models/Manager");
const Musician = require("../models/Musician");

const createManager = async (req, res) => {
    const { name } = req.body;

    const manager = new Manager({
        name
    });

    try {
        const newManager = await manager.save();
        res.status(201).json(newManager);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllManagers = async (req, res) => {
    try {
        const managers = await Manager.find({}).populate('artists');
        res.json(managers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createManager, getAllManagers };