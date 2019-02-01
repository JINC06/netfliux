import moongose from 'mongoose';

const Schema = moongose.Schema;

const RatingSchema = new Schema({
    'name': {
        type: String,
        required: true
    },
    'description': {
        type: String,
        required: true
    },
    'age': {
        type: Number,
        required: true
    }
},{ 'collection': 'ratings', timestamps: true});

export default moongose.model('ratings', RatingSchema);