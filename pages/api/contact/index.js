import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  try {
    if (req.method === "POST") {
      const { email, message, name } = req.body;

      if (!email || !name || !message) {
        res.status(400).json({ message: "Invalid Input" });

        return;
      }

      const client = await MongoClient.connect(process.env.MONGO_URI);

      const db = client.db();

      const newMessage = await db.collection("messages").insertOne({
        email,
        message,
        name,
      });

      res
        .status(201)
        .json({ message: "Message created successfully.", data: newMessage });
    }
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Server Error!" });
  }
};

export default handler;
