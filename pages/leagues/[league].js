import React from "react";
import { getLeagueData } from "../../lib/leagues";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export async function getServerSideProps(context) {
  const sport = context.query.league.toUpperCase();
  const league = await getLeagueData(sport);
  return {
    props: {
      league,
    }, // will be passed to the page component as props
  };
}

const League = (props) => {
  const { league } = props;
  const { league: leagueName, teams } = league[0].fields;
  console.log(props);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant={"h1"}>{leagueName}</Typography>
        <Grid container spacing={2}>
          {teams &&
            teams.map((item) => {
              return (
                <Grid item key={item.fields.name} xs={12} md={4}>
                  <Link href={`/leagues/${leagueName.toLowerCase()}/teams/atl`}>
                    <a>{item.fields.name}</a>
                  </Link>
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default League;
