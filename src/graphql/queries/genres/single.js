import * as GRAPHQL from 'graphql';

import Genre from '../../../schemas/genres';

import { GenreType } from '../../types/genres';


const querySingleGenre = {
    type: GenreType,
    args: {
        id: {
            name: "ID",
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        }
    },
    resolve(root, params) {
        const genre = Genre.findById(params.id).exec()
        return genre
    }
}

export default querySingleGenre;