import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CustomizedDialogs from "../../components/Dialog";

export default function BasicTable(props) {
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState([]);
  const [title, setTitle] = React.useState("");

  const handleClickOpen = (idx) => {
    setImage([
      data[idx].images[0].fields.file,
      data[idx].images[1].fields.file,
    ]);
    setTitle(data[idx].athlete);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { data } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Athlete</TableCell>
            <TableCell align="right">Collection</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Manufacturer</TableCell>
            <TableCell align="right">Set</TableCell>
            <TableCell align="right">Card Number/Of</TableCell>
            <TableCell align="right">Rarity</TableCell>
            <TableCell align="right">Serial</TableCell>
            <TableCell align="right">Sport</TableCell>
            <TableCell align="right">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((row, idx) => (
              <TableRow
                key={`${row.athlete}-${idx}`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.athlete}
                </TableCell>
                <TableCell align="right">{row.collection}</TableCell>
                <TableCell align="right">{row.year}</TableCell>
                <TableCell align="right">{row.manufacturer}</TableCell>
                <TableCell align="right">{row.set}</TableCell>
                <TableCell align="right">{`${row.cardNumber}/${row.ofNumber}`}</TableCell>
                <TableCell align="right">{row.rarity}</TableCell>
                <TableCell align="right">{row.serial}</TableCell>
                <TableCell align="right">{row.sport}</TableCell>
                <TableCell align={"right"}>
                  <Button
                    variant="outlined"
                    onClick={(e) => handleClickOpen(idx)}
                  >
                    See image for {row.athlete}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <CustomizedDialogs
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        title={title}
        open={open}
        image={image}
      />
    </TableContainer>
  );
}
