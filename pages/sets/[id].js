import React from "react";
import { getSetsData } from "../../lib/sets";
export async function getServerSideProps(context) {
  const set = await getSetsData(context.query.id);
  return {
    props: {
      set,
    }, // will be passed to the page component as props
  };
}
const SetId = (props) => {
  console.log(props);
  return <div>PAGE</div>;
};

export default SetId;
