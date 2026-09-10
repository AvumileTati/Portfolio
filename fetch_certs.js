const https = require('https');

const urls = [
"https://coursera.org/share/3cc47fdc0f4bbf0d01ae808ee644f937",
"https://coursera.org/share/27d32869d010b126c99a797f2bbc4d7b",
"https://coursera.org/share/64193b210299a9f22124fb54822e007a",
"https://coursera.org/share/bcf40ed00bdae6c4509ec733c423cc1f",
"https://coursera.org/share/56a1b7b7f8cd4bdfde9b9ddd84bfe54b",
"https://coursera.org/share/0314cc3231b9c8c397ad23037ffd4429",
"https://coursera.org/share/293730726596e0704a8a36449ff30a80",
"https://coursera.org/share/2c7bf04363489c2d0c814f87a4c5cda5",
"https://coursera.org/share/4ff72d348a36555defa3361bbb9decdd",
"https://coursera.org/share/cc67674155f61cccf599bf5543812949",
"https://coursera.org/share/ff160e6db9ca7ad9f6fa2bccdfcce097",
"https://coursera.org/share/2d96d69c41a1938e2c1ddc08534360b3",
"https://coursera.org/share/f6d0d0e7d4df787e46421964e8537fe8"
];

async function fetchTitle(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const match = data.match(/<title>(.*?)<\/title>/);
                if (match && match[1]) {
                    resolve(match[1].replace(' | Coursera', '').trim());
                } else {
                    resolve('Unknown Course');
                }
            });
        }).on('error', () => resolve('Error fetching'));
    });
}

async function run() {
    for(let url of urls) {
        const title = await fetchTitle(url);
        console.log("TITLE: " + title + " URL: " + url);
    }
}
run();
