var firebaseInit = require('./firebase');
var osc = require('node-osc');
var network = require('./config.json');

var getData = function() {
  const db = firebaseInit.db;
  let doc = db.collection('action').doc('new-doc');

  let observer = doc.onSnapshot(docSnapshot => {
    console.dir(JSON.stringify(docSnapshot.data()));

    let data = docSnapshot.data();
    console.log(`Received doc snapshot: ${data.count}`);

    const client = new osc.Client(network.IP_ADDRESS, network.PORT);
    client.send('/generate_object', data.count, () => {
      client.close();
    });

  }, err => {
    console.log(`Encountered error: ${err}`);
  });
}

//getData();
module.exports = {
  getData
};