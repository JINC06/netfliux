import * as GRAPHQL from 'graphql';


export const RatingType = new GRAPHQL.GraphQLObjectType({
    name: "Ratings",
    description: "Ratings in database",
    fields: () => ({
        _id: {
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        },
        name: {
            type: GRAPHQL.GraphQLString
        },
        description: {
            type: GRAPHQL.GraphQLString
        },
        age : {
            type: GRAPHQL.GraphQLFloat
        }
    })
});

export const RatingInputType = new GRAPHQL.GraphQLInputObjectType({
    name: "AddRatings",
    description: "Types of add a ratings",
    fields: () => ({
        name: {
            type: GRAPHQL.GraphQLString
        },
        description: {
            type: GRAPHQL.GraphQLString
        },
        age : {
            type: GRAPHQL.GraphQLFloat
        }
    })
});