const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const MovieSchema = new Schema({
    id: ObjectId,
    name: {
        type: String,
        unique: true,
    },
    actor: String,
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;