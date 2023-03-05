import "./App.css";
import { React } from "react";
import { Grid } from "@mui/material";
import Navbar from "./Components/Navbar";
import Marketcards from "./Components/Marketcards";
import Surveys from "./Components/Surveys";
import Personas from "./Components/Personas";

function App() {
  return (
    <div id="project-container">
      <Navbar />
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <h1 id="title"> Case Study: Designing for the Elderly</h1>
          <h4> Flora Avakian 40158192 Section S</h4>
          <h4>Jonathan Pauze 40177730 Section S</h4>
          <h4>Julien Phan 40133814 Section V</h4>
        </Grid>
        <Grid item xs={6}>
          <h1> </h1>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <div id="Problem">
        <h1 id="title"> Understanding the problem</h1>
        <h5 id="paragraph">
          The need to improve the quality of life for the senior population is
          expanding as the population ages. It has been challenging for seniors
          to adopt technology that might possibly improve their lives due to a
          lack of applications designed specifically for them. The elderly are
          an extremely diverse group with more variabilitiy in their abilities
          than younger groups, hence making it hard to design for them. The
          Covid-19 pandemic has also had a significant impact on the elderly's
          ability to keep up social connections and access medical resources.
        </h5>
        <h3 id="paragraph">Therefore, </h3>
        <h5 id="paragraph">
          Our objective is to design an application that enhances the quality of
          life of seniors by providing them access to resources that supports
          their physical and mental wellbeing, as well as giving them a way to
          keep in touch with their families. Our application will provide a
          user-friendly interface which is adaptable and easy for seniors to
          use.
        </h5>
      </div>
      <div id="Research">
        <h1 id="title"> Research</h1>
        <h3 id="secondary-title">What is available on the Market</h3>
        <h5 id="paragraph">
          Due to the aging of the global population, there is an increasing
          demand for applications made specifically for seniors. According to
          <a href=" https://www.factmr.com/report/3123/senior-care-technologies-market">
            {" "}
            a study by Senior Care Technologies Market Outlook
          </a>
          , the global senior care technologies market is at present valued at
          $43.38 Billion in 2022. The market is further anticipated to cross a
          valuation of $76.23 Billion by the end of 2032. There are currently
          many apps on the market that are designed for the elderly, here are
          some examples :
        </h5>
        <Marketcards />
        <h3 id="secondary-title">Surveys</h3>
        <h5 id="paragraph">
          The elderly are a diverse population with varying levels of technology
          experience and comfort. Some may have little knowledge and find
          technology difficult to use, while some may be tech-savvy and use a
          variety of technological devices. We conducted a survey to gather
          feedback from elderly people and understand their preferences and
          needs when it comes to using technology.This will help us in
          developing an app that is more inclusive, accessible, and
          user-friendly.
        </h5>
        <h5 id="paragraph">
          Here are the findings of our{" "}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScjnbsTVL_80Z0VI418eEWkYj3HLPP5xGdBlF9cOikDmqeyIQ/viewform">
            survey
          </a>
          . We distributed the questionnaires to senior relatives of our team
          members and we received 22 responses.
        </h5>
        <Surveys />
      </div>
      <div id="Analysis">
        <h1 id="title">Analysis</h1>
        <h5 id="paragraph">
          With our research concluded, we move on to the analysis phase of the
          design process. A thorough examination of the data collected will
          helps us determine user needs in order to create the ideal design.{" "}
        </h5>
        <h3 id="secondary-title">User personas</h3>
        <h5 id="paragraph">
          Using data we gathered from surveys, we were able to create four
          unique personas whom all have different personalities, traits and
          desires for the application, but ultimately want an app to use. Each
          persona has background information, their relationship with
          smartphones and a list of traits that can affect desires. Their
          motivations and goals in regards of using an app for their wellbeing
          are also recorded alongside their pain points, highlighting the
          troubles that they are facing throughout their journey.
        </h5>
        <Personas />
        <h3 id="secondary-title">Journey Map</h3>
        <h5 id="paragraph">
          This user journey follows Cindy, an elderly woman with dentures who
          frequently attends ladies get-togethers, as she uses our elderly app
          to manage her denture care and other aspects of her life.
        </h5>
        <img
          alt="journeymap"
          src={require("./images/journeymap/journeymap.jpg")}
          style={{
            height: "80%",
            width: "80%",
            paddingRight: "100px",
            paddingLeft: "100px",
          }}
        />
      </div>
      <div id="VisualDesign">
        <h1 id="title"> Visual Design</h1>
      </div>
      <div id="FinalDesign">
        <h1 id="title"> Final Design</h1>
      </div>
    </div>
  );
}

export default App;
