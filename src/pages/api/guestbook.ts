import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default async function handler(req: NextApiRequest,
  res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, content } = req.body;

    if (!name || !content) {
      return res.status(400).json({ error: "name and content are required" });
    }

    try {
      await addDoc(collection(db, "guestbook"), {
        name,
        message: content,
        createdAt: serverTimestamp()
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Firestore Error:", error);
      return res.status(500).json({ error: "Failed to save entry" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}