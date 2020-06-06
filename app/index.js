var firebaseInit = require('./firebase');
var osc = require('node-osc');
var network = require('./config.json');

var getData = function() {
  const db = firebaseInit.db;
  //let doc = db.collection('action').doc('new-doc');
  let col = db.collection('action');
  // 複数のイベントを検知するなら、collection下のdocを増やす方針

  let ob = col.onSnapshot(snapshot => {
    // 更新されたdocumentのみ検知
    snapshot.docChanges().forEach(change => {
      if(change.type === "modified") {
        let data = change.doc.data();
        let doc_id = data.doc_id;
        let num = doc_id.substring(3);
        console.log("data: ", data);
        const client = new osc.Client(network.IP_ADDRESS, network.PORT);
        client.send('/obj', num, () => {
          client.close();
        });
      }
    });
  }, err => {
    console.log(`Encountered error: ${err}`);
  });
}

//getData();
module.exports = {
  getData
};