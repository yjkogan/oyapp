var app = require(APP_ROOT + '/app');

var client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
twilio_number = process.env.TWILIO_NUMBER;
my_number = process.env.MY_NUMBER;

// Base Route
app.get('/', function(req, res, next) {
  return res.send('Running');
});

app.get('/send_oy', function(req, res, next) {
  sendMessage(shira_number, 'Oy');
});

function sendMessage(rec, body) {
  client.sendMessage({
    to:rec,
    from:twilio_number,
    body:body}, function(err, message) {
      console.log(err);
    });
}
