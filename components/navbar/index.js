import * as React from "react";
import {
  AppBar,
  Box,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material/";

import Link from "next/link";

const AppBarCustom = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Toolbar disableGutters sx={{ height: "100%" }}>
          <Box sx={{ mr: 2 }}>
            <Stack flexDirection="row" alignItems="center">
              <Link href="/" passHref>
                <Box>
                  <Typography variant="h6">Brief Media React Test</Typography>
                </Box>
              </Link>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarCustom;
