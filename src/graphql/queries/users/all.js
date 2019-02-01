import * as GRAPHQL from 'graphql';

import User from '../../../schemas/user';

import { UserType } from '../../types/user';

const queryAllUsers = {
    type: new GRAPHQL.GraphQLList(UserType),
    resolve() {
        const users = User.find().exec();
        if(!users) throw new Error("Error at feching users");
        return users;
    }
}

export default queryAllUsers;