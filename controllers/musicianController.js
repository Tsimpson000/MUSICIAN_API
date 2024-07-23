const Musician = require("../models/Musician");


//Function to create musician
const createMusician = async (req, res) => {
    const { artistName, genre, bookingPrice, location, manager } = req.body;

    try {
        const musician = new Musician({
            artistName,
            genre,
            bookingPrice,
            location,
            manager
        });

        const newMusician = await musician.save();
        res.status(201).json(newMusician);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Function to get all musicians
const getAllMusicians = async (req, res) => {
    try {
        // Use model to talk to database
        const musicians = await Musician.find({});
        res.json(musicians);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Function to get musician by id
const getMusicianByID = async (req, res) => {
    // Require id as parameter
    try {
        const musician = await Musician.findById(req.params.id);
        if (!musician) {
            return res.status(404).json({ message: 'Musician not found' });
        }
        res.json(musician);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllMusiciansByManager = async (req, res) => {
    const managerId = req.params.managerId;

    try {
        const musicians = await Musician.find({ manager: managerId });
        res.json(musicians);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Function to modify musician
const updateMusician = async (req, res) => {
    const { id } = req.params;
    const { artistName, genre, bookingPrice, location, manager } = req.body;

    try {
        const updatedMusician = await Musician.findByIdAndUpdate(
            id,
            { artistName, genre, bookingPrice, location, manager },
            { new: true }
        );

        if (!updatedMusician) {
            return res.status(404).json({ message: 'Musician not found' });
        }

        res.json(updatedMusician);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Function to delete a musician
const deleteMusician = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedMusician = await Musician.findByIdAndDelete(id);
        if (!deletedMusician) {
            return res.status(404).json({ message: 'Musician not found' });
        }
        res.json({ message: 'Musician deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createMusician, getAllMusicians, getMusicianByID, updateMusician, deleteMusician, getAllMusiciansByManager };