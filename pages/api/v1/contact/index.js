import { contactController } from "controllers/contact.controller";

const handler = (req, res) => {
  switch (req.method) {
    case "GET":
      return getContacts();
    case "POST":
      return createContact();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function getContacts() {
    const contacts = await contactController.getAll();
    return res.status(200).json(contacts);
  }

  async function createContact() {
    try {
      await contactController.create(req.body);
      return res.status(200).json({});
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
};

export default handler;
