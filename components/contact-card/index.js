import React, { useState } from "react";
import moment from "moment";
import { Box, IconButton, Paper, Typography, Stack } from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import ConfirmModal from "components/confirm-modal";

const ContactCard = ({ contact = {}, onUpdate, onDelete }) => {
  const [shadowDepth, setShadowDepth] = useState(1);
  const [openConfirm, setOpenConfirm] = useState(false);

  const {
    firstName = "",
    lastName = "",
    birthDate = "",
    address = "",
    emailAddresses = [],
    phoneNumbers = [],
  } = contact;

  const fullName = `${firstName} ${lastName}`;

  const handleOnContactEdit = () => {
    onUpdate(contact);
  };

  const handleOnContactDelete = () => {
    setOpenConfirm(true);
  };

  const handleOnConfirmDelete = () => {
    setOpenConfirm(false);
    onDelete(contact);
  };

  const normalizeDate = (date) => {
    return moment(date).format("M/DD/YYYY");
  };

  return (
    <>
      <ConfirmModal
        open={openConfirm}
        setOpen={setOpenConfirm}
        onConfirm={handleOnConfirmDelete}
        question={`Are you sure you want to delete the contact of ${fullName}?`}
      />
      <Paper
        sx={{ p: 2 }}
        onMouseOver={() => setShadowDepth(2)}
        onMouseOut={() => setShadowDepth(1)}
        elevation={shadowDepth}
      >
        <Box>
          <Stack direction="row" spacing={1} justifyContent="end">
            <IconButton
              color="secondary"
              aria-label="Edit contact"
              onClick={handleOnContactEdit}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="Delete contact"
              onClick={handleOnContactDelete}
            >
              <DeleteIcon />
            </IconButton>
          </Stack>
        </Box>
        <Box>
          <Typography fontWeight={500} variant="h6">
            {fullName}
          </Typography>
        </Box>
        <Box>
          <Typography>{normalizeDate(birthDate)}</Typography>
        </Box>
        <Box>
          <Typography>{address}</Typography>
        </Box>
        <Box>
          {emailAddresses.length
            ? emailAddresses.map((emailAddress, index) => (
                <Typography key={index}>{emailAddress}</Typography>
              ))
            : null}
        </Box>
        <Box>
          {phoneNumbers.length
            ? phoneNumbers.map((phoneNumber, index) => (
                <Stack key={index} flexDirection="row">
                  <Typography sx={{ mr: 1 }}>{phoneNumber.type}:</Typography>
                  <Typography>{phoneNumber.number}</Typography>
                </Stack>
              ))
            : null}
        </Box>
      </Paper>
    </>
  );
};

export default ContactCard;
