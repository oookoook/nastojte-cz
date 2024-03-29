var url = 'https://nastojte.cz';
var title = 'Nastojte.cz - Adam Kučera';
var author = 'Adam Kučera';
var description = 'Adam Kučera - softwarový vývojář na volné noze.';
var keywords = 'vývoj, vývojář, software, aplikace, web, programátor, programování, Javascript, AWS';
var locale = 'cs_CZ';
var lang = 'cs';

var routesToPrerender = ['/', '/vonnegut', '/references', '/attributions', '/tech'];

// do not touch code bellow if not necessary
// this is loaded into the webpack.config.js

module.exports = {
    routesToPrerender,
    title,
    lang,
    meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        author,
        description,
        keywords,
        'og:url': url,
        'og:type': 'website',
        'og:title': title,
        'og:image': 'favicon.png',
        'og:description': description,
        'og:site_name': title,
        'og:locale': locale,
        'og:article:author': author,
        'twitter:card': description,
        'twitter:url': url,
        'twitter:title': title,
        'twitter:description': description,
        'twitter:image': 'favicon.png'
    },
    /*
    social: {
        appUrl: url,
        facebook: {
            'og:url': url,
            'og:type': 'website',
            'og:title': title,
            'og:image': './assets/favicon.png',
            'og:description': description,
            'og:site_name': title,
            'og:locale': locale,
            'og:article:author': author,
        },
        twitter: {
            'twitter:card': description,
            'twitter:url': url,
            'twitter:title': title,
            'twitter:description': description,
            'twitter:image': './assets/favicon.png'
        },
    },
    */
    /*
    robots: {
        policy: [{
            userAgent: "*",
            allow: "/"
        }],
        host: 'https://nastojte.cz'
    }
    */
}