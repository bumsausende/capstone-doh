import { ObjectId } from "mongodb";
import { client } from "../../../utils/database";
import { SanitizeToDOH } from "../../../utils/SanitizeToDOH";

export default async function handler(request, response) {
  try {
    await client.connect();
    const db = client.db("DOH");
    const collection = db.collection("toDOHs");

    const _id = ObjectId(request.query.toDOHsId);

    switch (request.method) {
      case "GET":
        const toDOH = await collection.findOne({ _id });
        response.status(200).json(toDOH);
        break;

      case "PUT":
        const updatedToDOH = SanitizeToDOH(request.body);
        const updateResult = await collection.updateOne(
          { _id },
          { $set: updatedToDOH }
        );
        response.status(200).json(updateResult);
        break;

      case "DELETE":
        const deleteResult = await collection.deleteOne({ _id });
        response.status(200).json(deleteResult);
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
