import * as GRAPHQL from 'graphql';

import User from '../../../schemas/user';

import { UserType } from '../../types/user';


const querySingleUser = {
    type: UserType,
    args: {
        id: {
            name: "ID",
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        }
    },
    resolve(root, params) {
        const user = User.findById(params.id).exec()
        return user
    }
}

export default querySingleUser;