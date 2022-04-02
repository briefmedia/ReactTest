import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const contactController = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll() {
  const allContacts = await prisma.contact.findMany();

  return allContacts;
}

async function getById(id) {
  const contact = await prisma.contact.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });

  return contact;
}

async function create(contact) {
  const newContact = await prisma.contact.create({
    data: contact,
  });
}

async function update(id, contact) {
  const contactUpdated = await prisma.contact.update({
    where: { id: parseInt(id, 10) },
    data: contact,
  });

  return contactUpdated;
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
async function _delete(id) {
  const contactDeleted = await prisma.contact.delete({
    where: {
      id: parseInt(id, 10),
    },
  });
}
