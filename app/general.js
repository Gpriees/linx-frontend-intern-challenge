var requestURL = 'https://gist.githubusercontent.com/mapreuss/cccf0781ba848648d9d8a6510201a027/raw/74b72ac19728a92306b296863b5a81c8a0b3d8d7/test.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();
request.onload = function() {
    var product = request.response;
}