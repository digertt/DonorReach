
const express = require('express');
const app = express();
const AWS = require('aws-sdk');
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json({
  limit:'10mb'
})

AWS.config.update({region: 'us-west-1'});

const fs = require('fs');

var record = "";

var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
var docClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-1'});
const port = 3330;

app.post('/subscribe', jsonParser, async (req, res) => {
    
  var addr = req.body.addr;
  var number = req.body.phone;
  var name = req.body.name;
  
  console.log('Got email!: ' + name)
  try{
      
  var tablePlace = {
    TableName: 'donor-email-list',
      Item: {
        'email': addr,
        'name': name,
        'phone': number
      }
    };
    var output = await docClient.put(tablePlace).promise();
    console.log(output);
    res.status(200).send();
  }catch{
      console.log("DB error!");
      res.status(500).send('error writing to DB!\n');
  }
  
});

app.listen(port, () => {
  console.log(`Waiting for subscriptions on... ${port}`) 
});

app.post('/test', jsonParser, async (req, res) => {
  
  console.log("POST TEST!");
  res.status(200).send("success!");
  
});

app.get('/testother', async (req, res) => {
  
  console.log("GOT TEST!");
  res.status(200).send("success!");
  
});