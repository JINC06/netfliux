import * as GRAPHQL from 'graphql';

import Genre from '../../../schemas/genres';

import { GenreType } from '../../types/genres';

const queryAllGenres = {
    type: new GRAPHQL.GraphQLList(GenreType),
    resolve() {
        const genres = Genre.find().exec();
        if(!genres) throw new Error("Error at feching genres");
        return genres;
    }
}

export default queryAllGenres;