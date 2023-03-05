import { Grid } from "@mui/material";

const Personas = () => {
  return (
    <Grid
      container
      spacing={2}
      style={{ paddingLeft: "70px", paddingRight: "70px" }}
    >
      <Grid item xs={6} md={6}>
        <img
          id="persona-image"
          alt="persona1"
          src={require("../images/personas/persona1.png")}
        />
      </Grid>
      <Grid item xs={6} md={6}>
        <img
          id="persona-image"
          alt="persona2"
          src={require("../images/personas/persona2.png")}
        />
      </Grid>
      <Grid item xs={6} md={6}>
        <img
          id="persona-image"
          alt="persona3"
          src={require("../images/personas/persona3.png")}
        />
      </Grid>
      <Grid item xs={6} md={6}>
        <img
          id="persona-image"
          alt="persona4"
          src={require("../images/personas/persona4.png")}
        />
      </Grid>
    </Grid>
  );
};

export default Personas;
