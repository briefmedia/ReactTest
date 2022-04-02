import { contactController } from "controllers/contact.controller.js";

const handler = (req, res) => {
  switch (req.method) {
    case "GET":
      return getContactById();
    case "PUT":
      return updateContact();
    case "DELETE":
      return deleteContact();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function getContactById() {
    const contact = await contactController.getById(req.query.id);
    return res.status(200).json(contact);
  }

  async function updateContact() {
    try {
      await contactController.update(req.query.id, req.body);
      return res.status(200).json({});
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async function deleteContact() {
    await contactController.delete(req.query.id);
    return res.status(200).json({});
  }
};

export default handler;
