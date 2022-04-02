import { useState, useEffect } from "react";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material/";

import ContactCard from "components/contact-card";
import FormModal from "components/form-modal";
import ContactForm from "components/contact-form";

import { contactService } from "services/contact.service";

const ContactsList = ({ contacts: initialContacts }) => {
  const [contacts, setContacts] = useState(initialContacts);
  const [modalOpen, setModalOpen] = useState(false);
  const [contactEditing, setContactEditing] = useState(null);

  const handleContactFormClose = async () => {
    setContactEditing(null);
    setModalOpen(false);
    await updateContracts();
  };

  const handleContactAdd = async () => {
    setContactEditing(null);
    setModalOpen(true);
  };

  const handleContactUpdate = async (contact) => {
    setContactEditing(contact);
    setModalOpen(true);
  };

  const handleContactDelete = async (contact) => {
    await contactService.delete(contact.id);
    await updateContracts();
  };

  const updateContracts = async () => {
    const contacts = await contactService.getAll();

    setContacts(contacts);
  };

  useEffect(() => {}, []);

  return (
    <>
      <FormModal open={modalOpen} onClose={() => setModalOpen(false)}>
        <ContactForm
          editMode={contactEditing ? true : false}
          contact={contactEditing}
          onClose={handleContactFormClose}
        />
      </FormModal>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" align="center">
            Contacts Manager
          </Typography>
          <Typography variant="h5" align="center">
            By: Thomas Kay
          </Typography>
        </Box>

        <Stack direction="row" justifyContent="end">
          <Button variant="contained" onClick={handleContactAdd}>
            Add Contact
          </Button>
        </Stack>
      </Paper>
      <Grid sx={{ my: 1 }} container spacing={4}>
        {contacts.length ? (
          contacts.map((contact, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <ContactCard
                  contact={contact}
                  onUpdate={handleContactUpdate}
                  onDelete={handleContactDelete}
                />
              </Grid>
            );
          })
        ) : (
          <Grid item>
            <Typography variant="caption">
              No contacts available. Try creating one!
            </Typography>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default ContactsList;
