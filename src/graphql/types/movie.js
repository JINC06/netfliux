import * as GR from 'graphql';

import { GenreType } from './genres';
import Genre from '../../schemas/genres';

import { RatingType } from './rating';
import Rating from '../../schemas/ratings';

export const MovieType = new GR.GraphQLObjectType({
    name: 'Movies',
    description: 'Types of Movies',
    fields: () => ({
        _id:{
            type: GR.GraphQLNonNull(GR.GraphQLID)
        },
        image: {
            type: GR.GraphQLString
        },
        name: {
            type: GR.GraphQLString
        },
        director: {
            type: GR.GraphQLString
        },
        year: {
            type: GR.GraphQLInt
        },
        rank: {
            type: GR.GraphQLList(GR.GraphQLFloat)
        },
        duration: {
            type: GR.GraphQLString
        },
        language: {
            type: GR.GraphQLString
        },
        url: {
            type: GR.GraphQLString
        },
        rating: {
            type: RatingType,
            resolve(movie){
                const {rating} = movie
                return Rating.findById(rating).exec()
            }
        },
        genre: {
            type: GenreType,
            resolve(movie){
                const {genre} = movie
                return Genre.findById(genre).exec()
            }
        },
        plot: {
            type: GR.GraphQLString
        },
        
    })
})


export const MovieInputType = new GR.GraphQLInputObjectType({
    name: 'addMovies',
    description: 'Input of Movies',
    fields: () => ({
        image: {
            type: GR.GraphQLString
        },
        name: {
            type: GR.GraphQLString
        },
        director: {
            type: GR.GraphQLString
        },
        year: {
            type: GR.GraphQLInt
        },
        rank: {
            type: GR.GraphQLList(GR.GraphQLFloat)
        },
        duration: {
            type: GR.GraphQLString
        },
        language: {
            type: GR.GraphQLString
        },
        url: {
            type: GR.GraphQLString
        },
        rating: {
            type: GR.GraphQLString
        },
        genre: {
            type: GR.GraphQLString
        },
        plot: {
            type: GR.GraphQLString
        },
        
    })
})

export const RankMovieType = new GR.GraphQLInputObjectType({
    name: 'addRank',
    description: 'Add rank to movie',
    fields: () => ({
        rank:{
            type: GR.GraphQLFloat
        }
    })
})