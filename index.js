var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const PORT = 5555;

app.listen(PORT, function() {
    init();
    console.log('Server listening on port %s', PORT);
});

const JSON_HEADER = {
    'Content-Type': 'application/json',
};
const PNG_HEADER  = {
    'Content-Type': 'image/png',
};
const TEXT_HEADER = {
    'Content-Type': 'text/plain',
};
var mActivity;
var mContestants;
var mDetails;
var mRanking;

var mUsers;

function init() {
    mActivity = fs.readFileSync('./json/activity.json', 'utf8');
    mContestants = fs.readFileSync('./json/contestants.json', 'utf8');
    mDetails = fs.readFileSync('./json/details.json', 'utf8');
    mRanking = fs.readFileSync('./json/ranking.json', 'utf8');
}

app.post('/activity', function(req, res) {
    console.log("请求了activity")
    res.writeHead(200, JSON_HEADER);
    res.end(mActivity);
});

app.post('/query/json', function(req, res) {
    console.log("query")
    res.writeHead(200, JSON_HEADER);
    res.end(mContestants);
});

app.post('detail/{id}', function(req, res) {
    res.writeHead(200, JSON_HEADER);
    res.end(mDetails);
});

app.post('/topVote', function(req, res) {
    res.writeHead(200, JSON_HEADER);
    res.end(mRanking);
});

app.post('/giveVote', function(req, res) {
    res.writeHead(200, JSON_HEADER);
    res.end();
});






