import React, { useState } from "react";
import Rating from "@mui/material/Rating";

const MyRating = () => {
  const [value, setValue] = useState<null | number>(2);
  return (
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
};

export default MyRating;
