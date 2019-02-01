import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    'image':{
        type: String,
        required: true
    },
    'name':{
        type: String,
        required: true
    },
    'plot':{
        type: String,
        required: true
    },
    'director':{
        type: String,
        required: true
    },
    'year':{
        type: Number,
        required: true
    },
    'duration':{
        type: String,
        required: true
    },
    'language':{
        type: String,
        required: true
    },
    'url':{
        type: String,
        required: true
    },
    'rank':{
        type: [Number],
        required: true
    },
    'rating':{
        type: Schema.Types.ObjectId,
        ref: 'ratings'
    },
    'genre':{
        type: Schema.Types.ObjectId,
        ref: 'genres'
    },
}, {'collection': 'movie', timestamps: true});

export default mongoose.model('movies',MovieSchema)