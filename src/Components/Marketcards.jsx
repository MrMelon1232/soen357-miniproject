import {
  Card,
  Typography,
  Button,
  Grid,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

const Marketcards = () => {
  return (
    <Grid
      container
      spacing={2}
      style={{ paddingLeft: "70px", paddingRight: "70px" }}
    >
      {/* Website 1: Pill reminder */}
      <Grid item xs={6} md={6}>
        <Card>
          <CardMedia
            sx={{ height: 200 }}
            image={require("../images/marketcards/medisafe.png")}
            title="Pill Reminder by Medisafe"
          />
          <CardContent>
            <Typography
              id="text"
              gutterBottom
              variant="h5"
              component="div"
              style={{ fontWeight: "bolder" }}
            >
              Pill Reminder by Medisafe
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                Description
              </Grid>
              <Grid item xs={6}>
                <Typography id="text" variant="body2" color="text.secondary">
                  Pill Reminder is a medication management app that provides
                  medication reminders, refill alerts, and pill tracking. It
                  also offers features such as drug interaction warnings,
                  prescription discount coupons, and medication history. The
                  app's interface is easy to use and can help seniors keep track
                  of their medications and avoid missing doses.
                </Typography>
              </Grid>
              <Grid item xs={6}>
                Interface features
              </Grid>
              <Grid item xs={6}>
                <Typography id="text" variant="body2" color="text.secondary">
                  The app's interface is easy to use and can help seniors keep
                  track of their medications and avoid missing doses.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a href="https://www.medisafe.com">Learn More</a>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      {/* Website 2: Senior Safety */}
      <Grid item xs={6} md={6}>
        <Card>
          <CardMedia
            sx={{ height: 200 }}
            image={require("../images/marketcards/seniorsafety.png")}
            title="Senior Safety"
          />
          <CardContent>
            <Typography
              id="text"
              gutterBottom
              variant="h5"
              component="div"
              style={{ fontWeight: "bolder" }}
            >
              Senior Safety
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                Description
              </Grid>
              <Grid item xs={6}>
                <Typography id="text" variant="body2" color="text.secondary">
                  Senior Safety Phone is a simplified Android app designed
                  specially for elderly users. It has standard phone features
                  including calling, texting, and a camera. The app also
                  features a power conservation mode, easy access to medical
                  data, and an SOS button for emergencies.
                </Typography>
              </Grid>
              <Grid item xs={6}>
                Interface features
              </Grid>
              <Grid item xs={6}>
                <Typography id="text" variant="body2" color="text.secondary">
                  The app's interface is simple, with big buttons, clear writing
                  and associative colors. This straightforward design faciliates
                  user understanding and allows the users to associate words
                  with the existing buttons and colors. For example, red
                  signifies a danger.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a href="https://www.seniorsafetyapp.com">Learn More</a>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      {/* Website 3: Lumino */}
      <Grid item xs={6} md={6}>
        <Card>
          <CardMedia
            sx={{ height: 200 }}
            image={require("../images/marketcards/lumino.png")}
            title="Lumino"
          />
          <CardContent>
            <Typography
              id="text"
              gutterBottom
              variant="h5"
              component="div"
              style={{ fontWeight: "bolder" }}
            >
              Lumino
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                Description
              </Grid>
              <Grid item xs={6}>
                <Typography id="text" variant="body2" color="text.secondary">
                  The Lumino app is designed to assist elderly in maintaining
                  their independence and wellbeing. It provides numerous
                  functions, such as medicine reminders, fall detection, and
                  emergency contacts. Users can schedule reminders for their
                  meds with the medication management feature. The app also
                  notifies the user's emergency contacts if a prescription dose
                  is missed. It has a fall detection function which makes
                  elderly people feel safer while going about their regular
                  activities. Also, the app will immediately contact for
                  assistance if the user becomes unresponsive.
                </Typography>
              </Grid>
              <Grid item xs={6}>
                Interface features
              </Grid>
              <Grid item xs={6}>
                <Typography id="text" variant="body2" color="text.secondary">
                  The app's interface is easy to navigate, allowing specific
                  searches and categorized health topics. This helps ease
                  understanding, hence providing a friendly and simplified user
                  experience, making it perfect for seniors.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a href="https://luminohealth.sunlife.ca/s/?language=en_US">
                Learn More
              </a>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      {/* Website 4: Luminosity */}
      <Grid item xs={6} md={6}>
        <Card>
          <CardMedia
            sx={{ height: 200 }}
            image={require("../images/marketcards/luminosity.jpg")}
            title="Luminosity"
          />
          <CardContent>
            <Typography
              id="text"
              gutterBottom
              variant="h5"
              component="div"
              style={{ fontWeight: "bolder" }}
            >
              Luminosity
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                Description
              </Grid>
              <Grid item xs={6}>
                <Typography id="text" variant="body2" color="text.secondary">
                  Luminosity is an app that provides a variety of brain-training
                  activities and exercises that are especially made for elderly
                  to help them retain their mental health and cognitive
                  ability.This application stimulates and challenges parts of
                  the brain like memory, attention, problem-solving, and
                  processing speed .It also offers a customized training program
                  that changes based on the user's performance and preferences.
                  The app also offers mindfulness exercises and relaxation
                  techniques to help users manage stress and enhance their
                  general well-being.
                </Typography>
              </Grid>
              <Grid item xs={6}>
                Interface features
              </Grid>
              <Grid item xs={6}>
                <Typography id="text" variant="body2" color="text.secondary">
                  It has a user-friendly design, using big images to convey an
                  idea along with big logos, big texts and simple colors. These
                  features allows any age group to easily use the application.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a href="https://www.lumosity.com/en/">Learn More</a>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Marketcards;
