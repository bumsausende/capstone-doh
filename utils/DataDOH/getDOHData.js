import {client } from "../Database";
//helper function
export async function getToDOHs() {
  await client.connect();
  const db = client.db("DOH");
  const collection = db.collection("toDOHs");
  const data = await collection.find().toArray();
  return data;
}


/*For dynamic Routes, Volkers extra input:

export async function getBag(input) {
  await client.connect();
  const db = client.db("capstone_candyshop");
  const collection = db.collection("bags");
  const data = await collection.findOne({ slug: `${input}` });
  return data;
}*/
