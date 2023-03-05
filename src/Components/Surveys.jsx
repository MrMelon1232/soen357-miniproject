import { Grid, Typography } from "@mui/material";

const Surveys = () => {
  return (
    <Grid
      container
      spacing={2}
      style={{ paddingLeft: "70px", paddingRight: "70px" }}
    >
      <Grid item xs={6} md={6}>
        <img alt="survey1" src={require("../images/surveys/survey1.png")} />
      </Grid>
      <Grid item xs={6} md={6}>
        <img alt="survey2" src={require("../images/surveys/survey2.png")} />
      </Grid>
      <Grid item xs={6} md={6}>
        <img alt="survey3" src={require("../images/surveys/survey3.png")} />
      </Grid>
      <Grid item xs={6} md={6}>
        <img alt="survey4" src={require("../images/surveys/survey4.png")} />
      </Grid>
      <Grid item xs={6} md={6}>
        <img alt="survey5" src={require("../images/surveys/survey5.png")} />
      </Grid>
      <Grid item xs={6} md={6}>
        <img alt="survey6" src={require("../images/surveys/survey6.png")} />
      </Grid>
      <Typography
        id="text"
        variant="body2"
        justifyContent="center"
        alignItems="center"
        display="flex"
        textAlign="center"
      >
        Overall, these results suggest that elderly people use smartphones and
        tablets regularly and are generally comfortable with technology.
        However, there are still some challenges and problems they face when
        using mobile apps, and there is the need for more senior-friendly apps
        that have features such as large font size and voice commands.
      </Typography>
    </Grid>
  );
};

export default Surveys;
