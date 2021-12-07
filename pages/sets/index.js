import React from "react";
import { getSetsData } from "../../lib/sets";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export async function getServerSideProps(context) {
  const sets = await getSetsData();
  return {
    props: {
      sets,
    }, // will be passed to the page component as props
  };
}

const Index = (props) => {
  const { sets } = props;
  const { items } = sets;

  return (
    <section>
      <Typography variant={"h1"}>Sets</Typography>
      <Grid container>
        {items.map((item, idx) => {
          const title = `${item.fields.platform} - ${item.fields.setName}`;
          return (
            <Grid item sm={12} key={idx}>
              <Link href={`/sets/${item.sys.id}`}>{title}</Link>
            </Grid>
          );
        })}
      </Grid>
    </section>
  );
};

export default Index;
