import * as GRAPHQL from 'graphql';

import Rating from '../../../schemas/ratings';

import { RatingType } from '../../types/rating';

const queryAllRatings = {
    type: new GRAPHQL.GraphQLList(RatingType),
    resolve() {
        const ratings = Rating.find().exec();
        if(!ratings) throw new Error("Error at feching ratings");
        return ratings;
    }
}

export default queryAllRatings;