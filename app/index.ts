import { db } from "./firebase/index";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const osc = require("node-osc");
import network from "./config.json";

export const getData = (): void => {
  //let doc = db.collection('action').doc('new-doc');
  const col = db.collection("action");
  // 複数のイベントを検知するなら、collection下のdocを増やす方針

  col.onSnapshot(
    (snapshot) => {
      // 更新されたdocumentのみ検知
      snapshot.docChanges().forEach((change) => {
        if (change.type === "modified") {
          const data = change.doc.data();
          const doc_id = data.doc_id;
          const num = doc_id.substring(3);
          console.log("data: ", data);
          const client = new osc.Client(network.IP_ADDRESS, network.PORT);
          client.send("/obj", num, () => {
            client.close();
          });
        }
      });
    },
    (err) => {
      console.log(`Encountered error: ${err}`);
    }
  );
};
