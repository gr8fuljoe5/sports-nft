import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";

export default function AccordionComponent(props) {
  const { data } = props;
  return (
    <div>
      {data &&
        data.map((item) => {
          const { teams } = item;
          return (
            <Accordion key={item.league}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{item.league}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List dense={true}>
                  <ListItem>
                    <ListItemText>
                      <Link href={`/leagues/${item.league.toLowerCase()}`}>
                        <a>See All {item.league}</a>
                      </Link>
                    </ListItemText>
                  </ListItem>
                  {teams &&
                    teams.map((item) => {
                      return (
                        <ListItem key={item.fields.name}>
                          <ListItemText>{item.fields.name}</ListItemText>
                        </ListItem>
                      );
                    })}
                  {!teams && (
                    <ListItem>
                      <ListItemText>
                        <Typography>No Teams available</Typography>
                      </ListItemText>
                    </ListItem>
                  )}
                </List>
              </AccordionDetails>
            </Accordion>
          );
        })}
    </div>
  );
}
