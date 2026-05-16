const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('Contacts').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    }).catch((err) => {
        res.status(500).json({ error: 'An error occurred while fetching contacts.' });
    });

};

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('Contacts').find({ _id: userId });
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    }).catch((err) => {
        res.status(500).json({ error: 'An error occurred while fetching contacts.' });
    });
};

module.exports = {
    getAll,
    getSingle
};
