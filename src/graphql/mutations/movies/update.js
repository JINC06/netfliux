import Movie from '../../../schemas/movies';
import { MovieType, MovieInputType } from '../../types/movie';
import * as GR from 'graphql';

export default {
    type: MovieType,
    args: {
        id: {
            name: 'ID',
            type: new GR.GraphQLNonNull(GR.GraphQLID)
        },
        data: {
            name: 'data',
            type: new GR.GraphQLNonNull(MovieInputType)
        }
    },
    resolve(root, params) {
        return Movie.findByIdAndUpdate(params.id, { $set: { ...params.data } })
            .then((movie) => Movie.findById(movie.id).exec())
            .catch((err) => new Error('Couldnt update movie', err))
    }
}