import Movie  from '../../../schemas/movies';
import { MovieType  } from '../../types/movie';
import * as GR from 'graphql';

export default {
    type: MovieType,
    args: {
        id: {
            name: 'ID',
            type: new GR.GraphQLNonNull(GR.GraphQLID)
        }
    },
    resolve(root, params) {
        const deletedMovie = Movie.findByIdAndRemove(params.id).exec();
        if(!deletedMovie) throw new Error("Error on delete movie");
        return deletedMovie;
    }
}