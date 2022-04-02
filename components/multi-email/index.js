import { Box, Typography } from "@mui/material/";
import { ReactMultiEmail, isEmail } from "react-multi-email";
import "react-multi-email/style.css";

const MultiEmail = ({ emails, setEmails }) => {
  return (
    <Box>
      <Typography sx={{ mb: 1 }} variant="body2">
        Email Addresses
      </Typography>
      <ReactMultiEmail
        placeholder="Email addresses"
        emails={emails}
        onChange={setEmails}
        validateEmail={(email) => {
          return isEmail(email);
        }}
        getLabel={(email, index, removeEmail) => {
          return (
            <Box data-tag key={index}>
              {email}
              <Box
                component="span"
                data-tag-handle
                onClick={() => removeEmail(index)}
              >
                ×
              </Box>
            </Box>
          );
        }}
      />
    </Box>
  );
};

export default MultiEmail;
