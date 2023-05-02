import React from "react";
import { PROFILE_DATA } from "./ViewProfileData";
import { Avatar, Box, Icon, Typography } from "@mui/material";
import Link from "next/link";
import { useTheme } from "@emotion/react";

const ViewProfile = () => {
  const theme: any = useTheme();
  return (
    <Box
      sx={{
        boxShadow: theme.customShadows.success,
        pb: 1.5,
        borderRadius: "10px",
      }}
    >
      {PROFILE_DATA.map((item: any) => (
        <div key={item.id}>
          <Box
            style={{
              backgroundColor: theme.palette.primary.main,
              height: "150px",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                mt: 0.5,
                color: theme.palette.grey[0],
              }}
            >
              <Typography variant="subtitle1">{item.name}</Typography>
              <Typography variant="caption">{item.designation}</Typography>
            </Box>
            <Avatar
              sx={{
                width: "112px",
                height: "112px",
                position: "absolute",
                borderRadius: "10px",
                backgroundColor: "white",
                textAlign: "center",
                bottom: "-20%",
              }}
              src={item.profile}
            />
          </Box>
          <Typography
            variant="subtitle2"
            sx={{
              whiteSpace: "pre",
              mt: 5.5,
              mb: 1,
              textAlign: "center",
              color: theme.palette.grey[600],
            }}
          >
            {item.address}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: 0.5,
              color: theme.palette.grey[600],
            }}
          >
            <Icon>{item.icon}</Icon>
            <Typography variant="caption">{item.phone}</Typography>
          </Box>
        </div>
      ))}
      <Box
        sx={{
          display: "flex",
          mt: { xs: 2, sm: "none" },
          justifyContent: "space-between",
          padding: { xs: "10px 20px 0 20px", sm: "30px 50px 0 50px" },
        }}
      >
        <Link href="#" style={{ textDecoration: "none" }}>
          <Typography
            variant="subtitle2"
            sx={{ color: theme.palette.primary.main }}
          >
            Edit Full Profile
          </Typography>
        </Link>
        <Link href="#" style={{ textDecoration: "none" }}>
          <Typography
            variant="subtitle2"
            sx={{ color: theme.palette.primary.main }}
          >
            View Profile
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default ViewProfile;
