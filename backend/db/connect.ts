import { Collection, DataAPIClient } from "@datastax/astra-db-ts";
import dotenv from "dotenv";

dotenv.config();

export let history_Collection: Collection;
export let userData_Collection: Collection;

const dbConnect = async () => {
  const client = new DataAPIClient(process.env.ASTRA_TOKEN);

  const db = client.db(process.env.ASTRA_URL, {
    keyspace: "default_keyspace",
    token: process.env.ASTRA_TOKEN,
  });

  history_Collection = db.collection("trigger_mind_company_history");
  userData_Collection = db.collection("trigger_mind_user_data");

  console.log("Astra db is connected");
};

export default dbConnect;
