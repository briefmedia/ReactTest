import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Divider,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material/";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import MultiEmail from "components/multi-email";
import MultiPhone from "components/multi-phone";

import { contactService } from "services/contact.service";
import style from "./contact-form.module.css";

const ContactForm = ({ contact, onClose, editMode = false }) => {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [firstName, setFirstName] = useState(contact ? contact.firstName : "");
  const [lastName, setLastName] = useState(contact ? contact.lastName : "");
  const [birthDate, setBirthDate] = useState(
    contact ? contact.birthDate : new Date()
  );
  const [address, setAddress] = useState(contact ? contact.address : "");
  const [emailAddresses, setEmailAddresses] = useState(
    contact ? contact.emailAddresses || [] : []
  );
  const [phoneNumbers, setPhoneNumbers] = useState(
    contact ? contact.phoneNumbers || [] : []
  );

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setBirthDate(new Date());
    setAddress("");
    setEmailAddresses([]);
    setPhoneNumbers([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editMode) {
      return handleUpdateContact();
    }

    return handleCreateContact();
  };

  const handleCreateContact = async () => {
    const newContact = {
      firstName,
      lastName,
      birthDate,
      address,
      emailAddresses,
      phoneNumbers,
    };

    const res = await contactService.create(newContact);

    handleAlert(res);
  };

  const handleUpdateContact = async () => {
    const updatedContact = {
      firstName,
      lastName,
      birthDate,
      address,
      emailAddresses,
      phoneNumbers,
    };

    const res = await contactService.update(contact.id, updatedContact);

    handleAlert(res);
  };

  // TODO: Check res message and handle toggling snackbar to give success/failture feedback
  const handleAlert = (res) => {
    onClose();
  };

  return (
    <Box className={style.formContainer}>
      <Paper className={style.form}>
        <Snackbar
          open={success}
          onClose={() => setSuccess(false)}
          autoHideDuration={3000}
        >
          <Alert severity="success">Success!</Alert>
        </Snackbar>
        <Snackbar
          open={failure}
          onClose={() => setFailure(false)}
          autoHideDuration={3000}
        >
          <Alert severity="error">
            Whoops, something went wrong. {errorMessage ? errorMessage : ""}
          </Alert>
        </Snackbar>
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" align="center" gutterBottom>
              {`${firstName} ${lastName}`}
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          <TextField
            sx={{ mb: 2 }}
            fullWidth
            value={firstName}
            name="firstName"
            required
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
          />

          <TextField
            sx={{ mb: 2 }}
            fullWidth
            value={lastName}
            name="lastName"
            required
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
          />

          <Box sx={{ mb: 2, display: "inline-block" }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                disableFuture
                label="Birth Date"
                openTo="year"
                views={["year", "month", "day"]}
                value={birthDate}
                onChange={setBirthDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>

          <TextField
            sx={{ mb: 2 }}
            fullWidth
            value={address}
            name="address"
            label="Address"
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Mailing address"
          />

          <MultiEmail emails={emailAddresses} setEmails={setEmailAddresses} />

          <MultiPhone
            phoneNumbers={phoneNumbers}
            setPhoneNumbers={setPhoneNumbers}
          />

          <Box className={style.buttonContainer}>
            <Button
              variant="outlined"
              className={style.button}
              type="submit"
              disabled={false}
            >
              {editMode ? "Update" : "Create"} Contact
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default ContactForm;
