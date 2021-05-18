const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const TOKEN = 'api_key=377ddf2705edd281e4988690055ef69f';

const UPCOMING_URL = `${BASE_URL}upcoming?${TOKEN}`;
const DETAILS_URL = `${BASE_URL}<ID>?${TOKEN}`;
