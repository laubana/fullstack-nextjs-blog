import dbConfig from "@configs/dbConfig";
import Message from "@models/Message";

const handler = async (req, res) => {
  try {
    if (req.method === "POST") {
      const { email, message, name } = req.body;

      if (!email || !name || !message) {
        res.status(400).json({ message: "Invalid Input" });

        return;
      }

      await dbConfig.connect(process.env.DB_URI);

      const newMessage = await Message.insertOne({
        email,
        message,
        name,
      });

      res
        .status(201)
        .json({ message: "Message created successfully.", data: newMessage });
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Server Error" });
  }
};

export default handler;
