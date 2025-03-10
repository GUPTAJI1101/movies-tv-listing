import './style.css';
import movie from "./api/movie.json";
import series from "./api/series.json";
import { showMovieContainer } from './homeMovieCard';
import { showSeriesContainer } from './homeSeriesCard';
import { btnScroll } from './btnScroll';
import { search } from './search';
import { dropdown } from './dropdown';
import { addSubs } from './addSubs';
import { details } from './details';

if (document.querySelector("#movieContainer")) showMovieContainer(movie);
if (document.querySelector("#seriesContainer")) showSeriesContainer(series);

search();
btnScroll();
dropdown();
addSubs();
details();
