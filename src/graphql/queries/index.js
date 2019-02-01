import users from './users/index';
import genres from './genres/index'
import ratings from './ratings/index';
import movies from './movies/index';


export default {
    ...users,
    ...genres,
    ...ratings,
    ...movies
}