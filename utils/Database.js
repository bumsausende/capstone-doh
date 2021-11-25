import { MongoClient } from "mongodb";
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
export const client = new MongoClient(process.env.MONGODB_URL, options);
