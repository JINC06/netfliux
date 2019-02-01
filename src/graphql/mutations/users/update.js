import User from '../../../schemas/user';
import { UserType, UserInputType } from '../../types/user';
import * as GR from 'graphql';

export default {
    type: UserType,
    args: {
        id: {
            name: 'ID',
            type: new GR.GraphQLNonNull(GR.GraphQLID)
        },
        data: {
            name: 'data',
            type: new GR.GraphQLNonNull(UserInputType)
        }
    },
    resolve(root, params) {
        return User.findByIdAndUpdate(params.id, { $set: { ...params.data } })
            .then((user) => User.findById(user.id).exec())
            .catch((err) => new Error('Couldnt update user', err))
    }
}