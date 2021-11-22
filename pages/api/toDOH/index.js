import { client } from "../../../utils/Database";

export default async function handler(request, response) {
  try {
    await client.connect();
    const db = client.db("DOH");
    const collection = db.collection("toDOHs");

    switch (request.method) {
      case "GET":
        const toDOHs = await collection.find().toArray();
        response.status(200).json(toDOHs);
        break;

      case "POST":
        const insertResult = await collection.insertOne(request.body);

        response.status(200).json(insertResult);
        break;

      case "PUT":
        const updatedToDOH = SanitizeToDOH(request.body);
        const updateResult = await collection.updateOne(
          { _id },
          { $set: updatedToDOH }
        );
        response.status(200).json(updateResult);
        break;
      default:
        response.status(405).json({ error: "Method not allowed" });
        break;
    }
  } catch (error) {
    response.status(500).json({ error: "Something went wrong!" });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}