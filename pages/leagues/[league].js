import React from "react";
import { getLeagueData } from "../../lib/leagues";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Accordion from "../../components/Accordion";

export async function getServerSideProps(context) {
  const league = context.query.league.toUpperCase();
  const leagues = await getLeagueData(league);
  return {
    props: {
      leagues,
    }, // will be passed to the page component as props
  };
}

const League = (props) => {
  return (
    <section>
      <Typography variant={"h1"}>Leagues</Typography>
      <Grid container>
        <Grid item>item</Grid>
      </Grid>
    </section>
  );
};

export default League;
