let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3010';
        break;
    case 'team-b-plant-it.herokapp.com':
    APIURL = 'https://wd85-plant-it2.herokuapp.com/'
}

export default APIURL;


