import { Container, Grid, Typography } from "@mui/material";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.copyrightContainer}>
      <Container>
        <Grid container sx={{ pt: 2, pb: 2 }} justifyContent={"center"}>
          <Typography align="center" variant="caption">
            Build Stack: Nextjs, Mui5, Prisma
          </Typography>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
