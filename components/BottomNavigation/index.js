import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

export default function SimpleBottomNavigation(props) {
  const [value, setValue] = React.useState(0);
  console.log(props.data);
  const { data } = props;
  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {data &&
          data.map((item, idx) => {
            return (
              <BottomNavigationAction
                key={idx}
                label={item.leagueInfo.league}
                icon={<item.icon />}
              />
            );
          })}
      </BottomNavigation>
    </Box>
  );
}
