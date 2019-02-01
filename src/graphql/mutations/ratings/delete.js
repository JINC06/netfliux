import Rating  from '../../../schemas/ratings';
import { RatingType  } from '../../types/rating';
import * as GR from 'graphql';

export default {
    type: RatingType,
    args: {
        id: {
            name: 'ID',
            type: new GR.GraphQLNonNull(GR.GraphQLID)
        }
    },
    resolve(root, params) {
        const deletedRating = Rating.findByIdAndRemove(params.id).exec();
        if(!deletedRating) throw new Error("Error on delete rating");
        return deletedRating;
    }
}