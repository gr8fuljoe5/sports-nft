import React from "react";
// import { getLeagueData } from "../../lib/leagues";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// export async function getServerSideProps(context) {
//   console.log(context);
//   const league = await getLeagueData();
//   return {
//     props: {
//       league,
//     }, // will be passed to the page component as props
//   };
// }

const Team = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography variant={"h1"}>TEAM</Typography>
      </Grid>
    </Grid>
  );
};

export default Team;
