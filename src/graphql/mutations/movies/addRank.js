import *  as GR from 'graphql';
import Movie from '../../../schemas/movies';
import { RankMovieType, MovieType } from '../../types/movie';


export default {
    type: MovieType,
    args: {
        id: {
            name: 'ID',
            type: GR.GraphQLNonNull(GR.GraphQLID)
        },
        data: {
            name: 'data',
            type: GR.GraphQLNonNull(RankMovieType)
        }
    }, resolve(root, params){
        const {id, data} = params;
        return Movie.findByIdAndUpdate(id, {$push:{rank: data.rank}})
            .then((movie) => {
                return Movie.findById(movie.id).exec
            })
    }
}