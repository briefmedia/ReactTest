import { useEffect } from "react";
import { Box, Container, Toolbar } from "@mui/material/";

import ScrollTop from "components/scroll-top";
import HeadMeta from "components/head-meta";

import ContactsList from "components/contacts-list";

const Landing = ({ contacts = [] }) => {
  useEffect(() => {}, []);

  return (
    <>
      <HeadMeta
        title="Thomas Kay | Brief Media React Test"
        description="Utilize a simple API to create a Contact Management web application using RESTful endpoints to CRUD contacts."
        ogTitle="Thomas Kay | Brief Media React Test"
        ogDescription="Utilize a simple API to create a Contact Management web application using RESTful endpoints to CRUD contacts."
        ogUrl=""
      />
      <Toolbar id="back-to-top-anchor" />

      <ScrollTop />

      <Box component="main" sx={{ my: 1, minHeight: "100vh" }}>
        <Container>
          <ContactsList contacts={contacts} />
        </Container>
      </Box>
    </>
  );
};

export default Landing;
