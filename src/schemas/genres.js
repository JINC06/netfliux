import moongose from 'mongoose';

const Schema = moongose.Schema;

const GenreSchema = new Schema({
    'name': {
        type: String,
        required: true
    },
    'description': {
        type: String,
        required: true
    }
},{ 'collection': 'genres', timestamps: true});

export default moongose.model('genres', GenreSchema);