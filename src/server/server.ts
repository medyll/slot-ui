/*
const mongo = require('mongodb');

let client: any = null;
let db: any     = null;

export const server = async function () {
  console.log('server !!!')
  if (!client) {
    client = await mongo.MongoClient.connect('mongodb://127.0.0.1');
    db     = client.db('idaenext_sitebase_app');
  }
  
  console.log(client);
  
  return {client, db};
};*/


export {}