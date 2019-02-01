import Users from './users/index';
import Genres from './genres/index';
import Ratings from './ratings/index';
import Movies from './movies/index';

export default {
    ...Users,
    ...Genres,
    ...Ratings,
    ...Movies
}