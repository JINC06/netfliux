import * as GRAPHQL from 'graphql';


export const GenreType = new GRAPHQL.GraphQLObjectType({
    name: "Genres",
    description: "Genres in database",
    fields: () => ({
        _id: {
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        },
        name: {
            type: GRAPHQL.GraphQLString
        },
        description: {
            type: GRAPHQL.GraphQLString
        }
    })
});

export const GenreInputType = new GRAPHQL.GraphQLInputObjectType({
    name: "AddGenres",
    description: "Types of add a genres",
    fields: () => ({
        name: {
            type: GRAPHQL.GraphQLString
        },
        description: {
            type: GRAPHQL.GraphQLString
        }
    })
});