const request = require("request");
const cheerio = require("cheerio");
const url = 'https://www.indeed.com/jobs?q=internship&l=Remote';

request(url, (err, res, html) => {
    if (!err && res.statusCode == 200) {
        const $ = cheerio.load(html);

        const jobTitle = $(".jobtitle.turnstileLink").text();

        console.log(jobTitle);
    }
});
