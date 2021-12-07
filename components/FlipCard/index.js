import React from "react";
import { makeStyles } from "@mui/styles";
import Skeleton from "@mui/material/Skeleton";
import Image from "next/image";
const useStyles = makeStyles({
  flipCard: {
    backgroundColor: "transparent",
    width: "300px",
    height: "200px",
    border: "1px solid #f1f1f1",
    perspective: "1000px",
    "&:hover": {
      "& div": {
        transform: "rotateY(180deg)",
      },
    },
  },
  flipCardInner: {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.8s",
    transformStyle: "preserve-3d",
  },
  flipCardFront: {
    backgroundColor: "#bbb",
    color: "black",
    // Needs variable for reuse
    position: "absolute",
    width: "100%",
    height: "100%",
    webkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
  },
  flipCardBack: {
    backgroundColor: "dodgerblue",
    color: "white",
    transform: "rotateY(180deg)",
    // Needs variable for reuse
    position: "absolute",
    width: "100%",
    height: "100%",
    webkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
  },
});

function FlipCard(props) {
  const { images } = props;
  const front = images[0];
  const back = images[1];
  const frontUrl = front.fields.file.url;
  const backUrl = back.fields.file.url;
  const { height, width } = front.fields.file.details.image;
  const classes = useStyles();
  return (
    <>
      <div className={classes.flipCard}>
        <div className={classes.flipCardInner}>
          <div className={classes.flipCardFront}>
            <Image
              src={`http:${frontUrl}`}
              height={height}
              width={width}
              alt={"image front"}
              priority
            />
          </div>
          <div className={classes.flipCardBack}>
            <Image
              src={`http:${backUrl}`}
              height={height}
              width={width}
              alt={"image back"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FlipCard;
