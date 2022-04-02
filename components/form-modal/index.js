import { Box, Modal } from "@mui/material/";

const FormModal = ({ open, onClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          maxWidth: 600,
          width: { xs: "90%", sm: 500, md: 600 },
          maxHeight: "95vh",
          position: "absolute",
          overflow: "auto",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          pt: 2,
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};

export default FormModal;
