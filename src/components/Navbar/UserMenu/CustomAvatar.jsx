import * as React from "react";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { StyledBadge } from "./UserStyles";

import User from "../../../assets/User.svg";
const CustomAvatar = () => {
  return (
    <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar>
          <img src={User} alt="User" width="45px" />
        </Avatar>
      </StyledBadge>
    </Stack>
  );
};

export default CustomAvatar;
