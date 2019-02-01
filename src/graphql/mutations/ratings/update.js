import Rating from '../../../schemas/ratings';
import { RatingType, RatingInputType } from '../../types/rating';
import * as GR from 'graphql';

export default {
    type: RatingType,
    args: {
        id: {
            name: 'ID',
            type: new GR.GraphQLNonNull(GR.GraphQLID)
        },
        data: {
            name: 'data',
            type: new GR.GraphQLNonNull(RatingInputType)
        }
    },
    resolve(root, params) {
        return Rating.findByIdAndUpdate(params.id, { $set: { ...params.data } })
            .then((rating) => Rating.findById(rating.id).exec())
            .catch((err) => new Error('Couldnt update rating', err))
    }
}