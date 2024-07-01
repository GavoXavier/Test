// imports/api/api.js
import { WebApp } from 'meteor/webapp';
import bodyParser from 'body-parser';
import { Meteor } from 'meteor/meteor';

let verificationStatus = '';

WebApp.connectHandlers.use(bodyParser.urlencoded({ extended: true }));
WebApp.connectHandlers.use(bodyParser.json());

WebApp.connectHandlers.use('/api/v1/verify', (req, res, next) => {
  if (req.method === 'POST') {
    const { username, status } = req.body;
    console.log(`Received data - Username: ${username}, Status: ${status}`);

    // Update the verification status
    verificationStatus = status;

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Status received successfully' }));
  } else {
    res.writeHead(405);
    res.end('Method not allowed');
  }
});

Meteor.methods({
  getVerificationStatus() {
    return verificationStatus;
  },
});
