import React from "react";
import { getLeagueData } from "../../lib/leagues";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Accordion from "../../components/Accordion";

export async function getServerSideProps(context) {
  const leagues = await getLeagueData();
  return {
    props: {
      leagues,
    }, // will be passed to the page component as props
  };
}

const Index = (props) => {
  const { leagues } = props;

  return (
    <section>
      <Typography variant={"h1"}>Leagues</Typography>
      <Grid container>
        <Grid item>
          <Accordion data={leagues} />
        </Grid>
      </Grid>
    </section>
  );
};

export default Index;
