import React from "react";
import { getSetsData } from "../../lib/sets";
import Grid from "@mui/material/Grid";
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
  console.log("items", items);
  return (
    <div>
      <h1>Sets</h1>
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
    </div>
  );
};

export default Index;
