

var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=5b5ec470520d475ea1de5582f816d206';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

